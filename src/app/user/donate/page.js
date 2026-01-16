import Sidebar from '@/components/Sidebar';

export default function Donate() {
  const campaigns = [
    { title: "Education for All", raised: 45000, goal: 100000, percentage: 45 },
    { title: "Clean Water Initiative", raised: 78000, goal: 120000, percentage: 65 }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-10 flex gap-10">
        <div className="flex-[2]">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Make a Donation</h1>
          <div className="space-y-4">
            {campaigns.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex justify-between mb-2"><h4 className="font-bold">{c.title}</h4><span>{c.percentage}%</span></div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full" style={{ width: `${c.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm border-t-4 border-pink-500 h-fit">
          <h3 className="font-bold mb-6">❤ Donation Amount</h3>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {['$25', '$50', '$100'].map(a => <button key={a} className="py-2 border rounded-lg text-sm font-bold">{a}</button>)}
          </div>
          <button className="w-full bg-pink-500 text-white py-4 rounded-2xl font-bold">Donate Now</button>
        </div>
      </main>
    </div>
  );
}