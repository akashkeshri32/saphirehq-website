import Image from "next/image";
import BlueTick from "@/assets/icons/blue-tick.svg";

const FEATURES = [
  "Internship structure & duration",
  "Practical projects & mentor guidance",
  "Evaluation process & stipend criteria",
  "Stipend upto ₹15,000",
  "Selection & onboarding process",
  "Next steps & Q&A"

];

export const FeatureBox = () => {
  return (
    <div className="bg-black rounded-xl p-7.5 flex flex-col gap-4">
      <h3 className="text-18 font-semibold text-white">What's Included</h3>
      {FEATURES.map((feature) => (
        <div key={feature} className="flex items-center gap-3">
          <Image
            src={BlueTick}
            alt=""
            width={20}
            height={20}
            className="shrink-0"
          />
          <span className="text-14 text-border-stroke">{feature}</span>
        </div>
      ))}
    </div>
  );
};
