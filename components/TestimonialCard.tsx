// import { heights } from "@/data/testimonials";
import { testimonialCards } from "@/types/testimonials";
import Image from "next/image";

export default function TestimonialCard(props: testimonialCards) {
  return (
    <div
      className={`flex row-span-2 h-96 flex-col items-start justify-between space-y-4 p-4 border border-primary hover:shadow-sm rounded-xl  shadow-md`}
    >
      <Image
        src={props.image}
        alt='Testimonial'
        width={100}
        height={100}
        className='rounded-full mb-4 w-30 h-30 object-cover'
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
