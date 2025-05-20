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
      <section className='flex flex-col min-h-[1750px] mt-20 pb-20'>
        <div className='flex flex-col items-center justify-center w-full '>
          <div className='relative w-full h-dvh'>
            <Image
              src={blog?.image || "/placeholder.png"}
              alt={blog?.title || "Blog Image"}
              width={500}
              height={300}
              className='w-full h-full object-cover'
            />
            <div className='absolute max-h-[1250px] top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-4 w-11/12 md:w-10/12 lg:w-9/12 p-4 py-20 dark:border-primary dark:border rounded-lg shadow-lg backdrop-blur-xl bg-white/40 dark:bg-secondary/40 overflow-y-auto scroll'>
              <h1 className=' text-3xl font-bold text-center'>{blog?.title}</h1>
              <h3 className='text-xs font-bold self-end p-1 mt-4 bg-primary rounded-lg shadow text-white'>
                {blog?.date}
              </h3>
              <div
                className='text-base text-left w-5/8 flex flex-col space-y-8'
                dangerouslySetInnerHTML={{
                  __html: blog?.description || "<p>No blogs found</p>",
                }}
              ></div>
              <p className='text-sm italic self-start'>By {blog?.author}</p>
            </div>
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
