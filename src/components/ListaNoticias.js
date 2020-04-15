import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types'; //importamos PropTypes

/** En esta palabra "noticias" extraemos lo que le llega de Lista noticias
 *  ..podríamos haber usado props también */
const ListaNoticias = ({ noticias }) => (
    // usamos clase row para acceder al grid de materialize
    <div className="row">
        {/* Recorremos el array noticias y coge cada noticia */}
        {noticias.map(noticia => (
            // Va a retornar el componente de noticia
            //esto se pintará 1 vez por cada noticia del array
            <Noticia
                //con esto pasamos la información de la noticia al hijo Noticia
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </div>
)

//Efectuamos el controld e typado con PropTypes
ListaNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListaNoticias;
