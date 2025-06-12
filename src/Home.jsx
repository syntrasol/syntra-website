import React, { useState } from 'react';

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
      {/* Banner */}
      <div className="bg-white text-black text-sm md:text-base text-center py-2 px-4 shadow-md">
        Launching soon on <strong>Believe</strong> — Contract: 
        <span className="font-mono text-purple-700 ml-1">
          soon
        </span>
      </div>

      <header className="px-6 py-4 flex justify-between items-center border-b border-white/10">
        <a href="#" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img src="/syntra-icon-light.png" alt="Syntra logo" className="h-20 w-auto drop-shadow-md" />
        </a>
        <nav className="space-x-6 text-sm md:text-base flex items-center">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#how-it-works" className="hover:underline">How It Works</a>
          <a href="#roadmap" className="hover:underline">Roadmap</a>
          <a href="https://syntax-6.gitbook.io/syntra" target="_blank" rel="noopener noreferrer" className="hover:underline">Docs</a>
          <a href="/demo" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-lg font-medium transition">Try Demo</a>
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

        <button
          onClick={() => setShowForm(true)}
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200"
        >
          Join Beta
        </button>
      </section>

      <section id="features" className="px-6 py-20 bg-black/30 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Prompt-Based Trading</h3>
            <p>Use natural language to express trading strategies. No charts. No code. Just intent.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Instant Execution</h3>
            <p>Leverage Solana’s sub-second finality for real-time, gas-optimized transactions.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Multi-DEX Support</h3>
            <p>Access liquidity across major Solana DEXs like Orca, Jupiter, and Meteora for optimal routing.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Developer-Ready</h3>
            <p>Integrate Syntra’s prompt engine into your bots, dashboards, or Telegram trading flows.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">How Syntra Works</h3>
        <ol className="space-y-4 text-gray-300 list-decimal list-inside max-w-2xl mx-auto">
          <li>You input a prompt like "buy $JUP if RSI drops below 25 in the next 10 minutes."</li>
          <li>Syntra parses the prompt with its GPT-powered strategy engine.</li>
          <li>It checks liquidity, safety, and optimal routing across Solana DEXs.</li>
          <li>Execution logic is deployed to a user-specific vault, and the trade fires if conditions are met.</li>
        </ol>
      </section>

      <section id="roadmap" className="px-6 py-20 bg-black/20 text-center">
        <h3 className="text-3xl font-bold mb-6">Roadmap</h3>
        <ul className="list-disc pl-6 space-y-3 max-w-2xl mx-auto text-left">
          <li><strong>Q2 2025:</strong> Beta launch with Orca + Jito integration</li>
          <li><strong>Q3 2025:</strong> Vaults and API release, prompt condition builder</li>
          <li><strong>Q4 2025:</strong> Mobile view, Telegram bot interface, and strategy marketplace</li>
        </ul>
      </section>

      <section id="join" className="px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Join the Beta</h3>
        <p className="text-gray-300 mb-8">Get early access to Syntra, test new features, and shape the future of intent-based trading on Solana.</p>
        <button
          onClick={() => setShowForm(true)}
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200"
        >
          Request Access
        </button>
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
