import React, { useMemo, useState } from 'react';
import type { ExampleSite } from '../data/examples';
import { examples as initialExamples } from '../data/examples';
import { ADMIN_PASSWORD } from '../password';
import { ds, theme } from '../designSystem';
import { Eye, EyeOff, Lock, Plus, ArrowUpDown, ArrowUp, ArrowDown, X } from 'lucide-react';

const createEmptyExample = (nextId: number): ExampleSite => ({
  id: String(nextId),
  title: '',
  industry: '',
  funnelType: '',
  url: '',
  ctaLabel: 'View Live Site',
  image: '',
  buildTime: '',
  loadSpeed: '',
  techStack: [],
  conversionRate: '',
  description: '',
});

const Adminpannel: React.FC = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [error, setError] = useState('');

  const [items, setItems] = useState<ExampleSite[]>(initialExamples);
  const [draft, setDraft] = useState<ExampleSite>(() =>
    createEmptyExample(initialExamples.length + 1),
  );
  const [activeId, setActiveId] = useState<string | null>(initialExamples[0]?.id ?? null);

  const nextId = useMemo(
    () => (items.length ? Math.max(...items.map((i) => Number(i.id))) + 1 : 1),
    [items],
  );

  const activeItem = useMemo(
    () => items.find((i) => i.id === activeId) ?? null,
    [items, activeId],
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === ADMIN_PASSWORD) {
      setIsAuthed(true);
      setError('');
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= items.length) return;
    const clone = [...items];
    const [removed] = clone.splice(index, 1);
    clone.splice(newIndex, 0, removed);
    setItems(clone);
  };

  const sortByTitle = () => {
    const sorted = [...items].sort((a, b) => a.title.localeCompare(b.title));
    setItems(sorted);
  };

  const handleDraftChange = (field: keyof ExampleSite, value: string) => {
    if (field === 'techStack') {
      setDraft((prev) => ({
        ...prev,
        techStack: value.split(',').map((v) => v.trim()).filter(Boolean),
      }));
      return;
    }
    setDraft((prev) => ({ ...prev, [field]: value }));
  };

  const handleActiveChange = (field: keyof ExampleSite, value: string) => {
    if (!activeItem) return;
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== activeItem.id) return item;
        if (field === 'techStack') {
          return {
            ...item,
            techStack: value.split(',').map((v) => v.trim()).filter(Boolean),
          };
        }
        return { ...item, [field]: value };
      }),
    );
  };

  const resetDraft = () => {
    setDraft(createEmptyExample(nextId));
  };

  const addCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.title || !draft.url) {
      setError('Please fill at least Title and URL for the new card.');
      return;
    }
    const newItem: ExampleSite = {
      ...draft,
      id: String(nextId),
    };
    setItems((prev) => [...prev, newItem]);
    setError('');
    resetDraft();
  };

  if (!isAuthed) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div
          className={`w-full max-w-md ${ds.card} border border-white/10 bg-slate-900/70 backdrop-blur-xl`}
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className={`text-sm uppercase tracking-[0.22em] text-blue-400 mb-1`}>
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
                    <X className="w-3 h-3" />
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
    <div className="pt-20 min-h-screen bg-slate-950 text-slate-50">
      <section className="px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-blue-400 mb-2">
              Admin Pannel
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">
              Examples Library Control
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              Reorder, curate and prototype new example sites. These adjustments are session-only,
              perfect for live client walkthroughs and internal planning.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={sortByTitle}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-slate-200 hover:border-blue-500/70 hover:text-white transition-colors"
            >
              <ArrowUpDown className="w-3 h-3" />
              Sort A–Z
            </button>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[11px] border border-emerald-500/30">
              {items.length} cards in session
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] gap-10 items-start">
          {/* Arrangement grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
                Arrange examples
              </h2>
              <span className="text-[11px] text-slate-500">
                Drag-like controls without the drag library
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item, index) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`group relative rounded-2xl border px-4 py-4 flex gap-3 text-left transition-colors ${
                      isActive
                        ? 'border-blue-400 bg-slate-900'
                        : 'border-white/10 bg-slate-900/60 hover:border-blue-400/70'
                    }`}
                  >
                    <div className="flex flex-col justify-between items-center gap-1">
                      <button
                        type="button"
                        onClick={() => moveItem(index, 'up')}
                        disabled={index === 0}
                        className={`p-1.5 rounded-full border text-[10px] ${
                          index === 0
                            ? 'border-slate-700 text-slate-600 cursor-not-allowed'
                            : 'border-slate-600 text-slate-200 hover:border-blue-400 hover:text-blue-300'
                        }`}
                      >
                        <ArrowUp className="w-3 h-3" />
                      </button>
                      <span className="w-7 h-7 rounded-full bg-slate-800 text-[11px] flex items-center justify-center text-slate-300 border border-white/10">
                        {index + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => moveItem(index, 'down')}
                        disabled={index === items.length - 1}
                        className={`p-1.5 rounded-full border text-[10px] ${
                          index === items.length - 1
                            ? 'border-slate-700 text-slate-600 cursor-not-allowed'
                            : 'border-slate-600 text-slate-200 hover:border-blue-400 hover:text-blue-300'
                        }`}
                      >
                        <ArrowDown className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-slate-50 line-clamp-1">
                          {item.title || <span className="text-slate-500 italic">Untitled</span>}
                        </p>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                          {item.industry || '—'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[11px] text-slate-500 truncate max-w-[60%]">
                          {item.url}
                        </span>
                        {item.conversionRate && (
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                            {item.conversionRate}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Edit + New card form */}
          <div className="space-y-6">
            {/* Edit selected */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold text-slate-100 tracking-wide uppercase mb-1">
                    Edit selected card
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    Update links, CTA label, copy and imagery for the highlighted example.
                  </p>
                </div>
              </div>

              {!activeItem ? (
                <p className="text-xs text-slate-500">
                  Pick a card on the left to start editing its content.
                </p>
              ) : (
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Title</label>
                    <input
                      value={activeItem.title}
                      onChange={(e) => handleActiveChange('title', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent placeholder:text-slate-500"
                      placeholder="Example: Apex Fitness Studio"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-200">Industry</label>
                      <input
                        value={activeItem.industry}
                        onChange={(e) => handleActiveChange('industry', e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent placeholder:text-slate-500"
                        placeholder="Fitness, Real Estate…"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-200">Funnel Type</label>
                      <input
                        value={activeItem.funnelType}
                        onChange={(e) => handleActiveChange('funnelType', e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent placeholder:text-slate-500"
                        placeholder="Lead Gen, Sales Funnel…"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">CTA Label</label>
                    <input
                      value={activeItem.ctaLabel || ''}
                      onChange={(e) => handleActiveChange('ctaLabel', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent placeholder:text-slate-500"
                      placeholder="View Live Site"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Live URL</label>
                    <input
                      value={activeItem.url}
                      onChange={(e) => handleActiveChange('url', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent placeholder:text-slate-500"
                      placeholder="https://example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Preview Image URL</label>
                    <input
                      value={activeItem.image}
                      onChange={(e) => handleActiveChange('image', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent placeholder:text-slate-500"
                      placeholder="https://images.pexels.com/…"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-200">Build Time</label>
                      <input
                        value={activeItem.buildTime}
                        onChange={(e) => handleActiveChange('buildTime', e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder:text-slate-500"
                        placeholder="48 hours"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-200">Load Speed</label>
                      <input
                        value={activeItem.loadSpeed}
                        onChange={(e) => handleActiveChange('loadSpeed', e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                        placeholder="1.8s"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-200">Conversion Label</label>
                      <input
                        value={activeItem.conversionRate}
                        onChange={(e) => handleActiveChange('conversionRate', e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                        placeholder="+67%"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">
                      Tech stack (comma separated)
                    </label>
                    <input
                      value={activeItem.techStack.join(', ')}
                      onChange={(e) => handleActiveChange('techStack', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                      placeholder="HTML5, CSS3, JavaScript"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Short description</label>
                    <textarea
                      value={activeItem.description}
                      onChange={(e) => handleActiveChange('description', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500 min-h-[72px]"
                      placeholder="High-converting landing page with booking or application flow."
                    />
                  </div>
                </form>
              )}
            </div>

            {/* New card form */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-6 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold text-slate-100 tracking-wide uppercase mb-1">
                    Quick-add card
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    Lightweight form to mock a new example without touching the code.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-200 border border-blue-500/40">
                  <Plus className="w-3 h-3" />
                  New
                </span>
              </div>

              <form onSubmit={addCard} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">Title</label>
                  <input
                    value={draft.title}
                    onChange={(e) => handleDraftChange('title', e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                    placeholder="Example: Apex Fitness Studio"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Industry</label>
                    <input
                      value={draft.industry}
                      onChange={(e) => handleDraftChange('industry', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                      placeholder="Fitness, Real Estate…"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Funnel Type</label>
                    <input
                      value={draft.funnelType}
                      onChange={(e) => handleDraftChange('funnelType', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                      placeholder="Lead Gen, Sales Funnel…"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">Live URL</label>
                  <input
                    value={draft.url}
                    onChange={(e) => handleDraftChange('url', e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                    placeholder="https://example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">Preview Image URL</label>
                  <input
                    value={draft.image}
                    onChange={(e) => handleDraftChange('image', e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                    placeholder="https://images.pexels.com/…"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Build Time</label>
                    <input
                      value={draft.buildTime}
                      onChange={(e) => handleDraftChange('buildTime', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                      placeholder="48 hours"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Load Speed</label>
                    <input
                      value={draft.loadSpeed}
                      onChange={(e) => handleDraftChange('loadSpeed', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                      placeholder="1.8s"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Conversion Label</label>
                    <input
                      value={draft.conversionRate}
                      onChange={(e) => handleDraftChange('conversionRate', e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                      placeholder="+67%"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">
                    Tech stack (comma separated)
                  </label>
                  <input
                    value={draft.techStack.join(', ')}
                    onChange={(e) => handleDraftChange('techStack', e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500"
                    placeholder="HTML5, CSS3, JavaScript"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">Short description</label>
                  <textarea
                    value={draft.description}
                    onChange={(e) => handleDraftChange('description', e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus-border-transparent placeholder-text-slate-500 min-h-[72px]"
                    placeholder="High-converting landing page with booking or application flow."
                  />
                </div>

                {error && (
                  <div className="flex items-center justify-between bg-red-500/10 border border-red-500/40 text-red-200 text-xs px-3 py-2 rounded-lg">
                    <span>{error}</span>
                    <button
                      type="button"
                      className="p-1 hover:bg-red-500/20 rounded"
                      onClick={() => setError('')}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-sm font-semibold text-slate-950 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add to session list
                  </button>
                  <button
                    type="button"
                    onClick={resetDraft}
                    className="text-[11px] text-slate-400 hover:text-slate-200 underline underline-offset-4"
                  >
                    Clear form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adminpannel;

