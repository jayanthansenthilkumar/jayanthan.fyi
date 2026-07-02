import { motion } from "framer-motion";
import { Mail, Terminal, Send, MessageSquare, MapPin } from "lucide-react";
import type { Route } from "./+types/contact";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hire Me | Jayanthan Senthilkumar" },
    { name: "description", content: "Get in touch for hiring opportunities." },
  ];
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // NOTE: Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_jeoes5u"; 
    const TEMPLATE_ID = "template_43f4k5x";
    const PUBLIC_KEY = "ZRZcBlELrxgInVaT2";

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setSubmitStatus('success');
            form.current?.reset();
        }, (error) => {
            console.log(error.text);
            setSubmitStatus('error');
        })
        .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus('idle'), 5000); // Reset status after 5s
        });
    }
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center space-x-3 text-[#EA580C] mb-6 justify-center">
          <Terminal className="h-6 w-6" />
          <h2 className="font-serif italic text-xl tracking-tight">/open-to-work</h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-[#0F172A] mb-8 leading-tight">
          Ready to <span className="italic text-[#EA580C]">Join Your Team</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-sans font-light leading-relaxed">
          I'm a highly motivated AI & ML Engineer actively seeking full-time opportunities to bring data-driven impact to your organization. Are you a recruiter or hiring manager? Let's connect and discuss how my skills align with your vision.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT SIDE: FORM + CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col"
        >
          {/* Form */}
          <div className="bg-[#FAF7F2] border border-[#E5E0D0] rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <h3 className="text-2xl font-serif text-[#0F172A] mb-6">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="recruiter_name" className="block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest">Recruiter Name</label>
                  <input 
                    type="text" 
                    name="recruiter_name"
                    id="recruiter_name" 
                    required
                    className="w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="work_email" className="block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest">Work Email</label>
                  <input 
                    type="email" 
                    name="work_email"
                    id="work_email" 
                    required
                    className="w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                    placeholder="Yourmail@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company_name" className="block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest">Company Name</label>
                  <input 
                    type="text" 
                    name="company_name"
                    id="company_name" 
                    required
                    className="w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                    placeholder="Tech Corp Inc."
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest">Open Role / Position</label>
                  <input 
                    type="text" 
                    name="position"
                    id="position" 
                    required
                    className="w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                    placeholder="Senior AI Engineer"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest">Message / Job Details</label>
                <textarea 
                  name="message"
                  id="message" 
                  required
                  rows={4}
                  className="w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors resize-none"
                  placeholder="Hi Jayanthan, we're looking for an ML Engineer to join our team to work on..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0F172A] hover:bg-[#1E293B] disabled:bg-slate-400 text-white font-medium py-4 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-sm text-center font-medium">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm text-center font-medium">
                  Failed to send message. Please ensure you have set up your EmailJS credentials in the code.
                </div>
              )}
            </form>
          </div>

        </motion.div>

        {/* RIGHT SIDE: MAP & CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col space-y-10 lg:h-full"
        >
          {/* Map */}
          <div className="h-[400px] lg:flex-1 w-full rounded-2xl overflow-hidden border border-[#E5E0D0] shadow-sm relative group min-h-[350px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418336.8778945417!2d138.28151240292723!3d-34.92849886733221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c7c526b33f%3A0x4033654628ec640!2sAdelaide%20SA%2C%20Australia!5e0!3m2!1sen!2sin!4v1714553245468!5m2!1sen!2sin" 
              className="w-full h-full absolute inset-0"
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Map Overlay Card */}
            {/* <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl border border-[#E5E0D0] shadow-lg flex items-start space-x-4 transform transition-transform group-hover:-translate-y-1">
              <div className="p-3 bg-[#FAF7F2] rounded-full shrink-0">
                <MapPin className="w-6 h-6 text-[#EA580C]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-[#0F172A] text-lg mb-1">Adelaide, Australia</h4>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  Incoming Master's Student at Adelaide University.<br/> 
                  <span className="font-medium text-[#0F172A]">Available for on-site (SA) and remote opportunities.</span>
                </p>
              </div>
            </div> */}
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-6 bg-white border border-[#E5E0D0] rounded-2xl shadow-sm hover:border-[#EA580C]/50 transition-colors group">
              <div className="p-3 bg-[#FAF7F2] rounded-xl text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-[#0F172A] font-sans font-bold text-sm uppercase tracking-wider mb-1">Email</h3>
                <a href="mailto:jayanthansenthilkumar18@gmail.com" className="text-slate-600 font-sans text-sm hover:text-[#EA580C] transition-colors truncate block">jayanthansenthilkumar18@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white border border-[#E5E0D0] rounded-2xl shadow-sm hover:border-[#EA580C]/50 transition-colors group">
              <div className="p-3 bg-[#FAF7F2] rounded-xl text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-[#0F172A] font-sans font-bold text-sm uppercase tracking-wider mb-1">Contact</h3>
                <a href="tel:+918825756388" className="text-slate-600 font-sans text-sm hover:text-[#EA580C] transition-colors block mb-1">+91 8825756388</a>
                <div className="flex space-x-3 text-xs font-sans font-medium text-[#EA580C]">
                  <a href="https://www.linkedin.com/in/jayanthan18" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                  <span className="text-slate-300">|</span>
                  <a href="https://github.com/jayanthansenthilkumar" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-32 border-t border-[#E5E0D0] pt-20">
        <h3 className="text-4xl font-serif text-[#0F172A] mb-12 text-center">Frequently Asked <span className="italic text-[#EA580C]">Questions</span></h3>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-[#FAF7F2] border border-[#E5E0D0] p-6 rounded-2xl">
            <h4 className="text-xl font-serif text-[#0F172A] mb-2">Are you available for freelance work?</h4>
            <p className="text-slate-600 font-sans font-light">Yes, I take on select freelance projects depending on my current bandwidth. Please reach out with details about your project, timeline, and budget.</p>
          </div>
          <div className="bg-[#FAF7F2] border border-[#E5E0D0] p-6 rounded-2xl">
            <h4 className="text-xl font-serif text-[#0F172A] mb-2">What is your typical response time?</h4>
            <p className="text-slate-600 font-sans font-light">I aim to respond to all business inquiries within 24-48 hours during regular business days.</p>
          </div>
          <div className="bg-[#FAF7F2] border border-[#E5E0D0] p-6 rounded-2xl">
            <h4 className="text-xl font-serif text-[#0F172A] mb-2">Do you work internationally?</h4>
            <p className="text-slate-600 font-sans font-light">Absolutely! I work asynchronously with clients across multiple timezones, primarily leveraging tools like Slack, Zoom, and async updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
