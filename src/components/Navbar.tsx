import { Link, NavLink } from "react-router";
import { Terminal, Code, User, FileText, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", icon: Terminal },
    { to: "/about", label: "About", icon: User },
    { to: "/projects", label: "Projects", icon: Code },
    { to: "/blogs", label: "Blog", icon: FileText },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-[#E5E0D0] bg-[#F6F4EB]/90 backdrop-blur-md shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-[#0F172A] group">
            {/* <Terminal className="h-6 w-6 group-hover:rotate-12 transition-transform text-[#EA580C]" /> */}
            <span className="font-serif font-bold text-xl tracking-tight text-[#0F172A]">
              <span className="italic text-[#EA580C]">Jayanthan</span>
              <span> Senthilkumar</span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }: { isActive: boolean }) =>
                  `flex items-center space-x-1 text-sm font-medium transition-colors ${
                    isActive ? "text-[#EA580C]" : "text-slate-600 hover:text-[#0F172A]"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-600 hover:text-[#0F172A]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#F6F4EB] border-b border-[#E5E0D0] shadow-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }: { isActive: boolean }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-orange-50 text-[#EA580C]"
                        : "text-slate-600 hover:bg-[#E5E0D0] hover:text-[#0F172A]"
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
