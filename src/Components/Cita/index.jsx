import React from 'react';
import Button from '../Button/index.jsx';

const citaStyle = {
  padding: '1em',
  borderRadius: '0.12em',
  marginBottom: '1rem',
};

function Cita(props) {
  const cita = props.cita;

  const eliminarCita = () => {
    if (window.confirm(`¿Seguro que quiere sacar de la lista a ${cita.mascota}?`)) {
      props.ELIMINAR(cita.id); 
    }
  };

  return (
    <>
    <div style={citaStyle} className="cita">
      <div style={citaStyle} class="cita">
          <p>Mascota: <span>{cita.mascota}</span></p>
          <p>Dueño: <span>{cita.dueno}</span></p>
          <p>Fecha: <span>{cita.fecha}</span></p>
          <p>Hora: <span>{cita.hora}</span></p>
          <p>Síntomas: <span>{cita.sintomas}</span></p>
      <Button class="eliminar u-full-width" onClick={eliminarCita}>Eliminar ×</Button>
    </div>
    </div>
    </>
  );
}

export default Cita;