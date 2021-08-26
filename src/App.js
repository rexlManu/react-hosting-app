/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return (
    <div className="w-full h-full bg-gray-200">
      <div className="flex flex-row items-center justify-between px-8 py-4 bg-white">
        <div className="flex flex-row space-x-1 text-xl font-bold text-blue-500 items-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <h1>sheeld</h1>
        </div>
        <div className="flex-row hidden space-x-1 text-sm md:flex">
          <a
            href="#"
            className="px-6 py-2 text-gray-900 bg-gray-100 rounded-xl"
          >
            Dashboard
          </a>
          <a href="#" className="px-6 py-2 text-gray-400">
            Marketplace
          </a>
          <a href="#" className="px-6 py-2 text-gray-400">
            Hosting
          </a>
          <a href="#" className="px-6 py-2 text-gray-400">
            Domains
          </a>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <svg
              xsvgmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          </div>
          <div>
            <img
              className="w-6 h-6 rounded-full"
              src="https://images.unsplash.com/photo-1614460132343-62aa9fa8d6f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-4 pb-20 overflow-x-hidden md:px-4">
        <div className="flex flex-col justify-between my-6 md:flex-row md:w-5/6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Hello Martin!</h2>
            <p className="mt-2 text-sm text-gray-500">
              Welcome to your overview of your account.
            </p>
          </div>
          <div className="flex flex-col items-start mt-4 space-y-4 md:space-y-0 md:items-center md:space-x-6 md:flex-row md:mt-0">
            <button className="flex flex-row items-center px-6 py-3 text-sm font-semibold text-gray-500 bg-white shadow-lg rounded-xl">
              Select Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="px-6 py-3 text-sm font-semibold text-white shadow-xl bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl">
              Launch cPanel
            </button>
          </div>
        </div>
        <div className="w-full my-4 md:w-5/6">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">My Products</h3>
            <a href="#" className="flex items-center text-sm text-gray-500">
              View All Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col grid-cols-4 mt-6 space-y-8 md:space-y-0 md:space-x-8 md:flex-row ">
            <div className="flex-grow-0 bg-white shadow-xl md:w-1/4 rounded-3xl">
              <img
                className="object-cover w-full h-32 rounded-t-3xl"
                src="https://images.unsplash.com/photo-1616812757130-aca5451b0243?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div className="px-6 py-4">
                <span className="text-sm text-gray-500">
                  mywebsite.com
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-flex w-5 h-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <h4 className="text-base font-bold text-gray-900">WordPress</h4>
              </div>
            </div>
            <div className="flex-grow-0 bg-white shadow-xl md:w-1/4 rounded-3xl">
              <img
                className="object-cover w-full h-32 rounded-t-3xl"
                src="https://images.unsplash.com/photo-1616812757130-aca5451b0243?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div className="px-6 py-4">
                <span className="text-sm text-gray-500">
                  mywebsite.com
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-flex w-5 h-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <h4 className="text-base font-bold text-gray-900">Weebly</h4>
              </div>
            </div>
            <div className="flex-grow-0 bg-white shadow-xl md:w-1/4 rounded-3xl">
              <img
                className="object-cover w-full h-32 rounded-t-3xl"
                src="https://images.unsplash.com/photo-1616812757130-aca5451b0243?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div className="px-6 py-4">
                <span className="text-sm text-gray-500">
                  mywebsite.com
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-flex w-5 h-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <h4 className="text-base font-bold text-gray-900">Weebly</h4>
              </div>
            </div>
            <div className="relative flex-grow-0 hidden bg-white shadow-xl md:w-1/4 rounded-3xl">
              <img
                className="absolute object-cover w-full h-full rounded-3xl"
                src="https://images.unsplash.com/photo-1603621760091-d7b12c66549a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=1&w=672&q=80"
                alt=""
              />
              <button className="absolute px-5 py-3 font-bold text-blue-500 bg-white left-20 top-8 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add new
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-4 md:space-x-6 md:flex-row md:w-5/6">
          <div className="md:w-2/3">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Invoicing</h3>
              <a href="#" className="flex items-center text-sm text-gray-500">
                View All Invoices
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-white shadow-xl rounded-xl">
              <table className="mx-6 my-6 table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/6 pt-4 text-sm font-normal text-left text-gray-500">
                      Invoice#
                    </th>
                    <th className="w-2/6 pt-4 text-sm font-normal text-left text-gray-500">
                      Package
                    </th>
                    <th className="w-2/6 pt-4 text-sm font-normal text-center text-gray-500">
                      Due Date
                    </th>
                    <th className="w-1/6 pt-4 text-sm font-normal text-right text-gray-500">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 text-left">
                      <a href="#" className="text-sm text-blue-600">
                        8234242
                      </a>
                    </td>
                    <td className="py-4 text-left">
                      <span className="text-sm text-gray-900">
                        CS-423423 Cloud Hatchling
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <span className="p-1 text-sm text-red-400 bg-red-100 rounded-xl">
                        2021-04-23
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <span className="text-sm text-gray-900 ">$2.99</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 text-left">
                      <a href="#" className="text-sm text-blue-600">
                        8234242
                      </a>
                    </td>
                    <td className="py-4 text-left">
                      <span className="text-sm text-gray-900">
                        CS-423423 Cloud Hatchling
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <span className="p-1 text-sm text-red-400 bg-red-100 rounded-xl">
                        2021-04-23
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <span className="text-sm text-gray-900 ">$2.99</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 text-left">
                      <a href="#" className="text-sm text-blue-600">
                        8234242
                      </a>
                    </td>
                    <td className="py-4 text-left">
                      <span className="text-sm text-gray-900">
                        CS-423423 Cloud Hatchling
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <span className="p-1 text-sm text-red-400 bg-red-100 rounded-xl">
                        2021-04-23
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <span className="text-sm text-gray-900 ">$2.99</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Websites</h3>
              <a href="#" className="flex items-center text-sm text-gray-500">
                View All Websites
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-white shadow-xl rounded-xl">
              <table className="mx-6 my-6 table-fixed">
                <thead>
                  <tr>
                    <th className="w-3/6 pt-4 text-sm font-normal text-left text-gray-500">
                      Domain name
                    </th>
                    <th className="w-2/6 pt-4 text-sm font-normal text-left text-gray-500">
                      Expiration
                    </th>
                    <th className="w-1/6 pt-4 text-sm font-normal text-right text-gray-500">
                      <span className="w-full"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 text-left">
                      <a href="#" className="text-sm text-blue-600">
                        8234242
                      </a>
                    </td>
                    <td className="py-4 text-left">
                      <span className="text-sm text-gray-900">2021-04-23</span>
                    </td>

                    <td className="py-4 text-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-12 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 text-left">
                      <a href="#" className="text-sm text-blue-600">
                        8234242
                      </a>
                    </td>
                    <td className="py-4 text-left">
                      <span className="text-sm text-gray-900">2021-04-23</span>
                    </td>

                    <td className="py-4 text-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-12 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 text-left">
                      <a href="#" className="text-sm text-blue-600">
                        8234242
                      </a>
                    </td>
                    <td className="py-4 text-left">
                      <span className="text-sm text-gray-900">2021-04-23</span>
                    </td>

                    <td className="py-4 text-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-12 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="md:w-5/6">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">
              Video Guides & Tips
            </h3>
            <a href="#" className="flex items-center text-sm text-gray-500">
              View All Videos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col mt-6 space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            <div className="flex flex-row items-center p-4 space-x-3 bg-white shadow-xl rounded-xl">
              <span className="p-2 bg-red-400 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-sm font-light text-gray-900">
                5 tips to make your site easier to find on Google
              </p>
            </div>
            <div className="flex flex-row items-center p-4 space-x-3 bg-white shadow-xl rounded-xl">
              <span className="p-2 bg-red-400 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-sm font-light text-gray-900">
                5 tips to make your site easier to find on Google
              </p>
            </div>
            <div className="flex flex-row items-center p-4 space-x-3 bg-white shadow-xl rounded-xl">
              <span className="p-2 bg-red-400 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-sm font-light text-gray-900">
                5 tips to make your site easier to find on Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
