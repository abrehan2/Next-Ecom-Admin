"use client";

// IMPORTS -
import * as z from "zod";
import { SettingFormProps } from "@/app/partials/types";
import { Trash } from "lucide-react";
import { settingsSchema } from "@/app/partials/schema";
import { Form, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// COMPONENTS -
import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// PARTIAL -
type SettingFormValues = z.infer<typeof settingsSchema>;

const SettingsForm: React.FC<SettingFormProps> = ({ initialData }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const methods = useForm();

  const formData = useForm<SettingFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });

  const onSubmitHandler = async (data: SettingFormValues) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store preferences" />
        <Button variant={"destructive"} size={"icon"} onClick={() => setOpen(true)} disabled={loading}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <FormProvider {...formData}>
        <form
          onSubmit={formData.handleSubmit(onSubmitHandler)}
          className="
              space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              name="name"
              control={formData.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Store name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            Save changes
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SettingsForm;
