import React from 'react';
import Cita from '../Components/Cita/index.jsx';
import Titulo from '../Components/Title/index.jsx';

function View2(props) {
    const sacarCita = (id) => {
      props.setCitas(prevCitas => prevCitas.filter(cita => cita.id !== id));
    };
  
    return (
      <div>
        <Titulo encabezado ="ADMINISTRA TUS CITAS"/>
        <div class="row">
          {props.citas.map((cita, index) => (
            <div key={cita.id} class="col-md-12 mb-4">
              <Cita cita={cita} ELIMINAR={sacarCita} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default View2;