"use client";

import { Button } from "@/components/ui/button/button";
import { useFormStatus } from "react-dom";

type Props = {
  label?: string;
  pendingLabel?: string;
};

const SubmitButton = ({ label = "Submit Application", pendingLabel = "Submitting…" }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" loading={pending}>
      {pending ? pendingLabel : label}
    </Button>
  );
};

export default SubmitButton;
