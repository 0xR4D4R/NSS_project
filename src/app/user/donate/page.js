"use client";
import Sidebar from '../../../components/Sidebar'; 
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function DonatePage() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const presetAmounts = [25, 50, 100, 250, 500];

  const handlePresetClick = (val) => setAmount(val);

  const handleInputChange = (e) => {
    if (e.target.value >= 0) setAmount(e.target.value);
  };

  const handleDonate = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setLoading(true);

    try {
      // 1. Call our API to create a Stripe Session
      const res = await fetch("/api/stripe-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount,
          email: session?.user?.email,
          name: session?.user?.name,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to create session");

      // 2. Redirect user to the Stripe Checkout Page
      if (data.url) {
        window.location.href = data.url; 
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-10">
        
        {/* ... (Keep your Header and Left Side Campaign Card exactly as they were) ... */}
        
        {/* Only showing the relevant Right Side part for brevity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
                {/* ... Campaign Card ... */}
            </div>

            <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-pink-500"></div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-pink-500">♡</span> Donation Amount
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">Select or enter your donation amount</p>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handlePresetClick(preset)}
                      className={`py-3 rounded-xl font-bold text-lg transition-all border-2 ${
                        Number(amount) === preset
                          ? "border-pink-500 bg-pink-50 text-pink-600 shadow-sm"
                          : "border-gray-100 text-gray-700 hover:border-pink-200 hover:bg-pink-50"
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Custom Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input
                      type="number"
                      min="0"
                      value={amount}
                      onChange={handleInputChange}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none font-bold text-gray-700"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleDonate}
                  disabled={loading}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-200 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-50"
                >
                  {loading ? "Redirecting..." : <><span>💳</span> Donate with Stripe</>}
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-6 font-medium">
                  Secured by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}