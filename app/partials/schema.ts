// IMPORTS -
import * as z from "zod";

// STORE NAME -
export const storeSchema = z.object({
    name: z.string().min(1),    
});