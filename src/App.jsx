import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <h1 className="text-2xl font-bold">Syntra</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#how-it-works" className="hover:underline">How It Works</a>
          <a href="#roadmap" className="hover:underline">Roadmap</a>
          <a href="#join" className="hover:underline">Join</a>
        </nav>
      </header>

      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">AI-Native Execution. Solana Speed.</h2>
        <p className="text-xl text-gray-300 mb-8">
          Syntra is a prompt-based execution engine built for traders who move fast. Skip the dashboards — type what you want to do and let Syntra route and execute the trade on Solana in real time.
        </p>
        <a
          href="#join"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium"
        >
          Join Beta
        </a>
      </section>

      <section id="features" className="px-6 py-20 bg-black/30">
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

      <section id="how-it-works" className="px-6 py-20 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">How Syntra Works</h3>
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li>You input a prompt like "buy $JUP if RSI drops below 25 in the next 10 minutes."</li>
          <li>Syntra parses the prompt with its GPT-powered strategy engine.</li>
          <li>It checks liquidity, safety, and optimal routing across Solana DEXs.</li>
          <li>Execution logic is deployed to a user-specific vault, and the trade fires if conditions are met.</li>
        </ol>
      </section>

      <section id="roadmap" className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Roadmap</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Q2 2025:</strong> Beta launch with Orca + Jito integration</li>
            <li><strong>Q3 2025:</strong> Vaults and API release, prompt condition builder</li>
            <li><strong>Q4 2025:</strong> Mobile view, Telegram bot interface, and strategy marketplace</li>
          </ul>
        </div>
      </section>

      <section id="join" className="px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Join the Beta</h3>
        <p className="text-gray-300 mb-8">Get early access to Syntra, test new features, and shape the future of intent-based trading on Solana.</p>
        <a
          href="#"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200"
        >
          Request Access
        </a>
      </section>

      <footer className="text-center p-6 border-t border-white/10 text-gray-400">
        &copy; 2025 Syntra Labs. Built on Solana.
      </footer>
    </div>
  );
}
