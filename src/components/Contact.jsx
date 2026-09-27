import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission (since no backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormState({
        name: '',
        company: '',
        phone: '',
        email: '',
        requirement: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="pt-20 pb-24">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12"
        >
          Contact Us
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Left Column - Contact Info */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 space-y-6 shadow-xs"
          >
            <motion.h3
              variants={textVariant(0.6)}
              initial="hidden"
              whileInView="show"
              className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200/60 dark:border-slate-800"
            >
              Contact Information
            </motion.h3>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              className="space-y-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Mr. Umesh Kumar Dhiman</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Contact Person / Management</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.113a11.042 11.042 0 005.516 5.516l1.113-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    <a href="tel:+919536907010" className="text-blue-600 dark:text-blue-400 hover:underline">+91 9536907010</a>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Direct Phone Line</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 break-all">
                    <a href="mailto:solution.bharatengineering@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">solution.bharatengineering@gmail.com</a>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Official Email</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    <a href="https://wa.me/919536907010" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">WhatsApp Chat</a>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Instant Support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm space-y-0.5">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Dhiman Street,</p>
                  <p className="text-slate-600 dark:text-slate-400">Back Side of Nirankari Bhawan, Bhagwanpur,</p>
                  <p className="text-slate-600 dark:text-slate-400">Roorkee, Distt. Haridwar, Uttarakhand, India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-[300px]">
                {/* Placeholder for Google Maps - replace with actual embed */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
                  Google Maps Embed
                </div>
                {/* TODO: Replace with actual Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?placeholder"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="hidden"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 space-y-6 shadow-xs"
          >
            <motion.h3
              variants={textVariant(0.6)}
              initial="hidden"
              whileInView="show"
              className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200/60 dark:border-slate-800"
            >
              Send Enquiry
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-sm"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-sm"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="requirement" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Requirement
                </label>
                <select
                  id="requirement"
                  name="requirement"
                  value={formState.requirement}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-sm"
                >
                  <option value="" className="dark:bg-slate-900">Select Requirement Type</option>
                  <option value="Die-Casting Components" className="dark:bg-slate-900">Die-Casting Components</option>
                  <option value="Fabrication Work" className="dark:bg-slate-900">Fabrication Work</option>
                  <option value="Precision Machining" className="dark:bg-slate-900">Precision Machining</option>
                  <option value="Custom Components" className="dark:bg-slate-900">Custom Components</option>
                  <option value="Other" className="dark:bg-slate-900">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-sm"
                  rows="4"
                  placeholder="Tell us about your component specifications or requirements..."
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition-all font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 ${isSubmitting ? 'opacity-70' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Submit Status Message */}
            {submitStatus === 'success' && (
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 text-sm font-medium"
              >
                Thank you for your enquiry! We will get back to you shortly.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 dark:text-red-400 text-sm font-medium"
              >
                There was an error sending your enquiry. Please try again.
              </motion.div>
            )}
          </motion.div>
        </motion.div>
    </section>
  );
};

export default Contact;