import {motion} from 'framer-motion'
import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom';
import {finalQuestion, hotQuestion} from '../models/HotGame_models';
/* eslint-disable */
export default function HotGame({listOfPlayer}) {

    document.body.style.backgroundColor = '#E91E63'

    const [showRegle,
        setShowRegle] = useState(true)
    const [count,
        setCount] = useState(0)
    const [player,
        setPlayer] = useState()
    const [life,
        setLife] = useState([])
    const [redirectTo,
        setRedirectTo] = useState(false)
    const [endGame,
        setEndGame] = useState(false)

    let _q;
    const players = listOfPlayer;

    const heart = () => {
        return (
            <svg
                className="w-6 h-6 inline align-baseline"
                fill="red"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        )
    }

    const end = () => {
        return <motion.div
            initial={{
            opacity: 0
        }}
            exit={{
            opacity: 0
        }}
            animate={{
            opacity: 1
        }}
            className="flex flex-col h-screen items-center justify-center">
            <p className="text-4xl text-white font-semibold">
                <span className="underline">{player.Name}</span>
                : tu as perdu
            </p>
            <p
                className="text-3xl text-center p-4 mx-10 sm:mx-0 sm:text-4xl sm:p-3 rounded bg-white text-red-600 mt-12 sm:mt-6 font-bold">
                {finalQuestion[Math.floor(Math.random() * Math.floor(finalQuestion.length))]}
            </p>
            <motion.button
                        onClick={() => restartGame()}
                        whileHover={{
                        scale: 1.1
                    }}
                        whileTap={{
                        scale: 0.9
                    }}
                        className="text-3xl mx-6 bg-white p-6 text-pink-600 rounded-xl font-semibold mt-10">Rejouer une partie</motion.button>
        </motion.div>
    }

    function removeLife(id) {
        let list = [...life];
        list[id].Life = list[id].Life - 1;
        setLife(list);
    }

    function addLife(id) {
        let list = [...life];
        list[id].Life = list[id].Life + 1;
        setLife(list);
    }

    function question() {
        let rnd = Math.floor(Math.random() * Math.floor(hotQuestion.length))
        return hotQuestion[rnd]
    }

    const showQuestion = () => {
        if (!endGame) {
            return <motion.div
            initial={{
                opacity: 0
            }}
                exit={{
                opacity: 0
            }}
                animate={{
                opacity: 1
            }}
                className="flex min-h-screen flex-col h-full items-center justify-center text-center overflow-y-none">

                <p
                    className="text-4xl lg:max-w-screen-lg mb-3 sm:mb-9 text-white font-semibold">{player.Name}</p>
                <p
                    className="text-2xl lg:max-w-screen-lg mb-12 sm:mb-9 text-gray-200 font-semibold">Tu as {[...Array(life[player.id].Life)].map((x, index) => <span key={index}>{heart()}</span>)}
                    {'\u00A0'}vies restantes
                </p>
                <p
                    className="text-3xl lg:max-w-screen-lg mx-12 sm:mx-0 sm:mb-9 text-white font-semibold text-center">{_q = question()}</p>
                <div className="flex flex-row mx-auto mt-8">
                    <motion.p
                        whileHover={{
                        scale: 1.1
                    }}
                        whileTap={{
                        scale: 0.9
                    }}
                        onClick={() => accepter(player.id)}
                        className="text-3xl items-center max-w-screen-lg mb-9 mr-3 bg-green-500 p-6 sm:p-6 rounded-xl cursor-pointer text-white font-semibold">Accepter</motion.p>
                    <motion.p
                        whileHover={{
                        scale: 1.1
                    }}
                        whileTap={{
                        scale: 0.9
                    }}
                        onClick={() => refuser(player.id)}
                        className="text-3xl max-w-screen-lg mb-9 bg-red-500 p-6 rounded-xl cursor-pointer text-white font-semibold">Refuser</motion.p>
                </div>

            </motion.div>
        } else {
            return end()
        }
    }

    function randomPlayer() {
        let random = Math.floor(Math.random() * Math.floor(life.length));
        setPlayer(life[random])
    }

    function accepter(id) {
        if (_q.includes('gagne')) {
            addLife(id)
        }
        if(_q.includes('perdre', 'contre')){
            addLife(id)
        }
        nextPlayer()
    }

    function refuser(id) {
        if (_q.includes('perd')) {
            removeLife(id)
        }
        if (life[id].Life === 0) {
            setEndGame(true)
        } else {
            nextPlayer()
        }
    }

    function nextPlayer() {
        let position = life.indexOf(player)
        if (position !== (life.length - 1)) {
            setPlayer(life[position + 1])
        } else {
            setPlayer(life[0])
        }
        setCount(count + 1)
    }

    function restartGame(){
        let life = []
        setLife(life)
        setCount(0)
        if (life.length === 0) {
            for (let i = 0; i < players.length; i++) {
                life.push({id: i, Name: players[i], Life: 3})
            }
            setLife(life)
            randomPlayer()
            setEndGame(false)
        }
    }

    useEffect(() => {
        if (listOfPlayer.length >= 2) {
            if (life.length === 0) {
                for (let i = 0; i < players.length; i++) {
                    life.push({id: i, Name: players[i], Life: 3})
                }
                setLife(life)
                randomPlayer()
            }
        } else {
            setRedirectTo(true)
        }
    }, [])

    const regles = () => {
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
                className="flex h-screen w-full">
                <div className="flex flex-col justify-center items-center text-center w-full">
                    <p className="text-4xl text-white underline font-bold">Règles du jeu</p>
                    <p className="text-3xl text-white font-semibold mt-8 mx-8 sm:mx-48 inline">Chaque joueur démarre la partie avec 3 vies
                        <span>{'\u00A0'}{heart()}</span>
                    </p>
                    <p
                        className="text-3xl text-white font-semibold mt-3 mx-8 sm:mt-2 sm:mx-48 inline">Chaque question peut avoir un impact sur vos vies</p>
                    <p
                        className="text-3xl text-white font-semibold mt-3 mx-8 sm:mt-2 sm:mx-48 inline">Le premier joueur qui n'a plus de vies doit effectuer la règle finale ultime</p>
                    <motion.button
                        onClick={() => setShowRegle(!regles)}
                        whileHover={{
                        scale: 1.1
                    }}
                        whileTap={{
                        scale: 0.9
                    }}
                        className="text-4xl mx-6 bg-white p-6 text-pink-600 rounded-xl font-semibold mt-10">Commencer la partie</motion.button>
                </div>
            </motion.div>
        )
    }

    if (redirectTo) {
        return <Redirect to="/pre-game"/>;
    }

    return (
        <div>
            {showRegle
                ? regles()
                : showQuestion()}
        </div>
    )
}
