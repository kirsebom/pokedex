import React, { useEffect, useState } from "react";
import { POKEMON_LIST_URL } from "../constants/Api";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex, changeSelectValue } from "../store/actions";

const SelectPokemon = () => {
	const name = useSelector((state) => state.name);
	console.log("name: ", name);
	const [pokemonList, setPokemonList] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchPokemons() {
			try {
				const response = await fetch(POKEMON_LIST_URL);
				if (response.ok) {
					const json = await response.json();
					setPokemonList(json.results);
				} else {
					throw new Error("ERROR! Couldent find any pokemons...");
				}
			} catch (error) {
				console.log(error);
			}
		}
		fetchPokemons();
	}, []);

	function handleChange() {
		const currentIndex = document.getElementById("select").selectedIndex;
		dispatch(changeIndex(currentIndex));
		const e = document.getElementById("select");
		const value = e.options[e.selectedIndex].value;
		dispatch(changeSelectValue(value));
	}

	return (
		<select id="select" onChange={handleChange} value={name}>
			{pokemonList.map((pokemon) => (
				<option key={pokemon.name} value={pokemon.name}>
					{pokemon.name}
				</option>
			))}
		</select>
	);
};

export default SelectPokemon;
