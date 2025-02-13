"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(1, {
    message: "Subject is required.",
  }),
  message: z.string().optional(),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit() {
    // Handle form submission here
    console.log(values);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-700 mb-4">
          CONTACT US
          <div className="w-16 h-0.5 bg-[#5BB5A7] mt-2" />
        </h1>

        <p className="text-gray-600 mb-6">
          Don&apos;t hesitate to send a message using this form if you have any
          questions or would like to get involved!
        </p>

        <p className="text-gray-600">
          Alternatively, reach out directly at{" "}
          <a
            href="mailto:theflorentina@etoncollege.org.uk"
            className="text-gray-900 hover:text-[#5BB5A7] transition-colors"
          >
            theflorentina@etoncollege.org.uk
          </a>
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Your name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="border-gray-200 focus:border-[#5BB5A7] focus:ring-[#5BB5A7]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Your email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="border-gray-200 focus:border-[#5BB5A7] focus:ring-[#5BB5A7]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Subject</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="border-gray-200 focus:border-[#5BB5A7] focus:ring-[#5BB5A7]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">
                  Your message (optional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="min-h-[150px] border-gray-200 focus:border-[#5BB5A7] focus:ring-[#5BB5A7]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-[#5BB5A7] hover:bg-[#4a9e91] text-white px-8 py-2"
          >
            SUBMIT
          </Button>
        </form>
      </Form>
    </div>
  );
}
