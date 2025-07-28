import { useEffect, useState } from "react";
import { applyStoredTheme } from "../utils/theme";

function Profile() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  const handleChange = (e) => {
    const selected = e.target.value;
    setTheme(selected);
  };

  const handleSave = () => {
    localStorage.setItem("theme", theme);
    applyStoredTheme();
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
      <label className="block mb-2">Theme</label>
      <select
        value={theme}
        onChange={handleChange}
        className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <button
        onClick={handleSave}
        className="cursor-pointer mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Save Changes
      </button>
    </div>
  );
}

export default Profile;
