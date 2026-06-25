"use client";

import { Button } from "@/components/ui/button/button";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" loading={pending}>
      {pending ? "Submitting…" : "Submit Application"}
    </Button>
  );
};

export default SubmitButton;
