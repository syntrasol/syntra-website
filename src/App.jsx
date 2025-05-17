import React, { useState } from 'react';

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
          <img src="/syntra-icon-light.png" alt="Syntra logo" className="h-12 md:h-14 lg:h-16 w-auto drop-shadow-md" />
        </a>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#how-it-works" className="hover:underline">How It Works</a>
          <a href="#roadmap" className="hover:underline">Roadmap</a>
          <button onClick={() => setShowForm(true)} className="hover:underline">Join</button>
        </nav>
      </header>

      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">AI-Native Execution. Solana Speed.</h2>
        <p className="text-xl text-gray-300 mb-8">
          Syntra is a prompt-based execution engine built for traders who move fast. Skip the dashboards — type what you want to do and let Syntra route and execute the trade on Solana in real time.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium"
        >
          Join Beta
        </button>
      </section>

      {/* rest of your unchanged code here... */}

    </div>
  );
}
