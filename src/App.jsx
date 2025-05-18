import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const twitter = formData.get('twitter');
    const message = formData.get('message');
    console.log({ name, email, twitter, message });
    alert('Submitted!');
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      <link rel="preload" as="image" href="/syntra-icon-light.png" />
      <header className="px-6 py-4 flex justify-between items-center border-b border-white/10">
        <a href="#" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img src="/syntra-icon-light.png" alt="Syntra logo" className="h-30 md:h-36 lg:h-42 w-auto drop-shadow-md" />
        </a>
        <nav className="space-x-6 text-sm md:text-base flex items-center">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#how-it-works" className="hover:underline">How It Works</a>
          <a href="#roadmap" className="hover:underline">Roadmap</a>
          <a
            href="https://syntax-6.gitbook.io/syntra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline inline-flex items-center space-x-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 4a1 1 0 011-1h6.764a1 1 0 01.832.445l1.264 1.851a1 1 0 00.832.444H20a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v12h14V7h-5.308a3 3 0 01-2.496-1.332L11.236 5H5z" />
            </svg>
            <span>Docs</span>
          </a>
          <button onClick={() => setShowForm(true)} className="hover:underline">Join</button>
        </nav>
      </header>

      <section className="px-6 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            AI-Native Execution. Solana Speed.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Syntra is a prompt-based execution engine built for traders who move fast.
            Skip the dashboards — type what you want to do and let Syntra route and execute
            the trade on Solana in real time.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium"
          >
            Join Beta
          </button>
        </div>

        <div className="lg:w-1/2 space-y-6">
          {[1, 2, 3].map((step, index) => (
            <motion.img
              key={step}
              src={`/demo-step${step}.png`}
              alt={`Demo step ${step}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.7, ease: 'easeOut' }}
              className="rounded-xl shadow-xl w-full border border-white/10"
            />
          ))}
        </div>
      </section>

      <footer className="text-center p-6 border-t border-white/10 text-gray-400">
        &copy; 2025 Syntra Labs. Built on Solana. &nbsp;
        <a href="https://www.x.com/joinsyntra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 ml-2 text-white hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M18.255 3H21L14.745 10.307 22.302 21h-6.903l-4.473-6.221L5.89 21H3l6.718-7.664L1.5 3h7.04l4.14 5.758L18.255 3Zm-1.16 17h1.47L6.92 4.24H5.375L17.095 20Z" />
          </svg>
          <span>@joinsyntra</span>
        </a>
      </footer>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Join Syntra Beta</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" placeholder="Name" className="w-full px-4 py-2 border rounded" required />
              <input name="email" placeholder="Email" type="email" className="w-full px-4 py-2 border rounded" required />
              <input name="twitter" placeholder="Twitter Handle (optional)" className="w-full px-4 py-2 border rounded" />
              <textarea name="message" placeholder="Why do you want access?" className="w-full px-4 py-2 border rounded" rows="3" />
              <div className="flex justify-end space-x-4">
                <button type="button" onClick={() => setShowForm(false)} className="text-gray-600">Cancel</button>
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
