export default function AdminPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 font-display">
      <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
      <p className="mt-4 text-slate-700">Welcome to the administration area.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
          <p className="mt-2 text-sm text-slate-600">Site metrics and quick stats.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Content</h2>
          <p className="mt-2 text-sm text-slate-600">Manage pages and posts.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Users</h2>
          <p className="mt-2 text-sm text-slate-600">Manage team access.</p>
        </div>
      </div>
    </section>
  );
}
