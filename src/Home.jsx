
import React, { useState } from 'react';
import { FaRocket } from 'react-icons/fa';

export default function Home() {
  const steps = [
    {
      title: 'Step 1: Prompt Input',
      description: 'buy $JUP if RSI drops below 25 in the next 10 minutes',
      image: '/demo-step1.png'
    },
    {
      title: 'Step 2: Parsed Strategy',
      description: 'Syntra detected a valid intent. Preparing to monitor RSI levels for $JUP.',
      image: '/demo-step2.png'
    },
    {
      title: 'Step 3: Trigger Executed',
      description: 'RSI dropped below 25. Order submitted through Jupiter Aggregator.',
      image: '/demo-step3.png'
    }
  ];

  const [step, setStep] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const nextStep = () => setStep((prev) => (prev + 1) % steps.length);

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
      <header className="px-6 py-4 flex justify-between items-center border-b border-white/10">
        <a href="#" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img src="/syntra-icon-light.png" alt="Syntra logo" className="h-20 w-auto drop-shadow-md" />
        </a>
        <nav className="space-x-6 text-sm md:text-base flex items-center">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#how-it-works" className="hover:underline">How It Works</a>
          <a href="#roadmap" className="hover:underline">Roadmap</a>
          <a href="https://syntax-6.gitbook.io/syntra" target="_blank" rel="noopener noreferrer" className="hover:underline">Docs</a>
          <a href="/demo" className="hover:underline">Demo</a>
        </nav>
      </header>

      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">AI-Native Execution. Solana Speed.</h2>
        <p className="text-xl text-gray-300 mb-8">
          Syntra is a prompt-based execution engine built for traders who move fast. Skip the dashboards — type what you want to do and let Syntra route and execute the trade on Solana in real time.
        </p>

        <div className="w-full max-w-xl mx-auto mb-6">
          <img
            src={steps[step].image}
            alt={steps[step].title}
            className="rounded-xl w-full object-contain shadow-xl transition-opacity duration-1000 ease-in-out opacity-100"
          />
          <h3 className="text-2xl font-semibold mt-4">{steps[step].title}</h3>
          <p className="text-gray-300 mt-2">{steps[step].description}</p>
          <button
            onClick={nextStep}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-medium"
          >
            Next Step
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200"
          >
            Join Beta
          </button>
          <a
            href="/demo"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-700 hover:text-white font-medium transition-all shadow-lg hover:shadow-purple-500/50"
          >
            <FaRocket className="w-4 h-4" />
            Try Demo
          </a>
        </div>
      </section>
    </div>
  );
}
