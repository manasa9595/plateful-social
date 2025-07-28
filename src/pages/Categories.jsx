import { categories } from "../data/mockCategories";

function Categories() {
  return (
    <div>
      <nav className="text-sm mb-4 text-gray-600 dark:text-gray-400">
        <ol className="list-reset flex">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-900 dark:text-gray-200">Categories</li>
        </ol>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Categories;
