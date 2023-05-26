import { Table } from "ui";
import { Suspense } from "react";
import Loading from "./loading";

const columns = [
  {
    name: "TYPE",
    cell: (row: any) => (
      <div className="flex">
        <p>{row._id}</p>
      </div>
    ),
  },
  {
    name: "HEADLINE",
    cell: (row: any) => (
      <div className="flex flex-col">
        <p className="text-md font-bold text-gray-700">{row.headLine}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: `${row.description}`,
          }}
        ></p>
      </div>
    ),
  },
  {
    name: "CREATED AT",
    cell: (row: any) => <div className="flex flex-col">ppp</div>,
  },
  {
    name: "LAST UPDATE",
    cell: (row: any) => <div className="flex flex-col">ppp</div>,
  },
];

export default async function Home() {
  const project = await fetch("https://api-demo.rea.geonet.me/api/projects", {
    headers: {
      token: "MvrnxC9rtxPqH9mfmgDSBBaIm552",
    },
  });

  const result = await project.json();

  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <Table columns={columns} data={result.data} />
      </Suspense>
    </div>
  );
}
