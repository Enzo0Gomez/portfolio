import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

console.log('SID:', EMAILJS_SERVICE_ID);
console.log('TID:', EMAILJS_TEMPLATE_ID);
console.log('KEY:', EMAILJS_PUBLIC_KEY);

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        if (EMAILJS_PUBLIC_KEY) {
            emailjs.init(EMAILJS_PUBLIC_KEY);
        }
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (status === 'error' || status === 'success') setStatus('idle');
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            console.error('EmailJS configuration is missing!');
            setStatus('error');
            
            // SweetAlert2 para sa kulang na configuration
            Swal.fire({
                title: 'Configuration Error',
                text: 'EmailJS configuration is missing!',
                icon: 'error',
                confirmButtonColor: '#FACC15', // Bagay sa dilaw mong theme
            });
            return;
        }

        setStatus('sending');

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            to_email: "gomezraizendan@gmail.com",
            from_name: form.name,
            reply_to: form.email,
            message: form.message,
        })
            .then((result) => {
                console.log('EmailJS success:', result.text);
                setStatus('success');
                setForm({ name: '', email: '', message: '' });

                // SweetAlert2 kapag NATANGGAP/SUCCESS ang message
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Salamat! Nakuha ko ang iyong mensahe.',
                    icon: 'success',
                    confirmButtonColor: '#FACC15',
                });
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                setStatus('error');

                // SweetAlert2 kapag HINDI NATANGGAP/ERROR
                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonColor: '#FACC15',
                });
            });
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
                    className="flex flex-col min-w-0 gap-4 p-6 transition-colors border group border-white/15 hover:border-yellow-400/40 rounded-xl sm:p-7">
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
                    className="flex flex-col min-w-0 gap-4 p-6 transition-colors border group border-white/15 hover:border-yellow-400/40 rounded-xl sm:p-7">
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
                    className="flex flex-col min-w-0 gap-4 p-6 transition-colors border group border-white/15 hover:border-yellow-400/40 rounded-xl sm:p-7">
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

            <div className="max-w-2xl mx-auto mt-16">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <fieldset disabled={status === 'sending'} aria-busy={status === 'sending'} className="space-y-6 disabled:opacity-50">

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white/70">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full p-3.5 text-white bg-white/5 border border-white/10 rounded-xl outline-none transition-all duration-200 placeholder:text-white/25 focus:border-yellow-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-yellow-400/20"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/70">Email</label>
                                <input
                                    type="type"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="@email.com"
                                    className="w-full p-3.5 text-white bg-white/5 border border-white/10 rounded-xl outline-none transition-all duration-200 placeholder:text-white/25 focus:border-yellow-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-yellow-400/20"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/70">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Kumusta! I'd like to talk about..."
                                rows="6"
                                className="w-full p-3.5 text-white bg-white/5 border border-white/10 rounded-xl outline-none resize-none transition-all duration-200 placeholder:text-white/25 focus:border-yellow-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-yellow-400/20"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full px-8 py-3.5 text-sm font-semibold text-black transition-all duration-150 bg-yellow-400 sm:w-auto rounded-xl hover:bg-yellow-300 active:scale-95 disabled:bg-white/20 disabled:text-white/40 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}