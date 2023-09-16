import content from "@/utils/content.json";
import { headers } from "next/headers";
import type { FC } from "react";

export const generateStaticParams = () => {
  return Object.keys(content).map((slug) => ({
    slug: slug.split("/"),
  }));
};

const getData = (slug: string[]) => {
  const path = slug.join("/") as keyof typeof content;
  return content[path] || "coming soon";
};

type DocsPageFC = FC<{ params: { slug: string[] } }>;

const DocsPage: DocsPageFC = ({ params }) => {
  const data = getData(params.slug || []);
  const headersList = headers();
  console.log("🚀 ~ file: page.tsx:22 ~ headersList.get(host):", headersList.get("host"));
  return (
    <div>
      <h1 className="text-3xl">docs page</h1>
      <div>
        <p className="text-xl">{data}</p>
      </div>
    </div>
  );
};

export default DocsPage;
