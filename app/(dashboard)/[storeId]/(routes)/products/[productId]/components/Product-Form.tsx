"use client";

// IMPORTS -
import * as z from "zod";
import { ProductFormProps } from "@/app/partials/types";
import { Trash } from "lucide-react";
import { ProductSchema } from "@/app/partials/schema";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AlertModal from "@/components/modals/alert-modal";
import ImageUpload from "@/components/ImageUpload";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

// PARTIAL -
type ProductFormValues = z.infer<typeof ProductSchema>;

const ProductForm: React.FC<ProductFormProps> = ({ initialData, categories, color, sizes}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const router = useRouter();

  const title = initialData ? "Edit product" : "Create product";
  const description = initialData ? "Edit a product" : "Add a new product";
  const toastMessage = initialData ? "Product updated" : "Product created";
  const action = initialData ? "Save changes" : "Create";

  const formData = useForm<ProductFormValues>({
    resolver: zodResolver(ProductSchema),
    defaultValues: initialData ? {
      ...initialData,
      price: parseFloat(String(initialData?.price))
    } : {
      name: "",
      images: [],
      price: 0,
      categoryId: "",
      colorId: "",
      sizeId: "",
      isFeatured: false,
      isArchived: false
    },
  });

  const onSubmitHandler = async (data: ProductFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.put(
          `/api/${params.storeId}/billboards/${params.billboardId}`,
          data
        );
      } else {
        await axios.post(`/api/${params.storeId}/billboards`, data);
      }
      router.refresh();
      router.push(`/${params.storeId}/billboards`);
      toast.success(toastMessage);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(
        `/api/${params.storeId}/billboards/${params.billboardId}`
      );
      router.refresh();
      router.push(`/${params.storeId}/billboards`);
      toast.success("Billboard deleted");
    } catch (error) {
      toast.error(
        "Make sure you removed all categories using this billboard first"
      );
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
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            variant={"destructive"}
            size={"icon"}
            onClick={() => setOpen(true)}
            disabled={loading}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <FormProvider {...formData}>
        <form
          onSubmit={formData.handleSubmit(onSubmitHandler)}
          className="
              space-y-8 w-full"
        >
          <FormField
            name="images"
            control={formData.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value.map((image) => image.url)}
                    disabled={loading}
                    onChange={(url) => field.onChange([...field.value, {url}])}
                    onRemove={(url) => field.onChange([...field.value.filter((current) => current.url !== url)])}
                  />
                </FormControl>
              </FormItem>
            )}
          />
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
                      placeholder="Product name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="price"
              control={formData.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="9.99"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="categoryId"
              control={formData.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a category"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="sizeId"
              control={formData.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a size"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sizes.map((s) => (
                        <SelectItem key={s.id} value={s.id}>
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
              name="colorId"
              control={formData.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a color"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {color.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              name="isFeatured"
              control={formData.control}
              render={({ field }) => (
                <FormItem
                className="flex 
                flex-row
                items-start
                space-x-3
                space-y-0
                rounded-md
                border
                p-4" 
                >
                  <FormControl>
                    <Checkbox 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-0 leading-none">
                   <FormLabel>
                    Featured
                   </FormLabel>
                   <FormDescription>
                    
                   </FormDescription>
                  </div>
                  
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </FormProvider>
      <Separator />
    </>
  );
};

export default ProductForm;
