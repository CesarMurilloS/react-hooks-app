import React from 'react';
import Comentario from './components/Comentario';
import EjemploUno from './components/EjemploUno';
import HookForm from './components/HookForm';
import Saludo from './components/Saludo';

function App() {
  const sujeto = {
    nombre: 'Pancho',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsucm dolor, sit amet consectetur adipisicing elit.',
  }
  return (
    <div className="container mt-5">
    {/*<HookForm></HookForm>
    <EjemploUno/>*/}
    <Saludo persona="Juanito" />
    <Saludo persona="Ignacio" />
    <Saludo persona="Marcus" />
    <Comentario sujeto={sujeto}/>
    </div>
  );
}

export default App;