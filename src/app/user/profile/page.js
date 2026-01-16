"use client";
import Sidebar from '../../../components/Sidebar';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-500">Manage your account settings and preferences.</p>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Profile Card */}
          <div className="col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-24 h-24 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              SJ
            </div>
            <h2 className="text-xl font-bold text-gray-800">Sarah Johnson</h2>
            <p className="text-gray-400 text-sm mb-4">sarah.johnson@email.com</p>
            <span className="bg-purple-50 text-purple-600 px-4 py-1 rounded-full text-xs font-bold mb-6">
              Gold Member
            </span>
            <button className="w-full py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
              📝 Edit Profile
            </button>
          </div>

          {/* Account Details */}
          <div className="col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-purple-500">👤</span> Account Details
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">Full Name</p>
                <p className="font-medium text-gray-800">Sarah Johnson</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">Email</p>
                <p className="font-medium text-gray-800">sarah.johnson@email.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">Member Since</p>
                <p className="font-medium text-gray-800">2024-01-15</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">Account Status</p>
                <p className="font-medium text-green-500">Verified</p>
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-purple-500">🔔</span> Notification Preferences
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Email Notifications', desc: 'Receive updates about your donations', active: true },
                { label: 'Campaign Updates', desc: 'Get notified about new campaigns', active: true },
                { label: 'Monthly Reports', desc: 'Receive monthly impact reports', active: false },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative cursor-pointer ${item.active ? 'bg-purple-600' : 'bg-gray-200'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Card */}
          <div className="col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-purple-500">🔒</span> Security
            </h3>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-gray-50 rounded-xl text-sm font-medium text-gray-700 flex items-center justify-between hover:bg-gray-100 transition-all">
                Change Password <span>→</span>
              </button>
              <button className="w-full py-3 px-4 bg-gray-50 rounded-xl text-sm font-medium text-gray-700 flex items-center justify-between hover:bg-gray-100 transition-all">
                Two-Factor Auth <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}