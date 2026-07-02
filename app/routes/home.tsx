import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, User, FolderGit2, FileText, Mail, ArrowRight, ExternalLink, Calendar, Clock, Send, MessageSquare, MapPin } from "lucide-react";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useState, useEffect } from "react";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jayanthan Senthilkumar | AI & ML Engineer" },
    { name: "description", content: "Portfolio of Jayanthan Senthilkumar - AI & ML Engineer." },
  ];
}

export default function Home() {
  const featuredProjects = [
    {
      title: "PLANGO - AI Trip Planner",
      description: "A scalable AI-based trip optimizer with real-time traffic data, boosting route accuracy and reducing latency.",
      tags: ["Flask", "Python-ML", "SQLite", "JS"],
      status: "Production"
    },
    {
      title: "Cargo Fleet Management System",
      description: "IoT fleet system integrating ML load prediction and distributed data pipelines, improving utilization by 55%.",
      tags: ["Laravel", "IoT", "Python-ML", "Arduino"],
      status: "Production"
    }
  ];

  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jayanthansenthilkumar")
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          // Get the latest 2 posts
          setRecentPosts(data.items.slice(0, 2));
        }
        setIsLoadingBlogs(false);
      })
      .catch(err => {
        console.error("Failed to fetch Medium articles", err);
        setIsLoadingBlogs(false);
      });
  }, []);

  return (
    <div className="flex flex-col bg-[#F6F4EB]">
      {/* 1. HERO SECTION */}
      <div className="relative w-full border-b border-[#E5E0D0]">
        {/* Subtle Graph Paper Background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#E5E0D0 1px, transparent 1px), linear-gradient(90deg, #E5E0D0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <section className="relative z-10 pt-16 pb-20 md:pt-28 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left Column: Name & Education */}
            <div>
              <div className="uppercase tracking-[0.2em] text-[#EA580C] font-bold text-xs md:text-sm mb-6 font-sans flex items-center space-x-2">
                <span className="w-4 h-[2px] bg-[#EA580C]"></span>
                <span>AI & ML Engineer</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-serif text-[#0F172A] leading-[1.05] tracking-tight mb-8">
                <span className="italic text-[#EA580C]">Jayanthan</span><br />
                Senthilkumar
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans font-light max-w-lg mb-10">
                Incoming Master's student in AI & ML at <span className="font-medium text-[#0F172A]">Adelaide University, Australia</span>. B.Tech graduate in Artificial Intelligence and Machine Learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-7 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium transition-all shadow-md hover:shadow-lg text-base flex items-center space-x-2">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a href="#contact" className="px-7 py-3.5 rounded-full bg-transparent border border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white font-medium transition-all text-base flex items-center space-x-2">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>

            {/* Right Column: Advanced Visualization */}
            <div className="flex flex-col lg:pl-12 lg:border-l border-[#E5E0D0] justify-center pt-8 lg:pt-0">
              <div className="bg-transparent p-4 md:p-6 relative overflow-visible group flex items-center justify-center min-h-[400px]">
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EA580C]/10 blur-[80px] rounded-full transition-colors duration-700 pointer-events-none"></div>

                {/* Radial Equalizer / Sci-Fi HUD Visualization */}
                <div className="relative z-10 flex-1 flex items-center justify-center w-full">
                  <svg viewBox="0 0 380 380" className="w-full max-w-[380px] h-auto overflow-visible">
                    {[
                      { name: "Machine Learning", value: 95 },
                      { name: "Deep Learning", value: 90 },
                      { name: "Generative AI", value: 85 },
                      { name: "NLP", value: 85 },
                      { name: "Computer Vision", value: 80 },
                      { name: "AI Agents", value: 75 },
                    ].map((skill, i) => {
                      const centerX = 190;
                      const centerY = 190;
                      const INNER_RADIUS = 40;
                      const NUM_BANDS = 10;
                      const BAND_WIDTH = 6;
                      const BAND_GAP = 4;

                      const angleStart = (i * 60 - 90 + 6) * (Math.PI / 180);
                      const angleEnd = (i * 60 - 90 + 54) * (Math.PI / 180);
                      const midAngle = (i * 60 - 90 + 30) * (Math.PI / 180);

                      const labelRadius = INNER_RADIUS + NUM_BANDS * (BAND_WIDTH + BAND_GAP) + 15;
                      const textX = centerX + labelRadius * Math.cos(midAngle);
                      const textY = centerY + labelRadius * Math.sin(midAngle);

                      const anchor = Math.cos(midAngle) > 0.1 ? "start" : Math.cos(midAngle) < -0.1 ? "end" : "middle";
                      const baseline = Math.sin(midAngle) > 0.1 ? "hanging" : Math.sin(midAngle) < -0.1 ? "bottom" : "middle";

                      return (
                        <g key={skill.name}>
                          {/* Segmented Arcs */}
                          {Array.from({ length: NUM_BANDS }).map((_, j) => {
                            const r = INNER_RADIUS + j * (BAND_WIDTH + BAND_GAP);
                            const x1 = centerX + r * Math.cos(angleStart);
                            const y1 = centerY + r * Math.sin(angleStart);
                            const x2 = centerX + r * Math.cos(angleEnd);
                            const y2 = centerY + r * Math.sin(angleEnd);

                            const isActive = j * 10 < skill.value;
                            const isGlow = j * 10 >= skill.value - 10 && j * 10 < skill.value;

                            return (
                              <motion.path
                                key={j}
                                initial={{ opacity: 0, pathLength: 0 }}
                                animate={{ opacity: 1, pathLength: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * j + 0.1 * i, ease: "easeOut" }}
                                d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                                fill="none"
                                stroke={isActive ? "#EA580C" : "#E2E8F0"}
                                strokeWidth={BAND_WIDTH}
                                strokeLinecap="round"
                                className={isGlow ? "drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]" : ""}
                              />
                            );
                          })}

                          {/* Text Label */}
                          <motion.text
                            initial={{ opacity: 0, filter: "blur(4px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
                            x={textX}
                            y={textY}
                            fill="#475569"
                            fontSize="11"
                            fontFamily="monospace"
                            fontWeight="600"
                            letterSpacing="0.05em"
                            textAnchor={anchor}
                            dominantBaseline={baseline}
                          >
                            <tspan x={textX} dy="0">{skill.name}</tspan>
                            <tspan x={textX} dy="14" fill="#EA580C" fontWeight="bold">{skill.value}%</tspan>
                          </motion.text>
                        </g>
                      );
                    })}

                    {/* Core Center Pulse */}
                    <motion.circle
                      cx={190} cy={190} r={15}
                      fill="#EA580C"
                      className="drop-shadow-[0_0_15px_rgba(234,88,12,0.6)]"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                    <circle cx={190} cy={190} r={6} fill="#F6F4EB" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E5E0D0] mt-0">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="flex items-center space-x-3 text-[#EA580C] mb-6">
              <User className="h-6 w-6" />
              <h2 className="font-serif italic text-xl tracking-tight">/about-me</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-8 leading-tight">
              Product-focused <span className="italic text-[#EA580C]">Software Engineer</span>
            </h3>
            <p className="text-lg text-slate-600 font-sans font-light leading-relaxed mb-6">
              Crafting data-driven experiences grounded in proven engineering traditions. Skilled in distributed systems and full-stack development, I blend analytical focus with creative problem-solving to build scalable, client-centric applications aligned with AI-driven transformation goals.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-2 text-[#0F172A] font-semibold hover:text-[#EA580C] transition-colors border-b border-[#0F172A] hover:border-[#EA580C] pb-1">
              <span>Read Full Biography</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6 w-full">
            {['Python & PHP', 'HTML/CSS/JS', 'Laravel & MySQL', 'Machine Learning'].map(skill => (
              <div key={skill} className="bg-[#FAF7F2] border border-[#E5E0D0] p-6 rounded-2xl text-center shadow-sm flex items-center justify-center">
                <span className="font-serif text-[#0F172A] text-xl">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E5E0D0]">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="flex items-center space-x-3 text-[#EA580C] mb-4">
              <FolderGit2 className="h-6 w-6" />
              <h2 className="font-serif italic text-xl tracking-tight">/projects</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-[#0F172A]">Featured <span className="italic text-[#EA580C]">Work</span></h3>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center space-x-2 text-[#0F172A] font-semibold hover:text-[#EA580C] transition-colors border-b border-[#0F172A] hover:border-[#EA580C] pb-1">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredProjects.map(project => (
            <div key={project.title} className="group relative bg-[#FAF7F2] border border-[#E5E0D0] rounded-2xl p-10 hover:border-[#EA580C]/50 hover:shadow-xl transition-all flex flex-col shadow-sm">
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 rounded-full bg-white text-slate-600 font-sans text-xs border border-[#E5E0D0] shadow-sm uppercase tracking-wider">
                  Status: <span className={project.status === 'Production' ? 'text-[#0F172A] font-semibold' : 'text-[#EA580C] font-semibold'}>{project.status}</span>
                </div>
                <Code2 className="w-5 h-5 text-slate-400 group-hover:text-[#EA580C] transition-colors" />
              </div>
              <h4 className="text-3xl font-serif text-[#0F172A] mb-4 group-hover:text-[#EA580C] transition-colors">{project.title}</h4>
              <p className="text-slate-600 mb-10 flex-grow leading-relaxed font-light text-lg">{project.description}</p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-sm font-sans font-medium text-slate-600 bg-white px-3 py-1 rounded-md border border-[#E5E0D0]">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link to="/projects" className="inline-flex items-center space-x-2 text-[#0F172A] font-semibold hover:text-[#EA580C] transition-colors border-b border-[#0F172A] hover:border-[#EA580C] pb-1">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. BLOG SECTION */}
      <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E5E0D0]">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="flex items-center space-x-3 text-[#EA580C] mb-4">
              <FileText className="h-6 w-6" />
              <h2 className="font-serif italic text-xl tracking-tight">/blog</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-[#0F172A]">Latest <span className="italic text-[#EA580C]">Writings</span></h3>
          </div>
          <Link to="/blogs" className="hidden md:inline-flex items-center space-x-2 text-[#0F172A] font-semibold hover:text-[#EA580C] transition-colors border-b border-[#0F172A] hover:border-[#EA580C] pb-1">
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div>
          {isLoadingBlogs ? (
            <div className="text-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#EA580C] mx-auto"></div>
              <p className="mt-4 text-slate-500 font-sans text-sm">Loading recent articles...</p>
            </div>
          ) : recentPosts.length === 0 ? (
            <div className="text-center py-10 text-slate-500 font-sans">
              No recent articles found.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recentPosts.map((post, index) => (
                <article key={post.guid || index} className="flex flex-col md:flex-row bg-[#FAF7F2] border border-[#E5E0D0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative h-full">
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
                        <Link to={`/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="before:absolute before:inset-0">
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
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-t border-[#E5E0D0] text-center">
        <div className="inline-flex items-center space-x-3 text-[#EA580C] mb-6 justify-center">
          <Mail className="h-6 w-6" />
          <h2 className="font-serif italic text-xl tracking-tight">/contact</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-8 leading-tight">
          Ready to <span className="italic text-[#EA580C]">Collaborate?</span>
        </h3>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-sans font-light mb-12">
          I'm currently accepting new projects and open to discussing full-time opportunities. Drop a message and let's build something extraordinary.
        </p>
        <Link to="/contact" className="inline-flex px-10 py-5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium transition-all shadow-lg hover:shadow-xl text-lg items-center space-x-3 mx-auto">
          <Send className="w-5 h-5" />
          <span>Get in Touch</span>
        </Link>
      </section>
    </div>
  );
}
