"use client";

import { Select } from "@/components/ui";
import { Domain } from "@/lib/drizzle/schema";

const DomainOfInterest = ({ domains }: { domains: Domain[] }) => {
  const domainOptions = [
    { value: "", label: "All domains" },
    ...domains.map((d) => ({ value: d.name, label: d.name })),
  ];
  return (
    <Select
      options={domainOptions}
      name="domainOfInterest"
      triggerClassName="flex-1"
      className="flex-1 min-w-0"
    />
  );
};

export default DomainOfInterest;
