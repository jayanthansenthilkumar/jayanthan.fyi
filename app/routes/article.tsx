import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import type { Route } from "./+types/article";
import { Link, useParams } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  // In a real app, we'd fetch the article based on params.slug to set title
  return [
    { title: `Article | Portfolio` },
    { name: "description", content: "Technical writing deep dive." },
  ];
}

export default function Article() {
  const { slug } = useParams();

  // Mocking an article to render for any slug
  const article = {
    title: slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Architecting for Scale: A Deep Dive into Event-Driven Systems",
    date: "2024-05-12",
    readTime: "8 min read",
    content: `
      <p>Modern applications are increasingly moving towards distributed, event-driven architectures. This transition allows systems to handle greater scale, improve decoupling between services, and provide real-time capabilities that traditional request-response patterns struggle to achieve.</p>
      
      <h2>The Core Philosophy</h2>
      <p>At the heart of an event-driven system is the concept of a state change. Instead of a service explicitly telling another service what to do, it simply announces that something has happened. Other services, which have subscribed to these events, then react accordingly.</p>
      <p>This fundamentally shifts the architectural coupling from <em>orchestration</em> (a central controller directing actions) to <em>choreography</em> (services acting independently based on events).</p>
      
      <blockquote>
        "Event-driven architecture is not just a technical implementation; it's a paradigm shift in how we model business domains."
      </blockquote>

      <h2>Common Pitfalls</h2>
      <p>While the benefits are substantial, developers often fall into several traps when first adopting this pattern:</p>
      <ul>
        <li><strong>Event Sourcing vs. Event Notification:</strong> Confusing a lightweight notification with a fully-hydrated domain event can lead to excessive API calls back to the source system.</li>
        <li><strong>Eventual Consistency:</strong> Failing to design user interfaces that handle the lag between an action and its confirmed side-effects.</li>
        <li><strong>Schema Evolution:</strong> Modifying event structures without backwards compatibility, breaking downstream consumers.</li>
      </ul>

      <h2>Strategies for Robust Data Streaming</h2>
      <p>To build a system that scales linearly without constant firefighting, consider these approaches:</p>
      <p>1. <strong>Idempotent Consumers:</strong> Ensure that processing the same event multiple times does not result in corrupted state. This allows for safe retries during transient failures.</p>
      <p>2. <strong>Dead Letter Queues (DLQs):</strong> Always have a fallback mechanism for events that cannot be processed after a reasonable number of retries.</p>
      
      <p>By treating events as first-class citizens in your architecture, you lay the groundwork for systems that are resilient, scalable, and adaptable to future business requirements.</p>
    `
  };

  return (
    <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 bg-[#F6F4EB] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/blogs" className="inline-flex items-center space-x-2 text-slate-500 hover:text-[#EA580C] transition-colors mb-12 font-sans font-medium uppercase tracking-wider text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <div className="flex items-center space-x-4 text-sm font-sans text-slate-500 mb-6 uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <span className="text-[#E5E0D0]">|</span>
          <div className="flex items-center space-x-1 text-[#EA580C]">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-serif text-[#0F172A] leading-tight mb-8">
          {article.title}
        </h1>

        <div className="flex items-center justify-between border-y border-[#E5E0D0] py-4 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#EA580C] flex items-center justify-center text-white font-serif font-bold text-lg">
              JS
            </div>
            <div>
              <p className="font-serif text-[#0F172A] font-medium leading-tight">John Smith</p>
              <p className="text-slate-500 text-sm font-sans">Software Engineer</p>
            </div>
          </div>
          <button className="p-2 rounded-full border border-[#E5E0D0] hover:border-[#EA580C] hover:text-[#EA580C] text-slate-500 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body Content */}
        <div 
          className="font-sans font-light text-lg text-slate-700 leading-relaxed space-y-6 
            [&>h2]:font-serif [&>h2]:text-3xl [&>h2]:text-[#0F172A] [&>h2]:mt-12 [&>h2]:mb-6
            [&>p]:mb-6
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-3
            [&>blockquote]:border-l-4 [&>blockquote]:border-[#EA580C] [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:font-serif [&>blockquote]:text-2xl [&>blockquote]:italic [&>blockquote]:text-[#0F172A]"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <div className="mt-16 pt-8 border-t border-[#E5E0D0] flex justify-between items-center">
          <p className="font-sans text-slate-500">Share this article</p>
          <div className="flex space-x-4">
            <button className="text-slate-400 hover:text-[#EA580C] font-medium uppercase tracking-wider text-sm transition-colors">Twitter</button>
            <button className="text-slate-400 hover:text-[#EA580C] font-medium uppercase tracking-wider text-sm transition-colors">LinkedIn</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
