"use client";

import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "primary"
    | "ghost"
    | "link";
}

export const FormSubmit = ({
  children,
  className,
  disabled,
  variant,
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn("", className)}
      disabled={disabled}
      variant={variant}
      size={"sm"}
      type="submit"
    >
      {children}
    </Button>
  );
};
