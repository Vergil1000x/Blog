import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const filenames = fs.readdirSync(postsDirectory);

  return (
    <section className="grow max-w-2xl container mx-auto font-[family-name:var(--font-spectral)] flex flex-col gap-2">
      <h1 className="font-[family-name:var(--font-roboto-mono)] text-4xl px-3">
        Blogs
      </h1>
      <ul className="sm:pr-7 pt-8 sm:pl-20 px-5">
        {filenames.map((filename) => {
          const slug = filename.replace(".mdx", "");
          const filePath = path.join(postsDirectory, filename);
          const fileContent = fs.readFileSync(filePath, "utf8");
          const { data } = matter(fileContent); // Extract metadata using gray-matter

          return (
            <li key={slug} className="pt-4 pb-2">
              <div className="flex gap-2 items-center font-[family-name:var(--font-roboto-mono)]">
                <Link
                  href={`/blog/${slug}`}
                  className="text-gray-700 text-xl hover:text-black hua "
                >
                  {data.title}
                </Link>
                <div>|</div>
                <p className="text-gray-600 text-sm">{data.date}</p>
              </div>
              <p className="text-gray-800 px-3">{data.summary}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
