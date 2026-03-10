import React, { useState } from 'react';
import { ADMIN_PASSWORD } from '../password';
import { ds } from '../designSystem';
import { Eye, EyeOff, Lock } from 'lucide-react';

const Adminpannel: React.FC = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === ADMIN_PASSWORD) {
      setIsAuthed(true);
      setError('');
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  if (!isAuthed) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className={`w-full max-w-md ${ds.card} border border-white/10 bg-slate-900/70 backdrop-blur-xl`}>
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-blue-400 mb-1">
                  Internal Access
                </div>
                <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-400" />
                  Admin Pannel
                </h1>
              </div>
              <span className="px-3 py-1 rounded-full border border-white/10 text-[11px] text-slate-300">
                Build • Arrange • Launch
              </span>
            </div>

            <p className="text-sm text-slate-300/80 mb-6">
              Enter the passphrase to access your internal examples library. Changes here only affect
              this browser session.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-200 tracking-wide">
                  Access Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent placeholder:text-slate-500"
                    placeholder="••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-3 inline-flex items-center justify-center text-slate-400 hover:text-slate-100"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-center justify-between bg-red-500/10 border border-red-500/40 text-red-200 text-xs px-3 py-2 rounded-lg">
                  <span>{error}</span>
                  <button
                    type="button"
                    className="p-1 hover:bg-red-500/20 rounded"
                    onClick={() => setError('')}
                  >
                    ×
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Unlock admin
              </button>
            </form>

            <p className="mt-4 text-[11px] text-slate-500">
              Keep this URL private. This panel is intentionally lightweight and does not use a
              database – perfect for quickly rearranging demo cards during live calls.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-3xl font-semibold text-white">Admin Pannel</h1>
        <p className="text-sm text-slate-300">
          You are authenticated. The detailed examples management UI has been temporarily simplified
          to resolve build issues. You can now safely deploy and iterate on this page.
                </p>
              </div>
    </div>
  );
};

export default Adminpannel;

