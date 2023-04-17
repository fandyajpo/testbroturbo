import { Button } from "ui";
import Pagar from "../components/Page";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
    </>
  );
}
