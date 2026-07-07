
import { motion } from "framer-motion";
import { FileText, ArrowRight, Calendar, Clock, User, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";


export default function Blogs() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@jayanthansenthilkumar?t=${Date.now()}`)}`)
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          setPosts(data.items);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch Medium articles", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32">
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

      <div>
        {isLoading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EA580C] mx-auto"></div>
            <p className="mt-4 text-slate-500 font-sans">Loading latest articles from Medium...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-slate-500 font-sans">
            No articles found.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.guid || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <article className="flex flex-col md:flex-row bg-[#FAF7F2] border border-[#E5E0D0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative h-full">
                  {/* Image Block */}
                  <div className="md:w-[40%] min-h-[200px] md:min-h-full bg-[#E5E0D0] relative border-b md:border-b-0 md:border-r border-[#E5E0D0] flex flex-col justify-center items-center overflow-hidden shrink-0">
                    {post.thumbnail ? (
                      <img src={post.thumbnail} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-[#E5E0D0] opacity-50"></div>
                        <div className="relative z-10 text-center">
                          <h3 className="font-serif text-2xl md:text-3xl text-[#0F172A] leading-none mb-1">Jayanthan</h3>
                          <p className="font-serif italic text-xl text-[#EA580C]">Insights</p>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Content Block */}
                  <div className="md:w-[60%] p-5 md:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-[#EA580C] font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3 flex items-center">
                        <span>{new Date(post.pubDate.replace(/-/g, '/')).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <h3 className="text-xl font-serif text-[#0F172A] mb-2 group-hover:text-[#EA580C] transition-colors leading-tight">
                        <Link 
                          to={`/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                          className="before:absolute before:inset-0"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <div className="flex items-center space-x-2 text-slate-500 text-sm mb-3">
                        <User className="w-4 h-4" />
                        <span>{post.author || "Jayanthan Senthilkumar"}</span>
                      </div>
                      <p className="text-slate-600 font-sans font-light leading-relaxed mb-4 text-sm line-clamp-3">
                        {post.description.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')}
                      </p>
                    </div>
                    <div className="flex justify-between items-center border-t border-[#E5E0D0] pt-4 mt-2 relative z-20">
                      <div className="flex flex-wrap gap-2">
                        {post.categories && post.categories.slice(0, 2).map((category: string) => (
                          <span key={category} className="px-3 py-1 bg-white border border-[#E5E0D0] text-slate-500 rounded-full text-[10px] font-medium uppercase tracking-wider">{category}</span>
                        ))}
                      </div>
                      <Link 
                        to={`/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                        className="flex items-center space-x-1 text-[#EA580C] hover:text-[#C2410C] text-[10px] font-bold tracking-[0.1em] uppercase transition-colors shrink-0 ml-2"
                      >
                        <span className="hidden sm:inline">Read Article</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        )}
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
