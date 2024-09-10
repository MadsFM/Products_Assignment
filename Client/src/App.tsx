// src/App.tsx

import { useState } from 'react';
import './App.css';
import ProductsInfo from './components/ProductsInfo';
import CategoryInfo from "./components/CategoryInfo.tsx";

function App() {
    const [selectedTab, setSelectedTab] = useState('Products'); // State to manage selected tab

    // Function to handle tab changes
    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <div className="h-screen w-full bg-gray-900 text-white flex flex-col">
            {/* Header with Tabs */}
            <header className="flex justify-between items-center p-4 border-b border-gray-700 bg-black bg-opacity-75 fixed w-full z-10">
                <div className="flex space-x-8 ml-8">
                    <button
                        className={`text-xl transition-colors duration-300 ${
                            selectedTab === 'Products'
                                ? 'text-blue-400 border-b-2 border-blue-400'
                                : 'text-gray-400 hover:text-blue-400'
                        }`}
                        onClick={() => handleTabChange('Products')}
                    >
                        Products
                    </button>
                    <button
                        className={`text-xl transition-colors duration-300 ${
                            selectedTab === 'Category'
                                ? 'text-blue-400 border-b-2 border-blue-400'
                                : 'text-gray-400 hover:text-blue-400'
                        }`}
                        onClick={() => handleTabChange('Category')}
                    >
                        Category
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-24 px-8">
                {selectedTab === 'Products' && (
                    <section className="mt-8">
                        <ProductsInfo />
                    </section>
                )}

                {selectedTab === 'Category' && (
                    <section className="mt-8">
                        <CategoryInfo />
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;
