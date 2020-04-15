//Importamos React, Component y Fragment
import React, { Component, Fragment } from 'react';
//Componentes importados
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {

  state = {
    noticias: [] //array vacío para noticias
  }

  //Método de creación de componente
  componentDidMount() { //cuando el componente se monta se ejecuta esto
    this.consultarNoticias(); //llama a esta función
  }

  consultarNoticias = async () => { //función asíncrona que llama a la api

    // pegamos aquí el endpoint dentro de la clase con template strings
    const base_url = `http://newsapi.org/v2/top-headlines?`;
    const country = `country=us`; //este dato lo sacamos de su web
    const category = `&category=business`; //este dato lo sacamos de su web
    const api_key = `&apiKey=94160c6e14b24fcfaba4b1b287ae01cf`; //lo generamos en la web
    const url = `${base_url}${country}${category}${api_key}`; //construcción url

    //solicitamos la respeuta síncrona con await
    const respuesta = await fetch(url);
    const noticias = await respuesta.json(); //paso a json el texto

    this.setState({
      //metemos los artículos en nuestro array noticias
      noticias: noticias.articles
    })

  }

  render() {
    return (
      <Fragment>
        <Header
          titulo="Noticias React API"
        />
        {/* agregamos clases de bootstrap, materialize y propia */}
        <div className="container white contenedor-noticias ">
          <ListaNoticias
            // pasamos las noticias del padre App.js al hijo ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
