import { blog } from "@/types/blogs";
import Link from "next/link";

export const BlogCard = (props: blog) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full p-4 bg-[url(${props.image})] bg-cover bg-center bg-no-repeat rounded-lg shadow-md`}
    >
      <h3 className='text-lg font-bold text-white'>{props.date}</h3>
      <h2 className='text-2xl font-bold text-gray-800'>{props.title}</h2>
      <p className='mt-2 text-gray-600'>{props.description}</p>
      <Link href={`\blogs\${props.id}`}>Read more</Link>
    </div>
  );
};
