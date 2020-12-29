import React, {Fragment} from 'react';

const JsxAccion = () => {

    const temperatura = 21;

    return (
        <Fragment>
            <h2>Frío o Calor?</h2>
            <p>
                {
                    temperatura > 20 ? 'Calor!' : 'Frio!'
                }
            </p>
        </Fragment>
    );
}

export default JsxAccion;