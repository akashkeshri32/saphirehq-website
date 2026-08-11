import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export const ContactInfoRow = ({ icon: Icon, label, value, href }: Props) => {
  const content = (
    <div className="flex items-start gap-3.5">
      <span className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <Icon size={18} className="text-blue-secondary" />
      </span>

      <div>
        <p className="text-12 uppercase tracking-wide text-gray-two font-jetbrains">{label}</p>
        <p className="text-15 text-white font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block hover:opacity-80 transition-opacity"
    >
      {content}
    </a>
  );
};
