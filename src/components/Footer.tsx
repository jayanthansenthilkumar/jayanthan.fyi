import { Link } from "react-router";
import { Terminal, Code2, UserPlus, Mail, ArrowRight, Calendar, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section - Massive Text */}
      <div className="bg-[#F6F4EB] pt-16 md:pt-24 pb-2 md:pb-3 px-4 sm:px-6 lg:px-8 text-center border-t border-[#E5E0D0]">
        <h2 className="font-serif font-normal text-[#0F172A] text-[7vw] md:text-[7.5vw] leading-none tracking-tight whitespace-nowrap flex items-center justify-center w-full">
          Jayanthan from <span className="italic text-[#EA580C] ml-2 md:ml-4">Australia</span>
        </h2>
      </div>

      {/* Main Dark Section */}
      <div className="bg-[#0F172A] text-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top banner in dark section */}
          {/* <div className="border-b border-[#1E293B] pb-8 mb-12">
            <p className="text-lg text-slate-300 font-sans font-light">
              For freelance opportunities, collaboration, and networking, write to me at <a href="mailto:mail2jayanthansenthilkumar@gmail.com" className="text-white hover:text-[#EA580C] underline decoration-[#EA580C] underline-offset-4 font-medium transition-colors">mail2jayanthansenthilkumar@gmail.com</a>.
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
            {/* Column 1 - Brand */}
            <div className="col-span-1 md:col-span-4 lg:col-span-4">
              <Link to="/" className="inline-flex flex-col space-y-2 mb-6 group">
                <span className="font-serif font-medium text-xs tracking-[0.2em] text-[#EA580C] uppercase">November 18, 2004</span>
                <span className="font-serif font-bold text-4xl tracking-tight text-white group-hover:text-slate-200 transition-colors">
                  Jayanthan<br />
                  <span className="text-[#EA580C] italic">Senthilkumar</span>
                </span>
              </Link>
              <p className="text-slate-400 font-sans font-light leading-relaxed max-w-sm">
                A data-driven portfolio highlighting real-world engineering, predictive models, and AI-driven transformation by a passionate builder.
              </p>
            </div>

            {/* Column 2 - Explore */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h3 className="text-slate-300 font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6">Explore</h3>
              <ul className="space-y-4 font-sans font-light text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
              </ul>
            </div>

            {/* Column 3 - Get Involved */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h3 className="text-slate-300 font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6">Get Involved</h3>
              <ul className="space-y-4 font-sans font-light text-slate-400">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="https://github.com/jayanthansenthilkumar" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Collaborate</a></li>
                <li><a href="https://www.linkedin.com/in/jayanthan18" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Network</a></li>
              </ul>
            </div>

            {/* Column 4 - Resources */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h3 className="text-slate-300 font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6">Resources</h3>
              <ul className="space-y-4 font-sans font-light text-slate-400">
                <li><Link to="/resume" className="hover:text-white transition-colors">Resume</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Column 5 - Newsletter / Socials */}
            <div className="col-span-1 md:col-span-12 lg:col-span-2 flex flex-col items-start lg:items-end lg:text-right">
              <p className="text-slate-400 font-sans font-light mb-6">
                Get project drops, updates, and public launch notes in your inbox.
              </p>
              <button className="w-full lg:w-auto px-6 py-3 bg-[#FAF7F2] text-[#0F172A] font-sans font-bold text-sm tracking-widest uppercase rounded flex items-center justify-center space-x-2 hover:bg-white transition-colors mb-8">
                <Calendar className="w-4 h-4 text-[#EA580C]" />
                <span>Connect</span>
              </button>

              <div className="flex space-x-3 justify-start lg:justify-end w-full lg:w-auto">
                <a href="https://github.com/jayanthansenthilkumar" className="w-10 h-10 bg-[#FAF7F2] rounded flex items-center justify-center text-[#0F172A] hover:bg-white hover:-translate-y-1 transition-all">
                  <Code2 className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/jayanthan18" className="w-10 h-10 bg-[#FAF7F2] rounded flex items-center justify-center text-[#0F172A] hover:bg-white hover:-translate-y-1 transition-all">
                  <UserPlus className="w-5 h-5" />
                </a>
                <a href="mailto:jayanthansenthilkumar18@gmail.com" className="w-10 h-10 bg-[#FAF7F2] rounded flex items-center justify-center text-[#0F172A] hover:bg-white hover:-translate-y-1 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans font-medium tracking-wider text-slate-500 uppercase">
            <p>&copy; {new Date().getFullYear()} Jayanthan Senthilkumar.</p>
            <p className="mt-4 md:mt-0 font-bold text-white tracking-[0.2em]">#JayanthanSenthilkumar</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
