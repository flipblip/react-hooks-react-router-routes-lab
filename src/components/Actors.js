import React from "react";
import { actors } from "../data";
import NameAndMovies from "./NameAndMovies";

function Actors() {
  const actorsList = actors.map(actor =>
    <NameAndMovies key={actor.name}
    actor={actor}/>)

    return <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
}

export default Actors;
