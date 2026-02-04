'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const messageText = formData.get('message') as string;

    // Basic client-side validation
    if (!name || !email || !messageText) {
      setStatus('error');
      setMessage('Please fill in all required fields.');
      return;
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message: messageText }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Thank you! Your message has been sent.');
        (e.target as HTMLFormElement).reset(); // Clear form
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please check your connection.');
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3f6a92] text-center mb-6">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Ready for a new website or have questions? Fill out the form below or give us a call.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f6a92] text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f6a92] text-black"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f6a92] text-black"
          />
          <textarea
            name="message"
            placeholder="Tell us about your project... *"
            rows={6}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f6a92] text-black resize-vertical"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full font-semibold py-4 rounded-lg transition text-white ${
              status === 'loading'
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#3f6a92] hover:bg-[#366089]'
            }`}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status !== 'idle' && (
          <div className="mt-8 text-center">
            {status === 'success' ? (
              <p className="text-green-600 font-semibold">{message}</p>
            ) : (
              <p className="text-red-600 font-semibold">{message}</p>
            )}
          </div>
        )}

        <div className="mt-12 text-center text-gray-600">
          <p>Or call/text: (304) 719-1117</p>
          <p className="mt-2">Beaver, WV • Southern West Virginia</p>
        </div>
      </div>
    </main>
  );
}