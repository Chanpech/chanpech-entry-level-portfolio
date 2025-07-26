import React from "react";

const BuyMeCoffee: React.FC = () =>{
    return (
        <div className="p-4 rounded-xl shadow-md bg-gray-200 text-center">
            <h2 className="text-lg font-bold mb-2">Support My Work ☕</h2>
            <p className="mb-4 text-sm text-gray-600">Love what I do? Consider buying me a coffee!</p>
            <a
                href="https://buymeacoffee.com/damian.nul_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
                Buy Me a Coffee
            </a>
        </div>
    )
    
}

export default BuyMeCoffee;
