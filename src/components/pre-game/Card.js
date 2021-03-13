import React from 'react';
import {motion} from "framer-motion";
import '../../index.css'


function Card({setMode}) {


    function handleClick(e, id) {
        e.preventDefault();
        setMode(id);
    }

    return (
        <div className="flex flex-col">
            <motion.button
                id="card1"
                onClick={(e) => handleClick(e, 1)}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.9}}
                className="focus-btn mt-6 sm:grid grid-cols-5 bg-white shadow-sm p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20 cursor-pointer hover:bg-green-500 hover:text-white focus:bg-green-500"
                style={{height: "fit-content"}}>

                <img
                    src="https://www.entreprendre.fr/wp-content/uploads/AdobeStock_189165550.jpg"
                    alt="Logo classic" className="w-24 h-24 rounded-lg"/>
                <div className="pt-5 sm:pt-0 sm:pl-10 col-span-3 text-left">
                    <h2 className="text-gray-800 text-left capitalize text-xl font-bold">Classic Drunk</h2>
                    Règles de jeu classiques. La partie dure environ 10 minutes. Affrontez-vous dans un jeu à boire
                    terriblement efficace.
                </div>
            </motion.button>
            <motion.button
                onClick={(e) => handleClick(e, 2)}
                id="card2"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.9}}
                className="focus-btn mt-6 sm:grid grid-cols-5 bg-white shadow-sm p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20 cursor-pointer hover:bg-green-500 hover:text-white focus:bg-green-600"
                style={{height: "fit-content"}}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Moins18.svg/269px-Moins18.svg.png"
                    alt="Logo -18" className="w-24 h-24 rounded-lg"/>
                <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3 text-left">
                    <h2 className="text-gray-800 capitalize text-xl font-bold">Hot Drunk</h2>
                    Règles de jeu hot. La partie dure environ 15 minutes. Affrontez-vous dans un jeu à boire
                    terriblement HOT.
                </div>
            </motion.button>
            <motion.button
                id="card3"
                onClick={(e) => handleClick(e, 3)}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.9}}
                className="focus-btn mt-6 sm:grid grid-cols-5 bg-white shadow-sm p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20 cursor-pointer hover:text-white hover:bg-green-500 focus:bg-green-600 focus:ring"
                style={{height: "fit-content"}}>
                <img
                    src="https://static.vecteezy.com/ti/vecteur-libre/p1/1894304-homme-avatar-pensant-avec-des-points-d-interrogation-conceptionle-gratuit-vectoriel.jpg"
                    alt="Logo wtf" className="w-24 h-24 rounded-lg"/>
                <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3 text-left">
                    <h2 className="text-gray-800 capitalize text-xl font-bold">?! Drunk</h2>
                    Règles de jeu aléatoire. Tout peut arriver. Remballez votre fierté et préparez vous à boire.
                    Survivez autant que vous pouvez.
                </div>
            </motion.button>
        </div>
    );

}

export default Card;