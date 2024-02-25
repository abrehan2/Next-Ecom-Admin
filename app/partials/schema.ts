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
  imageUrl: z.string().min(1)
});
