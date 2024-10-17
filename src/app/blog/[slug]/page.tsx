import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export default async function Post({ params }: { params: { slug: string } }) {
  const filePath = path.join(
    process.cwd(),
    "src/app/blog/posts",
    `${params.slug}.mdx`
  );
  const fileContent = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description || "A blog post"} />
        <meta property="og:title" content={data.title} />
        <meta
          property="og:description"
          content={data.description || "A blog post"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/blog/${params.slug}`}
        />
        <meta
          property="og:image"
          content={data.image || "/default-image.jpg"}
        />
      </Head>
      <article className="grow w-full max-w-2xl container mx-auto font-[family-name:var(--font-spectral)] px-3 pb-10">
        <h1 className="font-[family-name:var(--font-roboto-mono)] text-4xl text-black mb-2">
          {data.title}
        </h1>
        <p className="text-sm text-gray-500 font-[family-name:var(--font-roboto-mono)] mb-6">
          {data.date}
        </p>
        <div className="sm:px-7 pt-10 text-black bg-white">
          <MDXRemote
            source={content}
            components={{
              h1: (props) => (
                <h1
                  className="font-[family-name:var(--font-roboto-mono)] text-4xl font-semibold tracking-tight mt-6 mb-2"
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  className="font-[family-name:var(--font-roboto-mono)] text-2xl font-semibold tracking-tight mt-6 mb-2"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="font-[family-name:var(--font-roboto-mono)] text-xl font-semibold tracking-tight mt-6 mb-2"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="my-4 text-neutral-800 dark:text-neutral-200 leading-relaxed"
                  {...props}
                />
              ),
              a: (props) => (
                <a
                  className="underline transition-all decoration-neutral-400 dark:decoration-neutral-600 hover:underline"
                  {...props}
                />
              ),
              blockquote: (props) => (
                <blockquote
                  className="border-l-4 border-neutral-500 pl-4 italic text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 p-2 my-4 rounded"
                  {...props}
                />
              ),
              code: (props) => (
                <code
                  className="bg-neutral-200 dark:bg-neutral-800 text-red-600 p-1 rounded"
                  {...props}
                />
              ),
              pre: (props) => (
                <pre
                  className="bg-neutral-900 text-gray-100 p-4 rounded my-4 overflow-x-auto"
                  {...props}
                />
              ),
              ul: (props) => <ul className="list-disc pl-6 my-2" {...props} />,
              ol: (props) => (
                <ol className="list-decimal pl-6 my-2" {...props} />
              ),
              li: (props) => <li className="my-1" {...props} />,
            }}
          />
        </div>
      </article>
    </>
  );
}
