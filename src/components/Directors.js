import React from "react";
import { directors } from "../data";
import NameAndMovies from "./NameAndMovies";

function Directors() {
  const directorsList = directors.map(director =>
    <NameAndMovies key={director.name}
    director={director}/>)
  return <div>
    <h1>Directors Page</h1>
    {directorsList}
    </div>;
}

export default Directors;
