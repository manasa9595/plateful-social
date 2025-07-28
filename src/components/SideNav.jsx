import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../constants/navigation";

function SideNav() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem("sidebar-collapsed") === "true";
  });

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed);
  }, [collapsed]);

  return (
    <aside
      className={`transition-all duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-64"
      }  dark:bg-gray-800 border-r dark:border-gray-700 shadow-sm hidden md:flex flex-col`}
    >
      <div className="p-4 flex justify-between items-center">
        <span className="text-lg font-bold text-gray-700 dark:text-gray-100 truncate">
          {!collapsed ? "Menu" : "M"}
        </span>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm"
        >
          {collapsed ? "➤" : "◀"}
        </button>
      </div>
      <nav className="flex-1 px-2 space-y-2 text-sm">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              if (href === "#") e.preventDefault();
            }}
            title={label}
            className={`flex items-center gap-3 px-3 py-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              location.pathname === href ? "bg-gray-100 dark:bg-gray-700" : ""
            }`}
          >
            <Icon className="h-5 w-5" />
            {!collapsed && <span>{label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default SideNav;
