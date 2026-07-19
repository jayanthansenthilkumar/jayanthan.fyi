
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Code2 } from "lucide-react";


export default function Projects() {
  const projects = [
    {
      title: "PLANGO - AI Trip Planner",
      description: "Built a trip-optimisation web application that ingests real-time traffic data to generate route recommendations, improving route accuracy by 40% and reducing computed route latency by 60%. Designed predictive logic for traffic and travel-time estimation, contributing to a 35% increase in measured user satisfaction during testing.",
      tags: ["Flask", "Python", "SQLite", "JavaScript"],
      github: "https://github.com/jayanthansenthilkumar/PlanGo",
      demo: "#",
      status: "Production"
    },
    {
      title: "SPARK - Event Management Platform",
      description: "Improved event management efficiency by 50% by architecting a role-based platform with modules for registrations, project submissions, evaluation workflows, scheduling, and approvals. Reduced administrative effort by 40% by developing centralized dashboards, automated announcements, and MySQL-backed data management.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/jayanthansenthilkumar/Spark",
      demo: "#",
      status: "Production"
    },
    {
      title: "Ishaa - Python AI Framework",
      description: "Reduced web app development effort by 60% by architecting a zero-dependency ASGI-native framework with a custom ORM, JWT auth, WebSockets, GraphQL, OpenAPI, and CLI. Improved app performance and reliability by 45% via self-evolving adaptive routing, multi-reality execution, and automated test generation pipelines.",
      tags: ["Python", "ASGI", "GraphQL", "WebSockets", "CI/CD"],
      github: "https://github.com/jayanthansenthilkumar/Ishaa",
      demo: "#",
      status: "Production"
    },
    {
      title: "Cargo Fleet Management System",
      description: "Architected an IoT-integrated fleet management system combining sensor data pipelines with load-prediction logic, improving fleet utilisation by 55%. Implemented real-time vehicle tracking and safety-monitoring pipelines, improving transport reliability and reducing logistics delays by 35%.",
      tags: ["Laravel", "IoT", "Python", "Arduino"],
      github: "https://github.com/jayanthansenthilkumar",
      demo: "#",
      status: "Production"
    },
    {
      title: "KR Connect - Smart College ERP",
      description: "Developed Discipline and Grievance Management modules using PHP, Ajax, and MySQL, streamlining issue tracking and record updates by 50% for the college administration. Built real-time administrative dashboards using HTML, CSS, and JavaScript, improving page load speed and operational efficiency by 45%.",
      tags: ["PHP", "MySQL", "Ajax", "jQuery"],
      github: "https://github.com/jayanthansenthilkumar",
      demo: "https://krconnect.mkce.ac.in",
      status: "Production"
    },
    {
      title: "Personal Portfolio",
      description: "A high-performance, responsive personal portfolio built with React Router v7, Tailwind CSS, and Framer Motion to showcase software engineering projects and technical articles.",
      tags: ["React Router v7", "Tailwind CSS", "TypeScript"],
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#FAF7F2] border border-[#E5E0D0] rounded-2xl p-6 hover:border-[#EA580C]/50 hover:shadow-xl transition-all flex flex-col shadow-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 rounded-full bg-white text-slate-600 font-sans text-xs border border-[#E5E0D0] shadow-sm uppercase tracking-wider">
                Status: <span className={project.status === 'Production' ? 'text-[#0F172A] font-semibold' : 'text-[#EA580C] font-semibold'}>{project.status}</span>
              </div>
              <div className="flex space-x-4 text-slate-400 group-hover:text-[#0F172A]">
                <a href={project.github} className="hover:text-[#EA580C] transition-colors"><Code2 className="w-5 h-5" /></a>
                <a href={project.demo} className="hover:text-[#EA580C] transition-colors"><ExternalLink className="w-5 h-5" /></a>
              </div>
            </div>

            <h3 className="text-2xl font-serif text-[#0F172A] mb-3 group-hover:text-[#EA580C] transition-colors line-clamp-1">{project.title}</h3>
            <p className="text-slate-600 mb-8 flex-grow leading-relaxed font-light text-base line-clamp-3" title={project.description}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-xs font-sans font-medium text-slate-600 bg-white px-2 py-1 rounded border border-[#E5E0D0]">
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs font-sans font-medium text-slate-400 px-1 py-1">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
