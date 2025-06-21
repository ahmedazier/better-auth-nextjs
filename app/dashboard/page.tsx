import { Logout } from "@/components/logout";
import { session, user } from "@/db/schema";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-6">Welcome to your dashboard!</p>
      <p className="text-sm text-gray-500 mb-4">
        This is a protected route. You must be logged in to view this page.
      </p>
      <p className="text-sm text-gray-500 mb-4">
        If you see this message, you are successfully authenticated.
      </p>
      {/* Replace the following line with actual user data from your authentication context or session */}
      <p className="text-sm text-gray-500 mb-4">
        User ID: {/* Replace with actual user name, e.g., user?.name or similar */}
        {"Not available"}
      </p>
      <Logout />
    </div>
  );
}
