import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import Image from "next/image";
export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const blogId = (await params).id;
  // find the blog with the id
  const blog = blogs.find((blog) => blog.id === blogId);
  return (
    <>
      <section className='flex flex-col min-h-lvh py-20'>
        <div className='flex flex-col items-center justify-center w-full '>
          <h1 className='text-3xl font-bold'>{blog?.title}</h1>
          <Image
            src={blog?.image || "/placeholder.png"}
            alt={blog?.title || "Blog Image"}
            width={500}
            height={300}
            className='w-full h-auto'
          />
          <div className='flex flex-col items-center justify-center space-y-4 w-11/12 md:w-10/12 lg:w-9/12 p-4 dark:border-primary dark:border rounded-lg shadow-md mt-[-100px]'>
            <p className='text-lg'>{blog?.description}</p>
            <p className='text-sm text-gray-500'>
              By {blog?.author} on {blog?.date}
            </p>
          </div>
        </div>
      </section>
      {/* display the other blogs in a grid of 3 cols */}
      <section className='flex flex-col items-center justify-center w-full space-y-12'>
        <h1 className='text-3xl font-bold'>Other Blogs</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 space-y-8 w-full align-center justify-items-center'>
          {blogs.map((blog, index) => (
            // load only 3 blogs if the showAllBlogs set to false and if it's true show all the blogs
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </section>
    </>
  );
}
