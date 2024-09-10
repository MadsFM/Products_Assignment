import {Api, Product} from "../../Api.ts";
import {useEffect, useState} from "react";


function ProductsInfo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const api = new Api();


    useEffect(() => {
        (async () => {
            try {
                const res = await api.products.productsGetAll(); // Fetch all products
                setProducts(res.data); // Set fetched products in state
                setLoading(false);
            } catch (err) {
                setError('Failed to load products');
                setLoading(false);
            }
        })();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div
            className="flex-grow container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="card bg-gray-800 bg-opacity-90 image-full rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                    <figure className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" // Replace with product image URL if available
                            alt={product.productName}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="card-body text-center items-center p-4">
                        <h2 className="card-title text-blue-400 text-lg font-semibold">{product.productName}</h2>
                        <p className="text-gray-300">{product.description}</p>
                        <div className="card-actions items-center justify-end mt-4">
                            <button
                                className="btn btn-primary bg-blue-600 text-white hover:bg-blue-500 transition-colors">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductsInfo;