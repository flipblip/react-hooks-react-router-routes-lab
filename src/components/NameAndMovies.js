import React from 'react'

export default function NameAndMovies(props) {
    const myVar = props.actor || props.director

    const movies = myVar.movies.map(movie => <li key={movie}>{movie}</li>)

  return (
    <div>
        <h3>{myVar.name}</h3>
        <ul>{movies}</ul>
    </div>
  )
}
