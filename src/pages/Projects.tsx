
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Code2 } from "lucide-react";


export default function Projects() {
  const projects = [
    {
      title: "PLANGO - AI Trip Planner",
      description: "Built a scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%. Engineered predictive models for traffic and time optimization, boosting user satisfaction by 35%.",
      tags: ["Flask", "Python-ML", "SQLite", "JS"],
      github: "https://github.com/jayanthansenthilkumar",
      demo: "#",
      status: "Production"
    },
    {
      title: "Cargo Fleet Management System",
      description: "Designed an IoT fleet system integrating ML load prediction and distributed data pipelines, improving utilization by 55%. Implemented real-time tracking and safety monitoring pipelines, improving transport reliability and reducing logistics delays by 35%.",
      tags: ["Laravel", "IoT", "Python-ML", "Arduino"],
      github: "https://github.com/jayanthansenthilkumar",
      demo: "#",
      status: "Production"
    },
    {
      title: "KR Connect - Smart College ERP",
      description: "Developed core modules for Discipline and Grievance Management using PHP, Ajax, jQuery, and MySQL, streamlining issue tracking and student record updates by 50%. Built real-time dashboards using HTML, CSS, JS, boosting load speed and efficiency by 45%.",
      tags: ["HTML", "CSS", "JS", "PHP", "Ajax", "MySQL"],
      github: "https://github.com/jayanthansenthilkumar",
      demo: "#",
      status: "Production"
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center space-x-3 text-[#EA580C] mb-6">
          <FolderGit2 className="h-6 w-6" />
          <h2 className="font-serif italic text-xl tracking-tight">/projects</h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-[#0F172A] leading-tight">
          Deployed <span className="italic text-[#EA580C]">Systems</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#FAF7F2] border border-[#E5E0D0] rounded-2xl p-10 hover:border-[#EA580C]/50 hover:shadow-xl transition-all flex flex-col shadow-sm"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="px-3 py-1 rounded-full bg-white text-slate-600 font-sans text-xs border border-[#E5E0D0] shadow-sm uppercase tracking-wider">
                Status: <span className={project.status === 'Production' ? 'text-[#0F172A] font-semibold' : 'text-[#EA580C] font-semibold'}>{project.status}</span>
              </div>
              <div className="flex space-x-4 text-slate-400 group-hover:text-[#0F172A]">
                <a href={project.github} className="hover:text-[#EA580C] transition-colors"><Code2 className="w-5 h-5" /></a>
                <a href={project.demo} className="hover:text-[#EA580C] transition-colors"><ExternalLink className="w-5 h-5" /></a>
              </div>
            </div>

            <h3 className="text-3xl font-serif text-[#0F172A] mb-4 group-hover:text-[#EA580C] transition-colors">{project.title}</h3>
            <p className="text-slate-600 mb-10 flex-grow leading-relaxed font-light text-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-sm font-sans font-medium text-slate-600 bg-white px-3 py-1 rounded-md border border-[#E5E0D0]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
