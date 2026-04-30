import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-full relative bg-[#030814]">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-[#0b1b33]">
        <Sidebar />
      </div>
      <main className="md:pl-72 min-h-screen bg-[#030814]">
        <Navbar />
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
