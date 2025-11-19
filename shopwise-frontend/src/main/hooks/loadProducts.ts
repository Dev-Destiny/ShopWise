import { useEffect } from "react";
import useProductsApi from "../api/useProducts";
import { useProductStore } from "../store/useProductStore";

//uses the getProducts function to load the products to the product context
async function useLoadProducts() {
	const setProducts = useProductStore((state) => state.setProducts);
	const { getProducts } = useProductsApi();

	useEffect(() => {
		let isMounted = true;
		const load = async () => {
			const products = await getProducts();
			if (isMounted) setProducts(products);
		};
		load();

		return () => {
			isMounted = false;
		};
	}, [getProducts, setProducts]);
}

export default useLoadProducts;
