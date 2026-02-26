"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import TextArea from "@/components/ui/TextArea";
import FormMessage from "@/components/ui/FormMessage";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ message: "Enter a valid email" }),
  company: z.string().min(1, { message: "Enter a valid company" }).optional(),
  message: z
    .string()
    .min(10, { message: "Message must be more than 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_MAIL_ACCESS_TOKEN,
          ...values,
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log("Message sent!");
        reset();
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="gap-y-md flex w-full flex-1 flex-col"
    >
      {/* Names Fields */}
      <div className="gap-y-xs flex flex-col">
        <Label htmlFor="firstname">Your full name</Label>
        <Input
          id="firstname"
          placeholder="John Appleseed"
          {...register("name")}
        />
        {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
      </div>

      {/* Email and Phone Fields */}
      <div className="gap-y-xs flex flex-col">
        <Label htmlFor="email">{`What's your email?`}</Label>
        <Input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          {...register("email")}
        />
        {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
      </div>

      <div className="gap-y-xs flex flex-col">
        <Label htmlFor="company">Company</Label>
        <Input
          type="company"
          id="company"
          placeholder="Apple"
          {...register("company")}
        />
        {errors.company && <FormMessage>{errors.company.message}</FormMessage>}
      </div>

      {/* Message Field */}
      <div className="gap-y-xs flex flex-col">
        <Label htmlFor="message">What do you wanna know?</Label>
        <TextArea
          id="message"
          placeholder="Add your message"
          {...register("message")}
        />
        {errors.message && <FormMessage>{errors.message.message}</FormMessage>}
      </div>

      <Button isLoading={isSubmitting} type="submit" className="mt-auto">
        Send Message
      </Button>
    </form>
  );
}
