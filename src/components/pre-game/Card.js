import React from 'react';
import {motion} from "framer-motion";
import '../../index.css'
import {Link} from 'react-router-dom';
import Beer from '../../images/beer-card-1.png'
import Hot from '../../images/hot-card-2.png'
import Random from '../../images/random-card-3.png'

function Card(props) {

    function addPlayer() {
        let player = sessionStorage.getItem('players')
        props.setListOfPlayer(JSON.parse(player))
    }

    const selectcard = (id, title, img, description, background, link) => {
        return <motion.div>
            <Link to={link}>
                <motion.button
                                    
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                        whileTap={{
                                        scale: 0.9
                                    }}
                    key={id}
                    onClick={() => addPlayer()}
                    style={{
                    height: "50%"
                }}>
                    <section
                        className="p-6 rounded-lg mb-6 max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl mx-2"
                        style={{
                        backgroundColor: background
                    }}>
                        
                        <div>
                                <h2 className="text-2xl font-bold mb-2 text-center text-white">{title}</h2>
                            </div>

                        <div className="flex items-center justify-center text-center w-full">
                        <img src={img} alt="Img for props.card" className="w-1/2 sm:w-full rounded-lg"/>

                        </div>

                        <div className="flex w-full">
                            <span className="mt-2 font-medium text-white">{description}</span>

                        </div>
                    </section>
                </motion.button>
            </Link>
        </motion.div>
    }

    return (
        <motion.div
            initial={{
            opacity: 0
        }}
            exit={{
            opacity: 0
        }}
            animate={{
            opacity: 1
        }}
        
            className="flex flex-col max-w-xs mx-auto sm:max-w-sm xl:max-w-xl 2xl:max-w-2xl">
            <div className="carousel bg-transparent relative">
                <div className="carousel-inner relative overflow-hidden w-full sm:grid sm:grid-cols-3">
                    {selectcard(1, 'Classik Drunk', Beer, "Un mode de jeu simple mais efficace. Affrontez-vous dans une partie aux règles m" +
                            "ultiples.",
                    '#FABC3D', 'classic-game')
}
                    {selectcard(2, 'Hot Drunk', Hot, "Un mode de jeu torride et revisité. Naviguez entre questions torrides et alcooli" +
                            "sées",
                    '#e91e63', 'hot-game')
}

                    {selectcard(3, 'Aléa Drunk', Random, "Un mode de jeu basé sur le hasard. Lancez les dés et priez que le jeu soit avec " +
                            "vous. Tout peut arriver.",
                    '#001f3f', 'random-game')
}

                </div>
            </div>

        </motion.div>
    )
}

export default Card