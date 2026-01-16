import Sidebar from '@/components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah! 👋</h1>
          <p className="text-gray-500">Your generosity makes a difference every day.</p>
        </header>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {[{ label: 'Donations Made', val: '2' }, { label: 'Member Since', val: 'Jan 2024' }, { label: 'Impact Score', val: 'Gold' }].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-sm font-medium">{s.label}</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{s.val}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 bg-white p-8 rounded-3xl shadow-sm border-t-4 border-pink-500">
            <h3 className="text-xl font-bold mb-4 text-gray-800">❤ Make a Donation</h3>
            <p className="text-gray-500 mb-8">Your contribution helps us create lasting change.</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-3 rounded-xl font-semibold transition-all">Donate Now →</button>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="font-bold text-gray-800 mb-6">$ Recent Activity</h3>
            <div className="p-4 bg-gray-50 rounded-xl flex justify-between items-center">
              <span>$150 <p className="text-[10px] text-gray-400">May 15, 2024</p></span>
              <span className="text-green-500 text-[10px] font-bold">SUCCESS</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}