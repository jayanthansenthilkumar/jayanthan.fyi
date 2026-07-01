import { motion } from "framer-motion";
import { FileText, ArrowRight, Calendar, Clock, User, MapPin } from "lucide-react";
import type { Route } from "./+types/blogs";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | Portfolio" },
    { name: "description", content: "Articles on software engineering and technology." },
  ];
}

export default function Blogs() {
  const posts = [
    {
      title: "Architecting for Scale: A Deep Dive into Event-Driven Systems",
      excerpt: "Exploring the nuances of building decoupled systems using Apache Kafka and Go. We look at common pitfalls and strategies for robust data streaming.",
      date: "2024-05-12",
      readTime: "8 min read",
      slug: "architecting-for-scale"
    },
    {
      title: "The Future of React: Server Components Explained",
      excerpt: "Demystifying React Server Components (RSC) and how they fundamentally change the way we think about rendering and data fetching in modern web apps.",
      date: "2024-04-28",
      readTime: "6 min read",
      slug: "react-server-components"
    },
    {
      title: "Optimizing PostgreSQL for Read-Heavy Workloads",
      excerpt: "A practical guide to indexing, materialized views, and query optimization techniques for scaling read performance in production databases.",
      date: "2024-03-15",
      readTime: "12 min read",
      slug: "postgresql-optimization"
    },
    {
      title: "Building Micro-Frontends with Webpack Module Federation",
      excerpt: "How we split our monolithic frontend into scalable, independent micro-frontends to improve team velocity.",
      date: "2024-02-02",
      readTime: "9 min read",
      slug: "micro-frontends-webpack"
    },
    {
      title: "Design Systems in Practice: From Figma to Code",
      excerpt: "The workflow and automation pipeline required to maintain a single source of truth for design tokens across a large engineering org.",
      date: "2024-01-18",
      readTime: "7 min read",
      slug: "design-systems-practice"
    }
  ];

  return (
    <div className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center space-x-3 text-[#EA580C] mb-6">
          <FileText className="h-6 w-6" />
          <h2 className="font-serif italic text-xl tracking-tight">/blog</h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-[#0F172A] mb-8 leading-tight">
          Technical <span className="italic text-[#EA580C]">Writings</span>
        </h1>
        <p className="text-xl text-slate-600 font-sans font-light">
          Thoughts, learnings, and deep dives into software engineering, architecture, and developer tools.
        </p>
      </motion.div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <article className="flex flex-col md:flex-row bg-[#FAF7F2] border border-[#E5E0D0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
              {/* Image Block */}
              <div className="md:w-[30%] min-h-[160px] md:min-h-full bg-[#E5E0D0] relative border-b md:border-b-0 md:border-r border-[#E5E0D0] flex flex-col justify-center items-center py-6 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-[#E5E0D0] opacity-50"></div>
                <div className="relative z-10 text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#0F172A] leading-none mb-1">Jayanthan</h3>
                  <p className="font-serif italic text-xl text-[#EA580C]">Insights</p>
                  <p className="font-sans font-bold tracking-[0.2em] text-[#0F172A] uppercase text-[10px] mt-3">Read Now</p>
                </div>
              </div>
              
              {/* Content Block */}
              <div className="md:w-[70%] p-5 md:p-6 flex flex-col justify-between">
                <div>
                  <div className="text-[#EA580C] font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3 flex items-center">
                    <span>{post.date}</span>
                    <span className="mx-2">|</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-[#0F172A] mb-2 group-hover:text-[#EA580C] transition-colors leading-tight">
                    <Link to={`/blogs/${post.slug}`} className="before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-2 text-slate-500 text-sm mb-3">
                    <User className="w-4 h-4" />
                    <span>Jayanthan Senthilkumar</span>
                  </div>
                  <p className="text-slate-600 font-sans font-light leading-relaxed mb-4 text-sm md:text-base">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-[#E5E0D0] pt-4 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white border border-[#E5E0D0] text-slate-500 rounded-full text-[10px] md:text-xs font-medium uppercase tracking-wider">Engineering</span>
                    <span className="px-3 py-1 bg-white border border-[#E5E0D0] text-slate-500 rounded-full text-[10px] md:text-xs font-medium uppercase tracking-wider">Tech</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-500 text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Remote, AUS</span>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 bg-[#0F172A] rounded-3xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h3 className="text-3xl font-serif mb-4">Join the <span className="italic text-[#EA580C]">Newsletter</span></h3>
          <p className="text-slate-300 font-sans font-light mb-8 max-w-lg mx-auto">
            Get the latest articles, deep dives, and tech insights delivered straight to your inbox once a month. No spam, unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#EA580C] w-full"
            />
            <button type="button" className="px-8 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
