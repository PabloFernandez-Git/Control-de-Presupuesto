import React, { Fragment, useState } from 'react';

const Pregunta = () => {

    // Definir el state
    const [cantidad, guardarCantidad] = useState(0);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar

        // Si pasa la validacion...
    }

    return ( 
        <Fragment>
            <h2>Ingrese su presupuesto</h2>

            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ingrese su presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;