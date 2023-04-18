import Link from "next/link";
import { INavbar, ILayout, IFooter, IDrawer } from "../types/Layout";
import GlobalProvider from "./lib/Context";
export const Layout = ({
  children,
  navbar,
  footer,
  drawer,
  onMobileDrawer,
}: ILayout<INavbar, IFooter, IDrawer>) => {
  return (
    <>
      <GlobalProvider>
        {onMobileDrawer ? (
          <Drawer color={drawer.color} menu={drawer.menu} />
        ) : null}
        <Navbar color={navbar.color} />
        <div className="flex justify-center bg-gray-200">
          <div
            style={{
              backgroundColor: "white",
            }}
            className="justify-center md:max-w-2xl lg:max-w-4xl xl:max-w-7xl w-screen h-fit flex flex-col items-stretch grow flex-shrink-0 gap-x-4 md:p-2 py-2"
          >
            {children}
          </div>
        </div>
        <Footer color={footer.color} />
      </GlobalProvider>
    </>
  );
};

export const Navbar = ({ color }: INavbar) => {
  return (
    <div
      className="navbar bg-base-100 sticky top-0"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={""}>Item 1</Link>
            </li>
            <li tabIndex={0}>
              <Link href={""} className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link href={""}>Submenu 1</Link>
                </li>
                <li>
                  <Link href={""}>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={""}>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link
          href={""}
          className="btn btn-ghost normal-case text-xl hidden md:hidden lg:flex justify-center items-center"
        >
          SquareMeter
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={""}>Item 1</Link>
          </li>
          <li tabIndex={0}>
            <Link href={""}>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2">
              <li>
                <Link href={""}>Submenu 1</Link>
              </li>
              <li>
                <Link href={""}>Submenu 2</Link>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <Link href={""}>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-black">
              <li>
                <Link href={""}>Submenu 1</Link>
              </li>
              <li>
                <Link href={""}>Submenu 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={""}>Item 3</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={""} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export const Footer = ({ color }: IFooter) => {
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

export const Drawer = ({ color, menu }: IDrawer) => {
  return (
    <div className="drawer fixed z-10 lg:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content absolute top-2 left-2">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul
          className="menu p-4 w-80 text-base-content gap-4"
          style={{
            backgroundColor: color,
          }}
        >
          {/* @ts-ignore */}
          {menu?.length > 0 &&
            menu?.map((r, i) => {
              return (
                <Link key={i} href={"google"}>
                  {r.label}
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
