import Image from "next/image";
import { featureCards } from "@/types/features";
const FeatureCard = ({ image, description }: featureCards) => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 py-8 group'>
      <div className='relative w-full'>
        <Image
          src={image}
          width={200}
          height={200}
          alt={`${description.slice(0, 20)}...`}
          className='w-full h-full object-contain rounded-lg'
        />
        <div className='absolute top-0 rounded-lg left-0 w-full h-full bg-secondary/50 group-hover:bg-secondary/10 transition-colors duration-300 ease-in-out'></div>
      </div>
      <p className='text-xl text-wrap'>{description}</p>
    </div>
  );
};
export default FeatureCard;
