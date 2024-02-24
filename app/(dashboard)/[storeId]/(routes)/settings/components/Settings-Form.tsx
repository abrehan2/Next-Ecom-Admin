"use client";

// IMPORTS -
import * as z from "zod";
import { SettingFormProps } from "@/app/partials/types";
import { Trash } from "lucide-react";
import { settingsSchema } from "@/app/partials/schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

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
import AlertModal from "@/components/modals/alert-modal";
import ApiAltert from "@/components/api-alert";
import { useOrigin } from "@/hooks/use-origin";

// PARTIAL -
type SettingFormValues = z.infer<typeof settingsSchema>;

const SettingsForm: React.FC<SettingFormProps> = ({ initialData }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const methods = useForm();
  const params = useParams();
  const router = useRouter();
  const origin = useOrigin();

  const formData = useForm<SettingFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });

  const onSubmitHandler = async (data: SettingFormValues) => {
    try {
      setLoading(true);
      await axios.put(`/api/stores/${params.storeId}`, data);
      router.refresh();
      toast.success("Store updated");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/stores/${params.storeId}`);
      router.refresh();
      router.push("/");
      toast.success("Store deleted");
    } catch (error) {
      toast.error("Make sure you removed all products and categories first");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store preferences" />
        <Button
          variant={"destructive"}
          size={"icon"}
          onClick={() => setOpen(true)}
          disabled={loading}
        >
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
      <Separator />
      <ApiAltert
        title="NEXT_PUBLIC_API_URL"
        description={`${origin}/api/${params.storeId}`}
        variant="public"
      />
    </>
  );
};

export default SettingsForm;
