function RestaurantCard({ data }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
      <img
        src={data.imageUrl}
        alt={data.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-gray-100">
        {data.name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {data.cuisine} • {data.location}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-1">
        ⭐ {data.rating} / 5
      </p>
    </div>
  );
}

export default RestaurantCard;
