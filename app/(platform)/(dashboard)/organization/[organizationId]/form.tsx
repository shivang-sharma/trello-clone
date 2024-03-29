"use client";

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-actions";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { FormSubmit } from "@/components/form/form-submit";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" errors={fieldErrors} />
      </div>
      <FormSubmit>Create</FormSubmit>
    </form>
  );
};
