import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ExternalLink, MapPin } from "lucide-react";

export default function Resume() {
  const [selectedRegion, setSelectedRegion] = useState<"australia" | "india">("australia");

  const resumes = {
    australia: {
      name: "Australian Resume",
      file: "/Resume_Australia_Jayanthan.pdf",
      description: "Tailored for the Australian tech industry."
    },
    india: {
      name: "Indian Resume",
      file: "/Resume_Jayanthan_India.pdf",
      description: "Tailored for the Indian tech industry."
    }
  };

  const currentResume = resumes[selectedRegion];

  return (
    <div className="flex flex-col bg-[#F6F4EB] min-h-screen pt-24 pb-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 text-[#EA580C] mb-4">
            <FileText className="h-6 w-6" />
            <h1 className="font-serif italic text-xl tracking-tight">/resume</h1>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F172A] mb-6">
            Curriculum <span className="italic text-[#EA580C]">Vitae</span>
          </h2>
          <p className="text-slate-600 font-sans font-light max-w-2xl mx-auto mb-10 text-lg">
            Select a region to view the appropriate resume tailored for that market.
          </p>

          {/* Toggle Switch */}
          <div className="bg-white border border-[#E5E0D0] p-1.5 rounded-full inline-grid grid-cols-2 relative shadow-sm min-w-[280px] mx-auto">
            <div className="absolute inset-0 bg-[#E5E0D0]/20 rounded-full pointer-events-none z-0"></div>
            
            {/* Sliding Background */}
            <motion.div
              className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#0F172A] rounded-full shadow-md z-10"
              initial={false}
              animate={{
                left: selectedRegion === "australia" ? "6px" : "calc(50% + 3px)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            <button
              onClick={() => setSelectedRegion("australia")}
              className={`relative z-20 py-2 sm:py-3 rounded-full font-sans font-semibold text-sm transition-colors duration-300 flex items-center justify-center space-x-2 ${
                selectedRegion === "australia" ? "text-white" : "text-slate-500 hover:text-[#0F172A]"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Australia</span>
            </button>
            <button
              onClick={() => setSelectedRegion("india")}
              className={`relative z-20 py-2 sm:py-3 rounded-full font-sans font-semibold text-sm transition-colors duration-300 flex items-center justify-center space-x-2 ${
                selectedRegion === "india" ? "text-white" : "text-slate-500 hover:text-[#0F172A]"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>India</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center md:justify-end gap-4 mb-6">
          <a
            href={currentResume.file}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-white border border-[#E5E0D0] text-[#0F172A] hover:bg-[#FAF7F2] font-medium transition-all text-sm flex items-center space-x-2 shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in New Tab</span>
          </a>
          <a
            href={currentResume.file}
            download
            className="px-6 py-2.5 rounded-full bg-[#EA580C] text-white hover:bg-[#C2410C] font-medium transition-all text-sm flex items-center space-x-2 shadow-md hover:shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* PDF Viewer Container */}
        <div className="bg-white border border-[#E5E0D0] rounded-2xl shadow-sm overflow-hidden h-[400px] sm:h-[600px] lg:h-[800px] w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRegion}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <iframe
                src={`${currentResume.file}#view=FitH`}
                className="w-full h-full border-none"
                title={`${currentResume.name} PDF Viewer`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
