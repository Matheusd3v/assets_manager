import { useForm, SubmitHandler } from "react-hook-form";
import {
  entityFormSchema,
  TEntityFormSchema,
} from "../../schemas/EntityFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { Button } from "../Button";
import { api } from "../../services/api";
import { FormStyle } from "../../style/form-style";
import { toast } from "react-toastify";

interface IEntityFormProps {
  url: string;
}

export const EntityForm = ({ url }: IEntityFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TEntityFormSchema>({
    resolver: zodResolver(entityFormSchema),
  });

  const submit: SubmitHandler<TEntityFormSchema> = (formData) => {
    api.post(url, formData).then((response) => {
      reset();
      toast.success(response.data.message);
    });
  };

  return (
    <FormStyle onSubmit={handleSubmit(submit)}>
      <Input label="Nome: " type="text" {...register("name")} />
      {errors.name ? <p>{errors.name.message}</p> : null}

      <Button size="small">Cadastrar</Button>
    </FormStyle>
  );
};
