import { z } from "zod";

export const collectionFormSchema = z.object({
  value: z.preprocess((value) => Number(value), z.number()),
  date: z.preprocess(
    (date) => new Date(String(date).concat(":00.000Z")),
    z.date()
  ),
});

export type TCollectionFormSchema = z.infer<typeof collectionFormSchema>;
