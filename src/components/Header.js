import React from 'react'; //cargamos react
import PropTypes from 'prop-types'; //cargtamos PropTypes

// Creo constante header
const Header = ({titulo}) => ( //le paso un título
    //usamos clases de materialize
    <nav className="nav-wrapper light-blue darken-3">
        {/* titulo como enlace */}
        <a href="#!" className="brand-logo center">{titulo}</a>
    </nav>
);

Header.propTypes = { //efectuamos ya el control de tipados
    titulo : PropTypes.string.isRequired //titulo será string
}
 
export default Header; //exporto