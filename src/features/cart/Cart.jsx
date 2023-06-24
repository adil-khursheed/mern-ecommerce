import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteItemFromCartAsync,
  selectCartItems,
  updateCartAsync,
} from "./cartSlice";
import { discountedPrice } from "../../app/constants";

const Cart = () => {
  const products = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const totalAmount = products.reduce(
    (amount, item) => discountedPrice(item) * item.quantity + amount,
    0
  );
  const totalItems = products.reduce((total, item) => item.quantity + total, 0);

  const handleQuantity = (e, product) => {
    dispatch(updateCartAsync({ ...product, quantity: +e.target.value }));
  };

  const handleRemove = (e, productId) => {
    dispatch(deleteItemFromCartAsync(productId));
  };

  return (
    <>
      {!products.length ? (
        <div className="flex justify-center items-center h-screen w-full">
          <div className="flex flex-col gap-5 justify-center items-center bg-white h-52 p-10 rounded-sm">
            <h3 className="text-gray-400 text-3xl">No items added!</h3>
            <div className=" flex justify-center text-center text-sm text-gray-500">
              <Link to={"/"}>
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-auto max-w-7xl mt-8 bg-white px-4 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-6">
              <h2 className="text-2xl pb-4 tracking-tight text-gray-900 font-bold">
                Cart
              </h2>
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.title}</a>
                            </h3>
                            <p className="ml-4">${discountedPrice(product)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            Qty
                            <select
                              onChange={(e) => handleQuantity(e, product)}
                              value={product.quantity}
                              className="ml-2 cursor-pointer">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
                              onClick={(e) => handleRemove(e, product.id)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${totalAmount}</p>
              </div>
              <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                <p>Total Items in Cart</p>
                <p>{totalItems} items</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="mt-6 w-full">
                <Link
                  to={"/checkout"}
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                  Checkout
                </Link>
              </button>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p className="flex flex-col gap-3">
                  OR{" "}
                  <Link to={"/"}>
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
