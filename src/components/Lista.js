import React,{Fragment, useState} from 'react';

const Lista = () => {

    //Array con useState
    const [numeros, setNumero] = useState([1,2,3,4,5,6])

    const [tiempo, setTiempo] = useState(1)

    //Añadir numeros a Array numeros
    const aumentar = () => {
        setTiempo(tiempo + 1)
        //... = Operador de propagacion
        //C
        setNumero([
            ...numeros,
            tiempo + 1
        ])
    }

    const arrayUno = ['Chile', 'Argentina']
    const arrayDos = ['Perú', 'Mexico']

    const Unidos = [...arrayUno, ...arrayDos]
    console.log(Unidos)

    return (
        <Fragment>
            <h2>Lista</h2>
            <ul>
                <button onClick={aumentar}>Aumentar</button>
                <p>Tiempo: {tiempo}</p>
                {
                    numeros.map((item, index) => 
                        <li key={index}>
                            {item} : {index}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default Lista;