export interface INavbar {
  data: any;
  color?: string;
}

export interface IFooter {
  color?: string;
}

export interface IDrawerMenu {
  label: string;
  route: string;
}

export interface IDrawer {
  color?: string;
  menu?: IDrawerMenu[];
}

export interface ILayout<R, F, N> {
  menu: any;
  children: React.ReactNode;
  navbar: R;
  footer: F;
  drawer: N;
  drawerComponent?: JSX.Element;
  onMobileDrawer?: boolean;
}
