import Image from "next/image";
import { featureCards } from "@/types/features";
const FeatureCard = ({ image, description }: featureCards) => {
  return (
    <div>
      <Image src={image} alt={`${description.slice(0, 20)}...`} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus
        laborum quis dolor at, deserunt, sunt consectetur, nulla temporibus quia
        soluta. Amet quae et eius ducimus. Minima officia quas accusamus?
      </p>
    </div>
  );
};
export default FeatureCard;
