import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <div className="dark:bg-gray-900 min-h-screen px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Your Favorite Restaurants
      </h2>

      {favorites.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
          You haven't added any favorites yet.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((r) => (
            <RestaurantCard key={r._id} data={r} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
