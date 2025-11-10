import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
	return (
		<div className='mb-40'>
			<Navbar/>
			<Hero/>
			<Products/>
		</div>
	);
}

export default App;
