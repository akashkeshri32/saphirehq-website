type Props = {
  variant: "default" | "secondary",
  text : string
}

export const Eyebrow = ({ variant, text } : Props) => {

  const variantClass: Record<Props["variant"], {
    bg : string
    text : string
  }> = {
    default: {
      text : "text-blue-primary",
      bg : "bg-blue-primary",

    },
    secondary : {
      text : "text-blue-secondary",
      bg : "bg-blue-secondary"
    }
  }


  return <h6 className={` flex gap-x-2 items-center font-jetbrains`}>
    <span className={`${variantClass[variant].bg} inline-block w-1.5 h-1.5 font-jetbrains rounded-full text-12 font-medium`}></span>
    <span className={`${variantClass[variant].text} uppercase`}>{text}</span>
  </h6>
}
