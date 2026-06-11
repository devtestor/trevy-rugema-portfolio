import React, { useState } from "react";
import { Send, CheckCircle, Mail, MapPin, Globe, Linkedin, Github } from "lucide-react";
import { ContactFormInput } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    email: "",
    company: "",
    service: "Custom Web Application",
    budget: "$3,000 - $10,000",
    timeline: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const servicesOptions = [
    "Custom Web Application",
    "AI Workflow Automation",
    "Agentic AI Solution",
    "Chatbot / AI Assistant",
    "CRM / WhatsApp / Email Automation",
    "Landing Page / Lead Capture System",
    "MVP / SaaS Development",
    "API Integration",
    "DevOps / Cloud Deployment",
    "Cybersecurity-Aware Development",
    "Other"
  ];

  const budgetOptions = [
    "Under $300",
    "$300 - $1,000",
    "$1,000 - $3,000",
    "$3,000 - $10,000",
    "$10,000+",
    "Not sure yet"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    // Frontend validation checking
    if (!formData.name.trim()) {
      setErrorMsg("Please provide your name.");
      setLoading(false);
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      setLoading(false);
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Please tell me a short detail about your project idea.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccessMsg(result.message);
        // Clear state
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "Custom Web Application",
          budget: "$3,000 - $10,000",
          timeline: "",
          message: ""
        });
      } else {
        setErrorMsg(result.error || "Failed to submit form. Please retry in a moment.");
      }
    } catch (err) {
      console.error("Submit inquiry error", err);
      setErrorMsg("Offline or server not responding. Please email direct to trevyrugema@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/5 relative" id="contact">
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] rounded-full bg-cyan-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Details & Social anchors */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-xs font-semibold text-cyan-400 font-mono">
                <span>IMMEDIATE RESPONSE IN 24H</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
                Let's Build <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  The System.
                </span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans font-normal">
                Tell me what you want to build, automate, or improve. I'll help you turn it into a practical, conversion-optimized software solution.
              </p>
            </div>

            {/* Direct Contact Anchors */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-mono text-slate-500 font-bold">
                    EMAIL ADDRESS
                  </span>
                  <a 
                    href="mailto:trevyrugema@gmail.com" 
                    className="text-sm font-bold text-slate-200 hover:text-cyan-400 transition-colors font-mono"
                  >
                    trevyrugema@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-violet-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-mono text-slate-500 font-bold">
                    OPERATIONS AREA
                  </span>
                  <span className="text-sm font-bold text-slate-200">
                    Remotely globally / London, UK
                  </span>
                </div>
              </div>
            </div>

            {/* Social Link Badges */}
            <div className="space-y-3 pt-4">
              <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                CONNECT CHANNELS
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono bg-slate-900 hover:bg-slate-850 hover:text-cyan-400 text-slate-300 border border-slate-800 transition-all font-semibold"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono bg-slate-900 hover:bg-slate-850 hover:text-cyan-400 text-slate-300 border border-slate-800 transition-all font-semibold"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono bg-slate-900 hover:bg-slate-850 hover:text-cyan-400 text-slate-300 border border-slate-800 transition-all font-semibold"
                >
                  <Globe className="w-4 h-4" />
                  <span>X / Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form UI */}
          <div className="lg:col-span-7 bg-[#121215] border border-white/5 rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
              {/* Row 1: Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 bg-[#0A0A0B] border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@business.com"
                    className="w-full px-4 py-3 bg-[#0A0A0B] border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Company Link & Service Dropdown */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Employer / Project name"
                    className="w-full px-4 py-3 bg-[#0A0A0B] border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service-needed-select" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Service Needed *
                  </label>
                  <select
                    id="service-needed-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0A0A0B] border border-slate-800 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-cyan-500/50 transition-all cursor-pointer"
                  >
                    {servicesOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-950 text-slate-300">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Budget Dropdown & Timeline Duration */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Plan / Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0A0A0B] border border-slate-800 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-cyan-500/50 transition-all cursor-pointer"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-950 text-slate-300">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="timeline" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Estimated Timeline
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="e.g. 1 Month, Immediate, etc."
                    className="w-full px-4 py-3 bg-[#0A0A0B] border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Describe Your Problem / System Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What tasks do you want to automate? What platform metrics should we target? Outline details here..."
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all resize-y"
                />
              </div>

              {/* Status Alert Panels */}
              {successMsg && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-800/40 rounded-xl text-emerald-400 text-sm flex items-start gap-2.5 animate-in fade-in">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Inquiry Submitted Successfully!</span>
                    <p className="text-xs text-emerald-300 mt-1">{successMsg}</p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 bg-rose-950/40 border border-rose-800/40 rounded-xl text-rose-400 text-sm font-sans animate-in fade-in">
                  <span className="font-bold">Error</span>: {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-sm tracking-tight text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:opacity-95 shadow-lg shadow-cyan-500/10 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 rounded-full border-2 border-slate-300 border-t-white animate-spin" />
                  ) : (
                    <>
                      Tell Me About Your Project
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
