import { INavbar } from "../../types/Layout";
import Link from "next/link";
import { useCtx } from "../lib/Context";
import { useEffect } from "react";
const Navbar = ({ color, data }: INavbar) => {
  const { state, dispatch } = useCtx();

  useEffect(() => {
    dispatch({
      type: "ID",
      payload: {
        id: data,
      },
    });
  }, []);

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

export default Navbar;
