//Importo React Component y proptypes para el tipado
import React, { Component } from 'react';
//importo librería proptypes
import PropTypes from 'prop-types';

class Formulario extends Component { //creamos clase que extiende ce Component
    state = {//creamos state para controlar categorias
        categoria: 'general'
    }

    // Método para gestionar el cambio de categoría con select
    cambiarCategoria = e => {  // e impide que se recargue la página
        this.setState({ //seteamos estado de categoría
            categoria : e.target.value //con el value target del evento del select
        }, () => { //este callback se ejecutará después de setear el estado
            //Si no hacemos esto, siempre iremos un paso por detrás

            // Decirle al padre App.js que consulte la nueva categoría a la API
            this.props.consultarNoticias(this.state.categoria);
        });
    }

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
                            <select onChange={this.cambiarCategoria}>
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

//aplico proptypes
Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
}

export default Formulario;