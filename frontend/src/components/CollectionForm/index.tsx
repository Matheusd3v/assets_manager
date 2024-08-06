import { SubmitHandler, useForm } from "react-hook-form";
import {
  collectionFormSchema,
  TCollectionFormSchema,
} from "../../schemas/CollectionFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { FormStyle } from "../../style/form-style";
import { Input } from "../Input";
import { Button } from "../Button";
import { toast } from "react-toastify";

interface ICollectionFormProps {
  url: string;
}

export const CollectionForm = ({ url }: ICollectionFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCollectionFormSchema>({
    resolver: zodResolver(collectionFormSchema),
  });

  const submit: SubmitHandler<TCollectionFormSchema> = (formData) => {
    api
      .post(url, formData)
      .then((response) => {
        reset();
        toast.success(response.data.message);
      })
      .catch((e) => toast.error(e.data.message));
  };

  return (
    <FormStyle onSubmit={handleSubmit(submit)}>
      <Input label="Valor: " type="number" {...register("value")} />
      {errors.value ? <p>{errors.value.message}</p> : null}

      <Input type="datetime-local" label="Data: " {...register("date")} />
      {errors.date ? <p>{errors.date.message}</p> : null}

      <Button size="small">Cadastrar</Button>
    </FormStyle>
  );
};
