//Importo React Component y proptypes para el tipado
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component { //creamos clase que extiende ce Component
    state = {} //creamos state para controlar estados

    render() { 
        return ( 
            // formatos css personalizados
            <div className="buscador row">
                {/* columnas materialize */}
                <div className="col s12 m8 offset-m2">
                    {/* inicio formulario */}
                    <form>
                        <h2>Encuentra Noticias por Categoría</h2>
                    </form>
                     {/* fin formulario */}
                </div>
            </div>
        );
    }
}

 
export default Formulario;