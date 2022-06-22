import React, { useEffect, useState } from "react";
import { POKEMON_DESC_URL, POKEMON_LIST_URL } from "../constants/Api";
import { useSelector } from "react-redux";

const PokemonInfo = () => {
	const index = useSelector((state) => state.index);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		async function fetchPokemonName() {
			try {
				const response = await fetch(POKEMON_LIST_URL);
				if (response.ok) {
					const json = await response.json();
					setName(json.results[index].name);
				} else {
					throw new Error("ERROR! Couldent find pokemon name...");
				}
			} catch (error) {
				console.log(error);
			}
		}
		fetchPokemonName();

		async function fetchPokemonInfo() {
			const urlNumber = index + 1;
			const url = POKEMON_DESC_URL + urlNumber;
			try {
				const response = await fetch(url);
				if (response.ok) {
					const json = await response.json();
					setDescription(json.flavor_text_entries[0].flavor_text);
				} else {
					throw new Error("ERROR! Couldent fint pokemon description");
				}
			} catch (error) {
				console.log(error);
			}
		}
		fetchPokemonInfo();
	}, [index]);

	return (
		<>
			<h2>{name}</h2>
			<p>{description}</p>
		</>
	);
};

export default PokemonInfo;
