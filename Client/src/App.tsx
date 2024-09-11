// src/App.tsx

import { useState } from 'react';
import ProductsInfo from './components/ProductsInfo';
import CategoryInfo from "./components/CategoryInfo.tsx";

function App() {
    const [selectedTab, setSelectedTab] = useState('Category');
    const [isEditMode, setIsEditMode] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState('');


    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    };

    const handleEditMode = () => {
        if (!isEditMode){
            setShowPasswordModal(true);
        }else {
            setIsEditMode(false);
        }
    };

    const handleEnteredPassword = () => {
        const userPassword = '1111';
        if (password == userPassword) {
            setIsEditMode(true);
            setShowPasswordModal(false);
            setPassword('');
        } else {
            alert('Wrong password')
            setPassword('')
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-900 text-white flex flex-col overflow-hidden">
            <header
                className="flex justify-between items-center p-4 border-b border-gray-700 bg-black bg-opacity-75 fixed w-full z-20 top-0">
                <div className="flex space-x-8 ml-8">
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
                </div>
            </header>
            <div className="flex justify-between items-center p-2 bg-gray-800 bg-opacity-75 fixed w-full z-10 top-16">
                {isEditMode && (
                    <div className="flex space-x-4 ml-4">
                        <button className="btn bg-green-500 text-white hover:bg-green-600 transition-colors">
                            Create
                        </button>
                        <button className="btn bg-yellow-500 text-white hover:bg-yellow-600 transition-colors">
                            Update
                        </button>
                    </div>
                )}
                <div className="flex flex-col items-center space-y-1 mr-4">
                    <p className="text-blue-400">Edit mode</p>
                    <label className="swap swap-flip">
                        <input
                            type="checkbox"
                            checked={isEditMode}
                            onChange={handleEditMode}
                        />
                        <div className="swap-on">ON</div>
                        <div className="swap-off">OFF</div>
                    </label>
                </div>
            </div>
            {showPasswordModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Enter Password</h3>
                        <input
                            type="password"
                            className="w-full p-2 mb-4 bg-gray-700 rounded text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                className="btn btn-secondary bg-red-500 hover:bg-red-600 text-white"
                                onClick={() => setShowPasswordModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white"
                                onClick={handleEnteredPassword}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <main className="flex-grow overflow-y-auto pt-24 px-8">
                {selectedTab === 'Category' && (
                    <section className="mt-8">
                        <CategoryInfo/>
                    </section>
                )}
                {selectedTab === 'Products' && (
                    <section className="mt-8">
                        <ProductsInfo/>
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;
