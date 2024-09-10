import {Api, TypeCategory} from "../../Api.ts";
import {useEffect, useState} from "react";


function CategoryInfo() {
    const [categories, setCategories] = useState<TypeCategory[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const api = new Api();


    useEffect(() => {
        (async () => {
            try {
                const res = await api.typeCategory.typeCategoryGetAll(); // Fetch all products
                setCategories(res.data); // Set fetched products in state
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
        <>
            <div
                className="flex-grow container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.typeId}
                        className="card bg-gray-800 bg-opacity-90 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="card-body text-center p-4">
                            <h2 className="card-title text-white text-lg font-semibold">{category.typeName}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CategoryInfo;