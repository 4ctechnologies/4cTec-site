import Image from "next/image";
interface TestimonialCardProps {
  image: string;
  description: string;
  name: string;
}

export default function TestimonialCard({
  props,
}: {
  props: TestimonialCardProps;
}) {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md'>
      <Image
        src={props.image}
        alt='Testimonial'
        width={100}
        height={100}
        className='rounded-full mb-4'
      ></Image>
      <p className='text-gray-600'>
        &quot;
        {props.description}
        &quot;
      </p>
      <h3 className='text-lg font-semibold'>{props.name}</h3>
    </div>
  );
}
