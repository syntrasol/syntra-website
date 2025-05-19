import React, { useState } from 'react';

export default function Demo() {
  const [prompt, setPrompt] = useState('');
  const [parsedTrade, setParsedTrade] = useState(null);

  const handleParse = () => {
    if (!prompt.trim()) return;

    const words = prompt.toLowerCase().split(' ');
    const action = words.includes('sell') ? 'Sell' : 'Buy';
    const token = words.find(w => w.startsWith('$'))?.replace('$', '').toUpperCase() || 'UNKNOWN';
    const condition = prompt.match(/if (.+)/i)?.[1] || 'No condition found';

    setParsedTrade({
      action,
      token,
      condition,
      status: '✅ Order Placed'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-6 py-20 font-sans">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6">Syntra Demo</h1>
        <p className="text-lg text-gray-300 mb-10">Type any trading prompt below and watch it parse + simulate execution.</p>

        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. buy $SOL if BTC breaks 70k"
          className="w-full px-4 py-3 text-black rounded-lg mb-4 text-md"
        />

        <button
          onClick={handleParse}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl text-white font-medium"
        >
          Run Prompt
        </button>

        {parsedTrade && (
          <div className="mt-10 p-6 bg-black/30 rounded-xl shadow-xl text-left">
            <h3 className="text-2xl font-bold mb-4">Parsed Trade</h3>
            <ul className="space-y-2 text-gray-200">
              <li><strong>Action:</strong> {parsedTrade.action}</li>
              <li><strong>Token:</strong> {parsedTrade.token}</li>
              <li><strong>Condition:</strong> {parsedTrade.condition}</li>
              <li><strong>Status:</strong> {parsedTrade.status}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
