"use client";
import { INavbar, ILayout, IFooter, IDrawer } from "../types/Layout";
import GlobalProvider from "./lib/Context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

export const Layout = ({
  menu,
  children,
  navbar,
  footer,
  drawer,
  onMobileDrawer,
}: ILayout<INavbar, IFooter, IDrawer>) => {
  return (
    <GlobalProvider>
      {onMobileDrawer ? (
        <Drawer color={drawer.color} menu={drawer.menu} />
      ) : null}
      <Navbar color={navbar.color} data={menu} />
      <div className="flex justify-center bg-gray-200">
        <div
          style={{
            backgroundColor: "white",
          }}
          className="justify-center md:max-w-2xl lg:max-w-4xl xl:max-w-7xl w-full h-fit flex flex-col items-stretch grow flex-shrink-0 gap-x-4 md:p-2 py-2"
        >
          {children}
        </div>
      </div>
      <Footer color={footer.color} />
    </GlobalProvider>
  );
};
