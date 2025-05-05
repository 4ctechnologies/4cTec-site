import { testimonialCards } from "@/types/testimonials";
import Image from "next/image";

export default function TestimonialCard(props: testimonialCards) {
  return (
    <div className='flex flex-col items-start justify-between space-y-4 p-4 bg-white rounded-lg shadow-md'>
      <Image
        src={props.image}
        alt='Testimonial'
        width={100}
        height={100}
        className='rounded-full mb-4 w-10 h-10 object-cover'
      ></Image>
      <p className='font-semibold text-sm'>
        &quot;
        {props.description}
        &quot;
      </p>
      <h3 className='text-xs'>{props.name}</h3>
    </div>
  );
}
