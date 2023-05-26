export interface ITable {
  data?: {}[];
  dataTotal?: number;
  flatlist?: (f: any) => void;

  hasHeader?: JSX.Element | JSX.Element[];
  hasFooter?: JSX.Element | JSX.Element[];

  isHightlightOnHover?: boolean;
  isPending?: boolean;

  onChangePage?: (p: number) => void;
}
