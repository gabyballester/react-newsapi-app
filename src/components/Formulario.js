//Importo React Component y proptypes para el tipado
import React, { Component } from 'react';

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
                        <div className="input-field col s12 m8 offset-m2">
                            <select>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                    </form>
                     {/* fin formulario */}
                </div>
            </div>
        );
    }
}

export default Formulario;