
import React, { useState } from 'react';
import ChartComponent from './Chart';

export default function Demo() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [parsedTrade, setParsedTrade] = useState(null);
  const [tradeStatus, setTradeStatus] = useState('');
  const [executionIndex, setExecutionIndex] = useState(null);

  const connectWallet = () => {
    const fakeAddress = '5Hh...TgX2';
    setWalletConnected(true);
    setWalletAddress(fakeAddress);
    setBalance('12.4 SOL');
  };

  const handleParse = () => {
    if (!walletConnected) {
      alert('Please connect your wallet first.');
      return;
    }
    if (!prompt.trim()) return;

    setTradeStatus('Parsing prompt...');
    setTimeout(() => {
      const words = prompt.toLowerCase().split(' ');
      const action = words.includes('sell') ? 'Sell' : 'Buy';
      const token = words.find(w => w.startsWith('$'))?.replace('$', '').toUpperCase() || 'UNKNOWN';
      const condition = prompt.match(/if (.+)/i)?.[1] || 'No condition found';

      setParsedTrade({
        action,
        token,
        condition,
        status: '✅ Trade Executed',
        txnHash: 'Txn: 0x3f...9aC'
      });

      // Simulate trigger at index 9 (mock RSI threshold)
      setExecutionIndex(9);
      setTradeStatus('✅ Prompt parsed and trade simulated.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-6 py-20 font-sans">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6">Syntra Demo</h1>
        <p className="text-lg text-gray-300 mb-8">Simulate wallet connection, balances, and prompt-based trades.</p>

        {!walletConnected ? (
          <button
            onClick={connectWallet}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl text-white font-medium mb-6"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="mb-6 text-sm text-gray-300">
            <div>✅ Connected: <span className="font-mono text-white">{walletAddress}</span></div>
            <div>💰 Balance: <span className="text-white">{balance}</span></div>
          </div>
        )}

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

        {tradeStatus && (
          <p className="mt-4 text-sm text-green-400">{tradeStatus}</p>
        )}

        <ChartComponent executionPoint={executionIndex} />

        {parsedTrade && (
          <div className="mt-10 p-6 bg-black/30 rounded-xl shadow-xl text-left">
            <h3 className="text-2xl font-bold mb-4">Simulated Trade</h3>
            <ul className="space-y-2 text-gray-200">
              <li><strong>Action:</strong> {parsedTrade.action}</li>
              <li><strong>Token:</strong> {parsedTrade.token}</li>
              <li><strong>Condition:</strong> {parsedTrade.condition}</li>
              <li><strong>Status:</strong> {parsedTrade.status}</li>
              <li><strong>Tx Hash:</strong> {parsedTrade.txnHash}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
