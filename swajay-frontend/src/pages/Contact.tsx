import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Web3Forms Configuration ──────────────────────────────────────────────────
// 1. Go to https://web3forms.com
// 2. Enter your email (support@swajaysolutions.com) and click "Create Access Key"
// 3. Check your inbox for the key and paste it below
const WEB3FORMS_ACCESS_KEY = 'd939842d-6467-421a-a639-80f4f8827a6b';
// ─────────────────────────────────────────────────────────────────────────────

type FormState = {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [status, setStatus] = useState<Status>('idle');

    const validate = (): boolean => {
        const newErrors: Partial<FormState> = {};
        if (!form.name.trim()) newErrors.name = 'Full name is required.';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Enter a valid email address.';
        }
        if (!form.message.trim()) newErrors.message = 'Message cannot be empty.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormState]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New Contact from ${form.name} — Swajay Solutions`,
                    from_name: form.name,
                    email: form.email,
                    phone: form.phone || 'Not provided',
                    company: form.company || 'Not provided',
                    message: form.message,
                    botcheck: '',
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', company: '', message: '' });
                setTimeout(() => setStatus('idle'), 6000);
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (err) {
            console.error('Web3Forms error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 6000);
        }
    };

    const inputBase = 'w-full px-4 py-3 rounded-lg bg-gray-50 border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors';
    const inputClass = (field: keyof FormState) =>
        `${inputBase} ${errors[field]
            ? 'border-red-400 focus:ring-red-400'
            : 'border-gray-200 focus:border-primary focus:ring-primary'
        }`;

    return (
        <div className="min-h-screen bg-blue-50">
            {/* Hero Section with Contact Form */}
            <section className="relative w-full py-20 bg-[#FAFAF9]">
                {/* Background Layers */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-70"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-70"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left Column: Text Content */}
                        <div className="text-left pt-12">
                            <span className="inline-block text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                Contact Us
                            </span>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Get in Touch
                            </h1>

                            <p className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed mb-8">
                                Ready to transform your business? Let's start the conversation and explore how we can help you achieve your goals.
                            </p>
                        </div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                            {/* Success / Error Banner */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 font-medium flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message sent! We'll get back to you soon.
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                {/* Honeypot anti-spam (hidden) */}
                                <input type="checkbox" name="botcheck" className="hidden" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className={inputClass('name')}
                                            placeholder="Your name"
                                        />
                                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className={inputClass('email')}
                                            placeholder="name@example.com"
                                        />
                                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className={inputClass('phone')}
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            className={inputClass('company')}
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        className={`${inputClass('message')} resize-none`}
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                            </svg>
                                            Sending…
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        USA Headquarters
                                    </h3>
                                    <p className="text-gray-600 ml-7">
                                        8 The Green STE R,<br />
                                        Dover, DE 19901
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                        India Operations
                                    </h3>
                                    <p className="text-gray-600 ml-7">
                                        Brigade IRV, Nallurhalli,<br />
                                        Whitefield, Bangalore 560066
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        Email Us
                                    </h3>
                                    <p className="text-gray-600 ml-7 break-all">
                                        support@swajaysolutions.com
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/company/swajaybusinesssolutions/" target="_blank" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/30">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
                                    </a>

                                </div>
                            </div>
                        </motion.div>

                        {/* Google Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>

                            <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d230.96729571996005!2d77.6392383224147!3d12.981826907006285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzU1LjAiTiA3N8KwMzgnMjEuOSJF!5e1!3m2!1sen!2sin!4v1771237712039!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Swajay Solutions Office Location"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
