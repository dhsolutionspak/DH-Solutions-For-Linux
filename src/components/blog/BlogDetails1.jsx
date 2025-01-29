// File: components/blog/BlogDetails1.jsx

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

// 1. Import ReactMarkdown
import ReactMarkdown from "react-markdown";

const BlogDetails1 = ({ blog }) => {
  const wordAnim = useRef();
  const wordAnim2 = useRef();

  useEffect(() => {
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);

  if (!blog) return null;

  return (
    <section className="blog__detail">
      <div className="container g-0 line pt-140">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
            <div className="blog__detail-top">
              <h2
                className="blog__detail-date animation__word_come"
                ref={wordAnim}
              >
                {blog.category} <span>{blog.detailDate}</span>
              </h2>
              <h3
                className="blog__detail-title animation__word_come"
                ref={wordAnim2}
              >
                {blog.detailTitle}
              </h3>
              <div className="blog__detail-metalist">
                <div className="blog__detail-meta">
                  <Image
                    priority
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={blog.authorImage}
                    alt="Author Picture"
                  />
                  <p>
                    Written by <span>{blog.authorName}</span>
                  </p>
                </div>
                <div className="blog__detail-meta">
                  <p>
                    Viewed <span>{blog.readTime}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* First image */}
          <div className="col-xxl-12">
            <div className="blog__detail-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={blog.detailImage1}
                alt="Blog Thumbnail"
                data-speed="0.5"
              />
            </div>
          </div>

          <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
            <div className="blog__detail-content">
              {/* 2. Use ReactMarkdown to render each paragraph as Markdown */}
              {blog.content.map((paragraph, idx) => (
                <ReactMarkdown key={idx}>{paragraph}</ReactMarkdown>
              ))}

              {/* Second image */}
              <Image
                priority
                width={850}
                style={{ height: "auto" }}
                src={blog.detailImage2}
                alt="Blog Image"
              />
            </div>
            {blog.content1.map((paragraph, idx) => (
              <ReactMarkdown key={idx}>{paragraph}</ReactMarkdown>
            ))}

            <div className="blog__detail-tags">
              <p className="sub-title-anim">
                tags:{" "}
                {blog.tags.map((tag, idx) => (
                  <Link href="/blog" key={idx}>
                    {tag}
                    {idx < blog.tags.length - 1 ? ", " : ""}
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails1;
