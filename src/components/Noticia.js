import React from 'react';

const Noticia = ({ noticia }) => {

    //extraemos los datos con destructuring
    const { urlToImage, url, title, description, source } = noticia;

    // condicionalmente cargar la imagen si esta disponible
    const imagen = //creamos constante
        //usamos un ternario
        (urlToImage) ?
            //si existe imagen muestra esto
            <div className="card-image">
                <img src={urlToImage} alt={title} /> {/* agrego la imagen */}
                {/* agrego la fuente sobre la foto*/}
                <span className="card-title">{source.name}</span>
            </div>
            : null; //si no existe imagen no muestra nada

    return (
        // Esto se pintará 1 vez por noticia del array
        // Como tenemos acceso al grid de materialize, lo usamos
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}  {/* Mostramos la constante imagen bindeada */}

                <div className="card-content">
                    {/* mostramos título y descripción */}
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                {/* ponemos enlace tipo botón que lleve a la url de la publicación */}
                <div className="card-action">
                    <a href={url}
                        target="_blank"
                        // este target vulnera la seguridad por lo que usamos noopener
                        rel="noopener noreferrer"
                        // clase de materialize
                        className="waves-effect waves-light btn">
                        Ver Noticia Completa
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Noticia;