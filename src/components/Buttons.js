import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { POKEMON_LIST_URL } from "../constants/Api";
import { changeIndex, changeSelectValue } from "../store/actions";

const Buttons = () => {
	const dispatch = useDispatch();
	const index = useSelector((state) => state.index);
	const [prevDisabled, setPrevDisabled] = useState(true);
	const [nextDisabled, setNextDisabled] = useState(false);
	const [pokemonNames, setPokemonNames] = useState(null);

	useEffect(() => {
		if (index > 0) {
			setPrevDisabled(false);
		} else {
			setPrevDisabled(true);
		}

		if (index === 149) {
			setNextDisabled(true);
		} else {
			setNextDisabled(false);
		}
	}, [index]);

	useEffect(() => {
		async function fetchPokemonNames() {
			const response = await fetch(POKEMON_LIST_URL);
			const json = await response.json();
			let nameArray = [];
			for (let i = 0; i < json.results.length; i++) {
				nameArray.push(json.results[i].name);
			}
			setPokemonNames(nameArray);
		}
		fetchPokemonNames();
	}, []);

	function handlePrevClick() {
		dispatch(changeIndex(index - 1));
		dispatch(changeSelectValue(pokemonNames[index - 1]));
	}
	function handleNextClick() {
		dispatch(changeIndex(index + 1));
		dispatch(changeSelectValue(pokemonNames[1 + index]));
	}

	return (
		<div className="btn-container">
			<button disabled={prevDisabled} onClick={handlePrevClick}>
				Prev
			</button>
			<button disabled={nextDisabled} onClick={handleNextClick}>
				Next
			</button>
		</div>
	);
};

export default Buttons;
