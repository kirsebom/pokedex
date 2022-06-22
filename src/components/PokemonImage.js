import React from "react";
import { POKEMON_IMG_URL } from "../constants/Api";
import { useSelector } from "react-redux";
const PokemonImage = () => {
	const index = useSelector((state) => state.index);
	const urlNumber = index + 1;
	const url = POKEMON_IMG_URL + urlNumber + ".png";
	return <img src={url} />;
};

export default PokemonImage;
