import Button from "../Button/index.jsx";
import React, { useState } from "react";

const formStyle = {
  display: "flex",
  flexDirection: "column",
};
function Form(props) {
  const [mascota, setMascota] = useState("");
  const [dueno, setDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const accionSubmit = (e) => {
    e.preventDefault(); 
    const fechaActual = Date.now();
    const fechaSeleccionada = new Date(fecha);
    const horaSeleccionada = new Date(`1970-01-01T${hora}`);

    if (fechaSeleccionada < fechaActual) {
      alert('La fecha seleccionada no puede ser anterior a la fecha actual.');
      return;
    }
    const horaInicio = new Date(`1970-01-01T08:00:00`);
    const horaFin = new Date(`1970-01-01T18:00:00`);

    if (horaSeleccionada < horaInicio || horaSeleccionada > horaFin) {
      alert('La hora seleccionada debe estar entre las 8:00 AM y las 6:00 PM.');
      return;
    }
    if (window.confirm("¿Está seguro de agregar esta cita?")) {
      const nuevaCita = {
        id: Date.now(),
        mascota,
        dueno,
        fecha,
        hora,
        sintomas,
      };
      props.setCitas((prevCitas) => [...prevCitas, nuevaCita]);

      setMascota("");
      setDueno("");
      setFecha("");
      setHora("");
      setSintomas("");
    }
  };

  return (
    <form style={formStyle} onSubmit={accionSubmit}>
      <label>Nombre Mascota</label>
      <input
        type="text"
        name="mascota"
        class="u-full-width"
        placeholder="Nombre Mascota"
        value={mascota}
        onChange={(e) => setMascota(e.target.value)}
        required
      />

      <label>Nombre Dueño</label>
      <input
        type="text"
        name="dueno"
        class="u-full-width"
        placeholder="Nombre dueño de la mascota"
        value={dueno}
        onChange={(e) => setDueno(e.target.value)}
        required
      />

      <label>Fecha</label>
      <input
        type="date"
        name="fecha"
        class="u-full-width"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />

      <label>Hora</label>
      <input
        type="time"
        name="hora"
        class="u-full-width"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        required
      />

      <label>Síntomas</label>
      <textarea
        name="sintomas"
        class="u-full-width"
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
        required
      />

      <Button type="submit" className="u-full-width" id="boton">
        AGREGAR CITA
      </Button>
    </form>
  );
}

export default Form;
