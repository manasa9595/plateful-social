import { CUISINE_OPTIONS } from "../constants/filters";

function SearchBar({
  searchQuery,
  onSearchChange,
  filterCuisine,
  onCuisineChange,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
      <input
        type="text"
        placeholder="Search restaurants..."
        className="w-full md:w-64 px-3 py-2 rounded border dark:bg-gray-800 dark:text-white dark:border-gray-700"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        className="w-full md:w-48 px-3 py-2 rounded border dark:bg-gray-800 dark:text-white dark:border-gray-700"
        value={filterCuisine}
        onChange={(e) => onCuisineChange(e.target.value)}
      >
        <option value="">All Cuisines</option>
        {CUISINE_OPTIONS.map((cuisine) => (
          <option key={cuisine} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
