import React from 'react';
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";

function Home() {

        return (
            <motion.div initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}} className="h-full min-h-screen bg-gradient-to-br from-red-400 to-red-700">
                <NavLink to={'/pre-game'}>
                <div className="flex h-full min-h-screen items-center justify-center">
                    <motion.button className="text-5xl text-white font-semibold" whileHover={{scale: 1.1}}
                                 whileTap={{scale: 0.9}}>
                        Cliquez pour démarrer une partie
                    </motion.button>
                </div>
                </NavLink>
            </motion.div>
        );
    
}

export default Home;