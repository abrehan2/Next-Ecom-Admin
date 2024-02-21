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
