import React, {Component} from 'react';
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <motion.div initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}} className="h-full bg-gradient-to-br from-red-400 to-red-700">
                <div className="flex h-full items-center justify-center">
                <google-cast-launcher>Coucou</google-cast-launcher>
                    <motion.button className="text-5xl text-white font-semibold" whileHover={{scale: 1.1}}
                                 whileTap={{scale: 0.9}}>
                        <NavLink to={'/pre-game'}>Cliquez pour commencer à jouer</NavLink>
                    </motion.button>
                </div>
            </motion.div>
        );
    }
}

export default Home;