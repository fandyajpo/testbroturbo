import { IFooter } from "../../types/Layout";
import Link from "next/link";
const Footer = ({ color }: IFooter) => {
  return (
    <div
      className="flex justify-center py-14"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="justify-center md:max-w-2xl lg:max-w-4xl xl:max-w-7xl w-screen h-fit flex flex-col items-stretch grow flex-shrink-0 gap-x-4 md:p-2 py-2">
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-7">
          <div>
            <p className="font-medium tracking-wide text-gray-800">Category</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  World
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  References
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium tracking-wide text-gray-800">Apples</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Web
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  eCommerce
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium tracking-wide text-gray-800">Cherry</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Brochure
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Nonprofit
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Educational
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium tracking-wide text-gray-800">Business</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Infopreneur
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Wiki
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Forum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium tracking-wide text-gray-800">Business</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Infopreneur
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Wiki
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Forum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium tracking-wide text-gray-800">Business</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Infopreneur
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Wiki
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-deep-purple-accent-200"
                >
                  Forum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
