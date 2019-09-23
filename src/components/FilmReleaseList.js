import React, { Component } from 'react';
import Film from './Film.js';

class FilmReleaseList extends Component {
render() {
  const filmNodes = this.props.films.map((film) => {
    return (
      <Film key={film.id} film={film.name} link={film.url}></Film>
    )
  })



  return (
    <>
      {filmNodes}
    </>
  )
}
}

export default FilmReleaseList;
