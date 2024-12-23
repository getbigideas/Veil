import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <>
      <nav className="fixed w-full flex  text-white box-border py-8 bg-[rgba(22, 22, 28, .4)] z-10 backdrop-blur-md border-b border-b-[#343445]">
        <div className="px-36 flex-1 w-full">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center order-1 lg:order-1 w-auto pr-3">
              <a href="/" className="flex items-center text-2xl font-bold">
                <img
                  alt="Veil Brand Icon"
                  loading="lazy"
                  src={Logo}
                  className="mr-2 w-[73px] h-[40px]"
                />
                Veil
              </a>
            </div>

            <div className="hidden lg:flex flex-grow justify-center order-4 lg:order-2">
              <ul className="gap-3 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-6">
                <li>
                  <a href="/" className="hover:text-purple-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#exchange"
                    className="hover:text-purple-400 transition block lg:hidden"
                  >
                    Exchange
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="hover:text-purple-400 transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/token" className="hover:text-purple-400 transition">
                    Utility Token
                  </a>
                </li>
                <li>
                  <a
                    href="/revenue-share"
                    className="hover:text-purple-400 transition"
                  >
                    Revenue Share
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.veil.exchange/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition"
                  >
                    How to use
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden sm:flex justify-end items-center order-2 lg:order-3">
              <a
                href="/#exchange"
                className="bg-[#6354b8] hover:bg-[#6c58da] text-white font-bold px-6 py-4 rounded-lg flex items-center transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <g
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                  >
                    <polyline points="7.929 18.659 2.237 17.073 2.966 22.87"></polyline>
                    <path
                      d="M23,12A11,11,0,0,1,2.237,17.073"
                      strokeLinecap="butt"
                    ></path>
                    <polyline points="16.071 5.341 21.763 6.927 21.034 1.13"></polyline>
                    <path
                      d="M1,12A11,11,0,0,1,21.763,6.927"
                      strokeLinecap="butt"
                    ></path>
                  </g>
                </svg>
                Exchange
              </a>
            </div>

            <div className="flex items-center justify-end order-3 lg:order-4">
              <button
                aria-controls="navbarMobile"
                aria-label="Toggle navigation"
                className="lg:hidden p-2 rounded-md border border-gray-700"
              >
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
