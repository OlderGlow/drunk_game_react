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
                    id={'props.card' + id}
                    key={id}
                    initial={{
                    x: 0
                }}
                    exit={{
                    x: 0
                }}
                    animate={{
                    x: [
                        -10, 0
                    ],
                    opacity: [0, 100]
                }}
                    onClick={() => addPlayer()}
                    style={{
                    height: "fit-content"
                }}>
                    <section
                        className="p-7 rounded-lg mb-6 max-w-xs mx-2"
                        style={{
                        backgroundColor: background
                    }}>
                        <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
                        <img src={img} alt="Img for props.card" className="w-full rounded-lg"/>
                        <div className="pt-5 self-center sm:pt-0 col-span-3">
                            <span className="mt-8 font-medium text-white">{description}</span>
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
            className="flex flex-col max-w-xs sm:max-w-xl">
            <div className="carousel bg-transparent relative">
                <div className="carousel-inner relative overflow-hidden w-full">
                    {props.card === 1
                        ? selectcard(1, 'Classik Drunk', Beer, "Un mode de jeu simple mais efficace. Affrontez-vous dans une partie aux règles m" +
                                "ultiples.",
                        '#FABC3D', 'classic-game')
                        : ''}
                    {props.card === 2
                        ? selectcard(2, 'Hot Drunk', Hot, "Un mode de jeu torride et revisité. Naviguez entre questions torrides et alcooli" +
                                "sées",
                        '#e91e63', 'hot-game')
                        : ''}

                    {props.card === 3
                        ? selectcard(3, 'Random?! Drunk', Random, "Un mode de jeu basé sur le hasard. Lancez les dés et priez que le jeu soit avec " +
                                "vous.",
                        '#001f3f', 'random-game')
                        : ''}

                    {props.card === 1
                        ? <motion.label
                                whileHover={{
                                scale: 1.1
                            }}
                                whileTap={{
                                scale: 0.9
                            }}
                                onClick={() => props.setCard(2)}
                                className="next control-1 w-10 h-10 mr-4 md:mr-4 absolute cursor-pointer  text-3xl font-bold text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 right-0 my-auto shadow-xl">›</motion.label>
                        : ''}

                    {props.card === 1
                        ? <motion.label
                                whileHover={{
                                scale: 1.1
                            }}
                                whileTap={{
                                scale: 0.9
                            }}
                                onClick={() => props.setCard(3)}
                                className="next control-1 w-10 h-10 ml-4 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 left-0 my-auto shadow-xl">‹</motion.label>
                        : ''}

                    {props.card === 2
                        ? <motion.label
                                whileHover={{
                                scale: 1.1
                            }}
                                whileTap={{
                                scale: 0.9
                            }}
                                onClick={() => props.setCard(1)}
                                className="next control-1 w-10 h-10 ml-4 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 left-0 my-auto shadow-xl">‹</motion.label>
                        : ''}

                    {props.card === 2
                        ? <motion.label
                                whileHover={{
                                scale: 1.1
                            }}
                                whileTap={{
                                scale: 0.9
                            }}
                                onClick={() => props.setCard(3)}
                                className="next control-1 w-10 h-10 mr-4 md:mr-4 absolute cursor-pointer  text-3xl font-bold text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 right-0 my-auto shadow-xl">›</motion.label>
                        : ''}

                    {props.card === 3
                        ? <motion.label
                                whileHover={{
                                scale: 1.1
                            }}
                                whileTap={{
                                scale: 0.9
                            }}
                                onClick={() => props.setCard(2)}
                                className="next control-1 w-10 h-10 ml-4 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 left-0 my-auto shadow-xl">‹</motion.label>
                        : ''}

                    {props.card === 3
                        ? <motion.label
                                whileHover={{
                                scale: 1.1
                            }}
                                whileTap={{
                                scale: 0.9
                            }}
                                onClick={() => props.setCard(1)}
                                className="next control-1 w-10 h-10 mr-4 md:mr-4 absolute cursor-pointer  text-3xl font-bold text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 right-0 my-auto shadow-xl">›</motion.label>
                        : ''}

                </div>
            </div>

        </motion.div>
    )
}

export default Card