import Image, { type StaticImageData } from "next/image";

type Props = {
  heading: string;
  items: string[];
  icon: StaticImageData;
};

export const ProblemBulletCard = ({ heading, items, icon }: Props) => {
  return (
    <div className="bg-white border border-border-stroke rounded-xl p-7.5">
      <h3 className="text-20 font-heading font-semibold">{heading}</h3>

      <ul className="flex flex-col gap-3 mt-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Image
              src={icon}
              alt=""
              width={18}
              height={18}
              className="shrink-0 mt-0.5"
            />
            <span className="text-14 text-text-gray">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
