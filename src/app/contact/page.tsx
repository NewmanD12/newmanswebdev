'use client';
import { useState, useRef } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData();

    // Manually collect text fields
    formData.append('name', (form.elements.namedItem('name') as HTMLInputElement)?.value || '');
    formData.append('email', (form.elements.namedItem('email') as HTMLInputElement)?.value || '');
    formData.append('phone', (form.elements.namedItem('phone') as HTMLInputElement)?.value || '');
    formData.append('message', (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '');

    // Append all selected files
    selectedFiles.forEach((file) => {
      formData.append('pictures', file);
    });

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const messageText = formData.get('message') as string;

    if (!name?.trim() || !email?.trim() || !messageText?.trim()) {
      setStatus('error');
      setMessage('Please fill in all required fields.');
      return;
    }

    if (selectedFiles.length > 5) {
      setStatus('error');
      setMessage('Maximum 5 pictures allowed.');
      return;
    }
    for (const file of selectedFiles) {
      if (file.size > 5 * 1024 * 1024) {
        setStatus('error');
        setMessage('Each picture must be under 5 MB.');
        return;
      }
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        await res.json().catch(() => ({}));
        setStatus('success');
        setMessage("Thank you! Your message and pictures have been sent. I'll get back to you soon.");
        form.reset();
        setSelectedFiles([]);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        let errorMsg = 'Something went wrong. Please try again.';
        try {
          const data = await res.json();
          errorMsg = data.error || errorMsg;
        } catch {}
        setStatus('error');
        setMessage(errorMsg);
      }
    } catch (err) {
      // console.error('Fetch error:', err);
      setStatus('error');
      setMessage('Network issue — please check your connection or call/text me directly at (304) 719-1117.');
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3f6a92] text-center mb-6">
          Get In Touch
        </h1>

        <p className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Ready for a new website, redesign, or have questions about your online presence?  
          Fill out the form below — feel free to attach pictures (logos, current site screenshots, inspiration, etc.).
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f6a92] focus:border-[#3f6a92] text-black placeholder-gray-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f6a92] focus:border-[#3f6a92] text-black placeholder-gray-500 transition"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(304) 555-1234"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f6a92] focus:border-[#3f6a92] text-black placeholder-gray-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Tell me about your project <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="What kind of site are you looking for? Budget range? Timeline? Any specific features... Attach pictures below if you have them."
              rows={6}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f6a92] focus:border-[#3f6a92] text-black placeholder-gray-500 resize-vertical transition"
            />
          </div>

          <div>
            <label htmlFor="pictures" className="block text-sm font-medium text-gray-700 mb-1">
              Pictures / References (optional – jpg, png, webp, pdf)
            </label>
            <input
              ref={fileInputRef}
              type="file"
              id="pictures"
              name="pictures"
              accept="image/jpeg,image/png,image/webp,application/pdf"
              multiple
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#3f6a92]/10 file:text-[#3f6a92] hover:file:bg-[#3f6a92]/20 transition cursor-pointer"
            />
            <p className="mt-1 text-xs text-gray-500">
              Max 5 files, 5 MB each. Multiple files supported.
            </p>

            {selectedFiles.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700">Selected files:</p>
                <ul className="mt-2 space-y-2">
                  {selectedFiles.map((file, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded text-gray-800"
                    >
                      <div className="truncate max-w-[240px]">
                        {file.name} <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="ml-3 text-red-600 hover:text-red-800 font-medium text-sm"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full font-semibold py-4 rounded-lg transition text-white shadow-md
              ${status === 'loading'
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#3f6a92] hover:bg-[#366089] active:bg-[#2c557a]'
              }`}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status !== 'idle' && (
          <div className="mt-8 text-center">
            {status === 'success' ? (
              <p className="text-green-600 font-semibold text-lg">{message}</p>
            ) : (
              <p className="text-red-600 font-semibold text-lg">{message}</p>
            )}
          </div>
        )}

        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg font-medium">
            Or call/text me directly: <a href="tel:+13047191117" className="text-[#3f6a92] hover:underline">(304) 719-1117</a>
          </p>
          <p className="mt-2">
            Beckley / Beaver area • Southern West Virginia
          </p>
        </div>
      </div>
    </main>
  );
}