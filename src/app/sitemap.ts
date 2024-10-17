import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Parses frontmatter in MDX files

export const baseUrl = 'https://vkcreations.vercel.app';

// Path to the blog posts directory
const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');

// Function to get all blog post data dynamically
async function getBlogPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const blogPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, ''); // Remove .mdx to get the slug
    const fullPath = path.join(postsDirectory, fileName);

    // Read file contents and extract frontmatter
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: metadata } = matter(fileContents); // Extract metadata (frontmatter)

    return {
      slug,
      metadata: {
        publishedAt: metadata.publishedAt || new Date().toISOString(), // Default to current date if not specified
      },
    };
  });

  return blogPosts;
}

export default async function sitemap() {
  const blogPosts = await getBlogPosts(); // Dynamically fetch blog posts

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const staticRoutes = [
    { route: '', }, // Home page
    { route: '/blog', }, // Blog listing page
    { route: '/about', }, // About page
  ].map(({ route }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...staticRoutes, ...blogRoutes];
}
