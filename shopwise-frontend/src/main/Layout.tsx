import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className='mb-40'>
			<Navbar/>
			<Outlet/>
		</div>
	);
}

export default App;
