import Image from "next/image";
import { featureCards } from "@/types/features";
const FeatureCard = ({ image, description }: featureCards) => {
  return (
    <div>
      <Image src={image} width={200} height={200} alt={`${description.slice(0, 20)}...`} />
      <p>{description}</p>
    </div>
  );
};
export default FeatureCard;
