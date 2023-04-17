import { Button, Input } from "ui";
import Pagar from "../components/Page";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useCtx } from "../lib/Context";
type FormValues = {
  name: string;
};

export default function Docs() {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Button />
      <Pagar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => <Input {...field} />}
          {...register}
          name="name"
          control={control}
        />
      </form>
    </>
  );
}
