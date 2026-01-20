"use client";
import React, { useState } from 'react';
import { sendEmail } from '@/app/actions';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleFormAction(formData: FormData) {
    setStatus('sending');
    const result = await sendEmail(formData);
    
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      // Reset error after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        
        {/* Left Side: Text & Socials */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's <span className="text-brand-primary">Connect</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            I'm currently looking for new opportunities or freelance projects. 
            If you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Me</p>
                <a href="mailto:shaido0.ali@gmail.com" className="text-lg font-medium text-white hover:text-brand-primary transition-colors">
                  shaido0.ali@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">Socials</p>
                <div className="flex gap-4">
                  <a href="#" className="font-medium text-white hover:text-brand-secondary transition-colors text-lg">LinkedIn</a>
                  <a href="#" className="font-medium text-white hover:text-brand-secondary transition-colors text-lg">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="rounded-3xl border border-white/10 bg-brand-surface/30 p-8 backdrop-blur-sm relative overflow-hidden">
          {status === 'success' ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary/20 text-brand-secondary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="mt-2 text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-semibold text-brand-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form action={handleFormAction} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all"
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-xl bg-brand-primary py-4 font-bold text-white transition-all hover:bg-blue-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-out"
              >
                {status === 'sending' ? 'Sending...' : status === 'error' ? 'Error! Try Again' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
