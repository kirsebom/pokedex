import "./App.css";
import SelectPokemon from "./components/SelectPokemon";
import PokemonImage from "./components/PokemonImage";
import PokemonInfo from "./components/PokemonInfo";
import Buttons from "./components/Buttons";

function App() {
	return (
		<div className="pokedex">
			<SelectPokemon />
			<div className="card">
				<PokemonImage />
				<PokemonInfo />
			</div>
			<Buttons />
		</div>
	);
}

export default App;
