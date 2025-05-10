import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";
// get the blog id from the url - next js server side
export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const blogParentVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const blogChildVarient = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const blogId = (await params).id;
  // find the blog with the id
  const blog = blogs.find((blog) => blog.id === blogId);
  // if blog is not found, redirect to the home page using next js

  if (!blog) {
    notFound();
  } else
    return (
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <h1 className='text-3xl font-bold'>{blog?.title}</h1>
          <Image
            src={blog?.image || "/placeholder.png"}
            alt={blog?.title || "Blog Image"}
            width={500}
            height={300}
            className='w-full h-auto'
          />
          <p className='text-lg'>{blog?.description}</p>
          <p className='text-sm text-gray-500'>
            By {blog?.author} on {blog?.date}
          </p>
        </div>
        {/* display the other blogs in a grid of 3 cols */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 space-y-8 w-full align-center justify-items-center'>
            {blogs.map((blog, index) => (
              // load only 3 blogs if the showAllBlogs set to false and if it's true show all the blogs

              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    );
}
