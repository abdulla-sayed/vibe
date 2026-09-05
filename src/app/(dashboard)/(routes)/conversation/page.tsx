"use client";

import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form"; // dont forget that you have to do "use client" for any use.
import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

// you can here notice the passing between props from a component to another.
export default function ConversationPage() {
  // use of form starts here! react hook form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  // here we need to control and use the loading state of the form
  // here is to check for when the state is under submitting from the form itself
  const isLoading = form.formState.isSubmitting;

  // this is the onsubmit function, and we can take the values directly
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Advanced Conversation Model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          {/* spreading the form with ... passess all the functions that we have in that constant */}
          <Form {...form}>
            {/* this is the method of wiring the onSubmit function we wrote to the form using the native html form. */}
            <form
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        // disabled is a boolean that disables the input when the condition provided is true
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        {...field} // this is to spread all the props directly, the onChange and many others dynamically.
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">Messages Content belongs here</div>
      </div>
    </div>
  );
}
