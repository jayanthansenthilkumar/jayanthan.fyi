import { FileText, Download } from "lucide-react";
import type { Route } from "./+types/resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume | Jayanthan Senthilkumar" },
    { name: "description", content: "Professional resume of Jayanthan Senthilkumar" },
  ];
}

export default function Resume() {
  return (
    <div className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 min-h-screen flex flex-col">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div>
          <div className="flex items-center space-x-3 text-[#EA580C] mb-4">
            <FileText className="h-6 w-6" />
            <h2 className="font-serif italic text-xl tracking-tight">/resume</h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#0F172A] leading-tight">
            Curriculum <span className="italic text-[#EA580C]">Vitae</span>
          </h1>
        </div>
        
        <a 
          href="/Resume.pdf" 
          download="Jayanthan_Senthilkumar_Resume.pdf"
          className="px-6 py-3 bg-[#0F172A] text-white font-sans font-bold text-sm tracking-widest uppercase rounded flex items-center space-x-2 hover:bg-[#EA580C] transition-colors shadow-md"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="flex-1 w-full bg-slate-100 rounded-xl overflow-hidden border border-[#E5E0D0] shadow-sm flex flex-col">
        <object 
          data="/Resume.pdf" 
          type="application/pdf" 
          className="w-full h-[70vh] md:h-[800px]"
        >
          <div className="flex flex-col items-center justify-center h-full p-12 text-center bg-[#FAF7F2]">
            <FileText className="w-16 h-16 text-slate-300 mb-4" />
            <p className="text-[#0F172A] font-serif text-xl mb-2">PDF viewer not available</p>
            <p className="text-slate-500 font-sans mb-6 max-w-md">
              Your browser does not support inline PDFs, or the <code className="bg-white border border-[#E5E0D0] px-1.5 py-0.5 rounded text-[#EA580C]">resume.pdf</code> file hasn't been placed in the <code className="bg-white border border-[#E5E0D0] px-1.5 py-0.5 rounded text-[#EA580C]">public</code> folder yet.
            </p>
            <a 
              href="/resume.pdf" 
              download="Jayanthan_Senthilkumar_Resume.pdf"
              className="px-6 py-2 bg-[#EA580C] text-white rounded font-medium hover:bg-[#C2410C] transition-colors"
            >
              Download PDF Instead
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
