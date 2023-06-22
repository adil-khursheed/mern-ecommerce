import { StarIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const AdminProductGrid = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/product-detail/${product.id}`}>
                <div className="group relative border-solid border-2 border-gray-200 rounded-md p-2">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <div>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </div>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 flex items-center gap-1">
                        <StarIcon className="w-4 h-4" />
                        <span className="mt-[2px]">{product.rating}</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm font-medium text-gray-900">
                        $
                        {Math.round(
                          product.price * (1 - product.discountPercentage / 100)
                        )}
                      </p>
                      <p className="text-sm font-medium text-gray-400 line-through">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 mt-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Edit Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProductGrid;