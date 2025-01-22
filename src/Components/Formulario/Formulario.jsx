import { useForm } from "react-hook-form";
import "./Formulario.css";

export const Formulario = () => {
  const {register,handleSubmit,reset,formState:{errors}}=useForm({
    defaultValues: {
      nombre: '',
      correo: '',
      mensaje: ''
    },
  });

  const onSubmit = (data)=>{
    console.log(data);
    reset();
  }
  return (
    <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nombre"
        {...register("nombre", {
          required: {
            value: true,
            message: "El nombre es obligatorio",
          },
        })}
      />
      {errors.nombre && <span>{errors.nombre.message}</span>}
      <input
        type="text"
        placeholder="Correo"
        {...register("correo", {
          required: "El email es obligatorio",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Formato de email inválido",
          },
        })}
      />
      {errors.correo && <span>{errors.correo.message}</span>}
      <input
        type="text"
        placeholder="Mensaje"
        {...register("mensaje", {
          required: {
            value: true,
            message: "El mensaje es obligatorio",
          },
        })}
        />
      {errors.mensaje && <span>{errors.mensaje.message}</span>}
      <button type="submit">ENVIAR</button>
    </form>
  );
};
