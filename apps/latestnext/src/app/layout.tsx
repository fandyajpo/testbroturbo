import "../../styles/global.css";
import { Layout } from "ui";
import { cookies } from "next/headers";

const fetcher = async () => {
  const a = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = await a.json();
  return result;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetcher();

  return (
    <html lang="en">
      <body>
        <Layout
          menu={data}
          onMobileDrawer={true}
          drawer={{
            color: "gray",
            menu: [
              { label: "Hai", route: "hai" },
              { label: "Hai", route: "hai" },
            ],
          }}
          navbar={{
            color: "gray",
          }}
          footer={{
            color: "gray",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
