"use client";

import { useState, useEffect } from "react";
import { 
  Bell, UserPlus, FileText, Mail, Check, Trash2, Loader2, Inbox, 
  Briefcase, Users, FilePlus, AlertCircle
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const response = await fetch("/api/notifications");
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    
    // Polling for live updates every 30 seconds
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  const markAsRead = async (id, all = false) => {
    try {
      const response = await fetch("/api/notifications", {
        method: "PATCH",
        body: JSON.stringify({ id, all })
      });
      
      if (!response.ok) throw new Error("Failed to mark as read");

      if (all) {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
      } else {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
      }
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const deleteNotification = async (id, all = false) => {
    try {
      const url = all ? "/api/notifications?all=true" : `/api/notifications?id=${id}`;
      const response = await fetch(url, { method: "DELETE" });
      
      if (!response.ok) throw new Error("Failed to delete");

      if (all) {
        setNotifications([]);
      } else {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  if (loading) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 text-sky-500 animate-spin" />
        <p className="text-zinc-500 font-bold animate-pulse">Checking for updates...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Notification Center</h2>
          <p className="text-zinc-400">Stay updated with the latest activity on your site.</p>
        </div>
        <div className="flex items-center gap-x-4">
          <button 
            onClick={() => markAsRead(null, true)}
            className="text-sm text-sky-500 hover:text-sky-400 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!notifications.some(n => !n.read)}
          >
            Mark all as read
          </button>
          <button 
            onClick={() => {
              if (confirm("Are you sure you want to clear all notifications?")) {
                deleteNotification(null, true);
              }
            }}
            className="text-sm text-red-500 hover:text-red-400 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={notifications.length === 0}
          >
            Clear all
          </button>
        </div>
      </div>

      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-[#0b1b33] border border-white/10 rounded-2xl">
          <div className="p-4 bg-white/5 rounded-full mb-4">
            <Inbox className="h-12 w-12 text-zinc-600" />
          </div>
          <h3 className="text-lg font-bold text-white">All caught up!</h3>
          <p className="text-zinc-500">No new notifications at the moment.</p>
        </div>
      ) : (
        <div className="bg-[#0b1b33] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="divide-y divide-white/10">
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`p-6 flex items-start justify-between hover:bg-white/5 transition group ${!notif.read ? 'bg-sky-500/[0.03]' : ''}`}
              >
                <div className="flex items-start gap-x-4">
                  <div className={`p-3 rounded-xl ${
                    notif.type === 'JOB_APPLICATION' ? 'bg-violet-500/10 text-violet-500' :
                    notif.type === 'FORM_SUBMISSION' ? 'bg-sky-500/10 text-sky-500' :
                    notif.type === 'JOB_POSTED' ? 'bg-emerald-500/10 text-emerald-500' :
                    notif.type === 'TEAM_MEMBER_ADDED' ? 'bg-blue-500/10 text-blue-500' :
                    notif.type === 'RESOURCE_ADDED' ? 'bg-orange-500/10 text-orange-500' :
                    'bg-zinc-500/10 text-zinc-500'
                  }`}>
                    {notif.type === 'JOB_APPLICATION' ? <UserPlus className="h-5 w-5" /> :
                     notif.type === 'FORM_SUBMISSION' ? <FileText className="h-5 w-5" /> :
                     notif.type === 'JOB_POSTED' ? <Briefcase className="h-5 w-5" /> :
                     notif.type === 'TEAM_MEMBER_ADDED' ? <Users className="h-5 w-5" /> :
                     notif.type === 'RESOURCE_ADDED' ? <FilePlus className="h-5 w-5" /> :
                     <AlertCircle className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-x-2">
                      <h3 className={`text-sm font-bold ${notif.read ? 'text-zinc-300' : 'text-white'}`}>{notif.title}</h3>
                      {!notif.read && <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />}
                    </div>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed max-w-2xl">
                      {notif.message}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-600 mt-3 font-bold">
                      {formatDistanceToNow(new Date(notif.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-x-1 opacity-0 group-hover:opacity-100 transition duration-200">
                  {!notif.read && (
                    <button 
                      onClick={() => markAsRead(notif.id)}
                      className="p-2.5 hover:bg-white/10 rounded-xl text-zinc-400 hover:text-emerald-500 transition shadow-sm" 
                      title="Mark as read"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                  )}
                  <button 
                    onClick={() => deleteNotification(notif.id)}
                    className="p-2.5 hover:bg-white/10 rounded-xl text-zinc-400 hover:text-red-500 transition shadow-sm" 
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
