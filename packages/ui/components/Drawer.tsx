import Link from "next/link";
import { IDrawer } from "../../types/Layout";

const Drawer = ({ color, menu }: IDrawer) => {
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

export default Drawer;
