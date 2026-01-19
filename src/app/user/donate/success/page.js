"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar from "../../../../components/Sidebar";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get both IDs from the URL
  const donationId = searchParams.get("donation_id");
  const sessionId = searchParams.get("session_id"); 
  
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    if (donationId && sessionId) {
      // Send BOTH to the backend
      fetch("/api/confirm-donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ donationId, sessionId }), // ✅ Changed
      })
      .then((res) => {
        if (res.ok) setStatus("success");
        else setStatus("error");
      })
      .catch(() => setStatus("error"));
    }
  }, [donationId, sessionId]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-10 flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg">
          {status === "verifying" && <p className="text-xl font-bold animate-pulse">Verifying payment with Stripe...</p>}
          
          {status === "success" && (
            <>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✅</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
              <p className="text-gray-500 mb-8">Your donation was successful and the Receipt ID has been generated.</p>
              <button 
                onClick={() => router.push("/user/history")}
                className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700 transition"
              >
                View Receipt
              </button>
            </>
          )}

          {status === "error" && (
             <p className="text-red-500 font-bold">Something went wrong verifying the payment.</p>
          )}
        </div>
      </main>
    </div>
  );
}