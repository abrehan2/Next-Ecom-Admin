// IMPORTS -
import * as z from "zod";

// STORE NAME -
export const storeSchema = z.object({
  name: z.string().min(1),
});

// SETTINGS FORM SCHEMA -
export const settingsSchema = z.object({
  name: z.string().min(1),
});

// BILL BOARD FORM SCHEMA -
export const BillboardsSchema = z.object({
  label: z.string().min(1),
  imageUrl: z.string().min(1),
});

// CATEGORY FORM SCHEMA -
export const CategorySchema = z.object({
  name: z.string().min(1),
  billboardId: z.string().min(1),
});

// SIZE FORM SCHEMA -
export const SizeSchema = z.object({
  name: z.string().min(1),
  value: z.string().min(1),
});

// COLOR FORM SCHEMA -
export const ColorSchema = z.object({
  name: z.string().min(1),
  value: z.string().min(4).regex(/^#/, {
    message: "String must be a valid hex code"
  }),
});

// PRDUCT FORM SCHEMA -
export const ProductSchema = z.object({
  name: z.string().min(1),
  images: z.object({url: z.string()}).array(),
  price: z.coerce.number().min(1),
  categoryId: z.string().min(1),
  colorId: z.string().min(1),
  sizeId: z.string().min(1),
  isFeatured: z.boolean().default(false).optional(),
  isArchived: z.boolean().default(false).optional()
});