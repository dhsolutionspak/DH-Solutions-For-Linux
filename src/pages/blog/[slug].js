// pages/blog/[slug].js

import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import { blogData } from "@/data/BlogsData";
import BlogRelated from "@/components/blog/BlogRelated";

export async function getStaticPaths() {
  const paths = blogData.map((blog) => ({
    params: { slug: blog.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = blogData.find((item) => item.slug === params.slug);

  if (!blog) {
    return { notFound: true };
  }

  // Example: related blogs by the same category
  const related = blogData.filter(
    (b) => b.slug !== blog.slug && b.category === blog.category
  );

  return {
    props: { blog, related },
  };
}

export default function BlogDetailPage({ blog, related }) {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={`Details about ${blog.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3">
          <BlogDetails1 blog={blog} />
          <BlogRelated relatedPosts={related} />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
}
