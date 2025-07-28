import { Utensils } from "lucide-react";

function TopNav() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-100">
        <Utensils className="mr-2" /> Plateful Social
      </h1>
      <div className="text-sm text-gray-500">Welcome back!</div>
    </header>
  );
}

export default TopNav;
