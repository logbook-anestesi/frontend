import React from "react";
import useGetPokemon from "../../hooks/useGetPokemon";

const Home = () => {
  const { data, status } = useGetPokemon("pokemon/ditto");

  console.log(data, status);

  return (
    <div>
      <h3>This is homepage</h3>
    </div>
  );
};

export default Home;
