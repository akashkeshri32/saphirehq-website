import Link from "next/link";

type Props = {
  currentPage: string;
};

export const Breadcrumb = ({ currentPage }: Props) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-14 mb-14">
      <Link href="/" className="text-blue-primary hover:opacity-80 transition-opacity">
        Home
      </Link>
      <span className="text-text-gray">/</span>
      <span className="text-text-gray">{currentPage}</span>
    </nav>
  );
};
