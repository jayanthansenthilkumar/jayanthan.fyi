import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import type { Route } from "./+types/article";
import { Link, useParams } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  // In a real app, we'd fetch the article based on params.slug to set title
  return [
    { title: `Article | Portfolio` },
    { name: "description", content: "Technical writing deep dive." },
  ];
}

import { useState, useEffect } from "react";

export default function Article() {
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@jayanthansenthilkumar?t=${Date.now()}`)}`)
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          // Find the article by matching the generated slug
          const foundArticle = data.items.find((item: any) => 
            item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
          );
          setArticle(foundArticle || null);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch article", err);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 bg-[#F6F4EB] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EA580C] mx-auto"></div>
          <p className="mt-4 text-slate-500 font-sans">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 bg-[#F6F4EB] min-h-screen text-center">
        <h1 className="text-4xl font-serif text-[#0F172A] mb-4">Article Not Found</h1>
        <p className="text-slate-500 font-sans mb-8">We couldn't find the article you're looking for.</p>
        <Link to="/blogs" className="inline-flex items-center space-x-2 text-[#EA580C] hover:text-[#C2410C] font-medium uppercase tracking-wider text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 bg-[#F6F4EB] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/blogs" className="inline-flex items-center space-x-2 text-slate-500 hover:text-[#EA580C] transition-colors mb-12 font-sans font-medium uppercase tracking-wider text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <div className="flex items-center space-x-4 text-sm font-sans text-slate-500 mb-6 uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(article.pubDate.replace(/-/g, '/')).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
          <span className="text-[#E5E0D0]">|</span>
          <div className="flex items-center space-x-1 text-[#EA580C]">
            <Clock className="w-4 h-4" />
            <span>{Math.max(1, Math.ceil(article.content.split(' ').length / 200))} min read</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-serif text-[#0F172A] leading-tight mb-8">
          {article.title}
        </h1>

        <div className="flex items-center justify-between border-y border-[#E5E0D0] py-4 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#EA580C] flex items-center justify-center text-white font-serif font-bold text-lg">
              {article.author ? article.author.split(' ').map((n: string) => n[0]).join('').substring(0, 2) : "JS"}
            </div>
            <div>
              <p className="font-serif text-[#0F172A] font-medium leading-tight">{article.author || "Jayanthan Senthilkumar"}</p>
              <p className="text-slate-500 text-sm font-sans">Author</p>
            </div>
          </div>
          <button className="p-2 rounded-full border border-[#E5E0D0] hover:border-[#EA580C] hover:text-[#EA580C] text-slate-500 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body Content */}
        <div 
          className="font-sans font-light text-lg text-slate-700 leading-relaxed space-y-6 
            [&>h1]:font-serif [&>h1]:text-4xl [&>h1]:text-[#0F172A] [&>h1]:mt-12 [&>h1]:mb-6
            [&>h2]:font-serif [&>h2]:text-3xl [&>h2]:text-[#0F172A] [&>h2]:mt-12 [&>h2]:mb-6
            [&>h3]:font-serif [&>h3]:text-2xl [&>h3]:text-[#0F172A] [&>h3]:mt-8 [&>h3]:mb-4
            [&>p]:mb-6
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-3
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-3
            [&>blockquote]:border-l-4 [&>blockquote]:border-[#EA580C] [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:font-serif [&>blockquote]:text-2xl [&>blockquote]:italic [&>blockquote]:text-[#0F172A]
            [&_img]:rounded-xl [&_img]:my-8 [&_img]:w-full [&_img]:h-auto
            [&_a]:text-[#EA580C] [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: article.content || article.description }}
        />
        
        <div className="mt-16 pt-8 border-t border-[#E5E0D0] flex justify-between items-center">
          <p className="font-sans text-slate-500">Share this article</p>
          <div className="flex space-x-4">
            <button className="text-slate-400 hover:text-[#EA580C] font-medium uppercase tracking-wider text-sm transition-colors">Twitter</button>
            <button className="text-slate-400 hover:text-[#EA580C] font-medium uppercase tracking-wider text-sm transition-colors">LinkedIn</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
