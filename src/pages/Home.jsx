// === frontend/src/pages/Home.jsx ===
import { useEffect, useState, useMemo } from "react";
import { getRestaurants } from "../services/api";
import RestaurantCard from "../components/RestaurantCard";
import { CUISINE_OPTIONS, ITEMS_PER_PAGE } from "../constants/filters";
import SearchBar from "../components/SearchBar";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCuisine, setFilterCuisine] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    getRestaurants()
      .then(setRestaurants)
      .finally(() => setLoading(false));
  }, []);

  const filteredRestaurants = useMemo(() => {
    let result = restaurants.filter((r) => {
      const matchesSearch =
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCuisine = filterCuisine ? r.cuisine === filterCuisine : true;
      return matchesSearch && matchesCuisine;
    });

    if (sortOrder === "rating-desc") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === "rating-asc") {
      result = [...result].sort((a, b) => a.rating - b.rating);
    }

    return result;
  }, [restaurants, searchQuery, filterCuisine, sortOrder]);

  const totalPages = Math.ceil(filteredRestaurants.length / ITEMS_PER_PAGE);
  const paginatedRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-white dark:bg-gray-900">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-4 py-6">
      <div className="flex justify-between items-center">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterCuisine={filterCuisine}
          onCuisineChange={setFilterCuisine}
        />

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
            Sort by Rating:
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-2 py-1 rounded border dark:bg-gray-800 dark:text-white dark:border-gray-700"
          >
            <option value="none">None</option>
            <option value="rating-desc">Highest to Lowest</option>
            <option value="rating-asc">Lowest to Highest</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {paginatedRestaurants.map((r) => (
          <RestaurantCard key={r._id} data={r} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded transition-colors ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
