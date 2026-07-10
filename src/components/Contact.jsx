import React, { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const subject = encodeURIComponent(`Message from ${form.name || 'website contact form'}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
        window.location.href = `mailto:gomezraizendan@gmail.com?subject=${subject}&body=${body}`;
    }

    return (
        <div id="contact" className="bg-[#0F0F0F] text-[#F5F5F0] min-h-screen px-6 sm:px-10 py-16">

            <div className="flex items-start justify-between pb-10 border-b mb-14 border-white/10">
                <div>
                    <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
                        Contact
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">

                <a href="https://www.linkedin.com/in/dan-raizen-gomez-403b84362/" target="_blank" rel="noopener noreferrer"
                    className="flex flex-col min-w-0 gap-4 p-6 transition-colors border group border-white/15 hover:border-white/40 rounded-xl sm:p-7">
                    <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full border-white/20 group-hover:bg-white group-hover:text-black shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98v5.69h-3v-11h2.89v1.5h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.63 2.02 3.63 4.64v6.42z" />
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="mb-1 text-sm text-white/50">LinkedIn</p>
                        <p className="text-base font-medium truncate">Dan Raizen Gomez</p>
                    </div>
                </a>

                <a href="viber://chat?number=%2B639533221608"
                    className="flex flex-col min-w-0 gap-4 p-6 transition-colors border group border-white/15 hover:border-white/40 rounded-xl sm:p-7">
                    <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full border-white/20 group-hover:bg-white group-hover:text-black shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2c-5.52 0-10 4.48-10 10 0 1.85.5 3.58 1.38 5.07L2 22l4.93-1.38c1.49.88 3.22 1.38 5.07 1.38 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18c-1.7 0-3.27-.5-4.6-1.36l-.33-.21-3.07.86.86-3.07-.21-.33c-.86-1.33-1.36-2.9-1.36-4.6 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="mb-1 text-sm text-white/50">Viber</p>
                        <p className="text-base font-medium truncate">0953 322 1608</p>
                    </div>
                </a>

                <a href="mailto:gomezraizendan@gmail.com"
                    className="flex flex-col min-w-0 gap-4 p-6 transition-colors border group border-white/15 hover:border-white/40 rounded-xl sm:p-7">
                    <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full border-white/20 group-hover:bg-white group-hover:text-black shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12.713l-11.985-9.713h23.97zM0 21.726v-15.726l12 9.715 12-9.715v15.726z" />
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="mb-1 text-sm text-white/50">Gmail</p>
                        <p className="text-base font-medium truncate">gomezraizendan@gmail.com</p>
                    </div>
                </a>

            </div>

            <div className="mt-6">
                <div className="p-6 border rounded-xl border-white/15 sm:p-8">
                    <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-6">
                        Send a message
                    </h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm text-white/50">Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="px-3 py-2 bg-transparent border rounded-md border-white/20 text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm text-white/50">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="px-3 py-2 bg-transparent border rounded-md border-white/20 text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                        </label>

                        <label className="flex flex-col gap-2 sm:col-span-2">
                            <span className="text-sm text-white/50">Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your message"
                                required
                                rows={5}
                                className="px-3 py-2 bg-transparent border rounded-md resize-none border-white/20 text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                        </label>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="px-5 py-2.5 font-medium text-black bg-white rounded-md transition-colors hover:bg-white/85"
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}