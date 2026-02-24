import { useState } from "react";

const DashboardSettings = () => {
  const [name, setName] = useState("Elena Vasquez");
  const [bio, setBio] = useState("Principal Engineer writing about distributed systems.");

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
            alt="Avatar"
            className="h-16 w-16 rounded-full object-cover"
          />
          <button className="rounded-md border border-border px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
            Change avatar
          </button>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Full name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-border bg-background p-3 text-sm outline-none focus:border-primary resize-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Email</label>
          <input
            type="email"
            defaultValue="elena@readtech.io"
            className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Role</label>
          <input
            type="text"
            defaultValue="Principal Engineer"
            className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default DashboardSettings;
