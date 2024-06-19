import React from 'react';
import Form from "../Components/Form/index.jsx";
import Titulo from '../Components/Title/index.jsx';

function View1(props) {
  return (
    <>
      <Titulo encabezado = "CREAR MI CITA"/>
      <Form setCitas={props.setCitas}/>
    </>
  );
}

export default View1;