import { z } from "zod";

export const entityFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nome é obrigatório!" })
    .max(255, { message: "Limite de caracteres excedido!" }),
});

export type TEntityFormSchema = z.infer<typeof entityFormSchema>
