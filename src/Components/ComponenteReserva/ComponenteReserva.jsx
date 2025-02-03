import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./ComponenteReserva.css";
import { useState } from "react";

export const ComponenteReserva = () => {
  const navegate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      mesa: "",
      fecha: "",
      hora: "",
    },
  });

  const [fechaSeleccionada, setFechaSeleccionada] = useState();
  const [fechaHoy,setFechaHoy] = useState()

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const verificarFecha = (value) => {
    let fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + 1);

    const dia = fechaActual.getDate() - 1;
    const mes = fechaActual.getMonth();
    const año = fechaActual.getFullYear();

    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const fechaCompletaDate = new Date(año, mes, dia, horas, minutos, segundos);

    const valueDate = new Date(value);
    valueDate.setHours(horas, minutos, segundos);
    valueDate.setDate(valueDate.getDate() + 1);

    setFechaHoy(fechaCompletaDate);
    setFechaSeleccionada(valueDate);

    if (valueDate < fechaCompletaDate) {
      return "Valor no valido";
    } else {
      return true;
    }
  };

  const verificarHora = (value) => {
    if (!value) return "Hora no válida";

  const hora = fechaHoy.getHours();
  const minutosHoy = fechaHoy.getMinutes();

  const [horas, minutos] = value.split(":").map(Number);

  const fechaHoySinHora = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(), fechaHoy.getDate());
  const fechaSeleccionadaSinHora = new Date(fechaSeleccionada.getFullYear(), fechaSeleccionada.getMonth(), fechaSeleccionada.getDate());

  if (fechaSeleccionadaSinHora.getTime() === fechaHoySinHora.getTime()) {
    if (horas === hora && minutos <= minutosHoy) {
      return 'Hora no válida';
    }
    if (horas < hora || (horas === hora && minutos < minutosHoy)) {
      return 'Hora no válida';
    }
  }

  if (horas >= 8 && horas < 18) {
    return true;
  } else {
    return "Hora no válida";
  }
  };

  return (
    <div id="contenedorFormulario">
      <button onClick={() => navegate("/")} id="botonRegresar">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h2>Reservar</h2>

      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
          type="number"
          placeholder="Mesa"
          min={1}
          max={12}
          {...register("mesa", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
          })}
        />
        {errors.mesa && <span>{errors.mesa.message}</span>}
        <input
          type="date"
          placeholder="Fecha de Reserva"
          {...register("fecha", {
            required: {
              value: true,
              message: "Seleccione la fecha",
            },
            validate: verificarFecha,
          })}
        />
        {errors.fecha && <span>{errors.fecha.message}</span>}
        <input
          type="time"
          placeholder="Hora de Reserva"
          {...register("hora", {
            required: {
              value: true,
              message: "Seleccione la hora",
            },
            validate: verificarHora,
          })}
        />
        {errors.hora && <span>{errors.hora.message}</span>}
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
};
