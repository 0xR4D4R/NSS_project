import Sidebar from '@/components/Sidebar';

export default function DonationHistory() {
  const transactions = [
    { date: "May 15, 2024", amount: "$150", id: "TXN-D1", status: "Success" },
    { date: "May 10, 2024", amount: "$100", id: "TXN-D5", status: "Success" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-10">
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Donation History</h1>
          <button className="px-4 py-2 border rounded-lg text-sm font-medium">Export</button>
        </div>
        <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <tr><th className="p-6">Date</th><th className="p-6">Amount</th><th className="p-6">ID</th><th className="p-6">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((t, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold">{t.date}</td>
                  <td className="p-6 font-bold">{t.amount}</td>
                  <td className="p-6 text-gray-400 text-xs">{t.id}</td>
                  <td className="p-6"><span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase">● {t.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}