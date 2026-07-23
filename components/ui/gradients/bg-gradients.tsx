type Props = {
  variant : "primary-gradient" | "purple" | "plain-green" | "black" |"psych-violet" | "light-deep-blue"
}

export default function BackgroundGradients({ variant }: Props) {

  const gradientClass : Record<Props["variant"], string> = {
    "primary-gradient": "primary-gradient",
    "purple": "bg-purple",
    "plain-green": "bg-green",
    "psych-violet": "bg-[#9A2DFF]",
    "black" : "bg-black",
    "light-deep-blue" : "bg-linear-[120.62deg,#00B7FF_0%,#1437FF_100%]"
  }
  return (
    <div className={`${gradientClass[variant]} absolute w-full h-full top-0 left-0`}>
    </div>
  )
}
