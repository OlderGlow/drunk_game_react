import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {Redirect} from 'react-router-dom';
import Dice from 'react-dice-roll';
import {
    case1,
    case2,
    case3,
    case4,
    case5,
    case6
} from '../models/RandomGame_models';

export default function RandomGame({listOfPlayer}) {
    const players = listOfPlayer;
    const [count,
        setCount] = useState(0)
    const [player,
        setPlayer] = useState()
    const [dice,
        setDice] = useState(false)
    const [value,
        setValue] = useState(0)
    const [redirectTo,
        setRedirectTo] = useState(false)

    function randomPlayer() {
        let random = Math.floor(Math.random() * Math.floor(players.length));
        setPlayer(players[random])
    }

    function afterRolling(value) {
        setValue(value)
        setTimeout(() => setDice(true), 400)
    }

    function nextPlayer() {
        let position = listOfPlayer.indexOf(player)
        if (position !== (listOfPlayer.length - 1)) {
            setPlayer(listOfPlayer[position + 1])
        } else {
            setPlayer(listOfPlayer[0])
        }
        setDice(!dice)
        setCount(count + 1)
    }

    function backListGame() {
        sessionStorage.setItem('end-game', true)
        setCount(0)
        setRedirectTo(true)
    }

    function question() {
        switch (value) {
            case 1:
                {
                    let rnd = Math.floor(Math.random() * Math.floor(case1.length))
                    return case1[rnd]
                }
            case 2:
                {
                    let rnd = Math.floor(Math.random() * Math.floor(case2.length))
                    return case2[rnd]
                }
            case 3:
                {
                    let rnd = Math.floor(Math.random() * Math.floor(case3.length))
                    return case3[rnd]
                }
            case 4:
                {
                    let rnd = Math.floor(Math.random() * Math.floor(case4.length))
                    return case4[rnd]
                }
            case 5:
                {
                    let rnd = Math.floor(Math.random() * Math.floor(case5.length))
                    return case5[rnd]
                }
            case 6:
                {
                    let rnd = Math.floor(Math.random() * Math.floor(case6.length))
                    return case6[rnd]
                }
            default:
                break;
        }
    }
    /* eslint-disable */
    useEffect(() => {
        if (listOfPlayer.length >= 2) {
            randomPlayer()
        } else{
            setRedirectTo(true)
        }
    }, [])

    if (redirectTo) {
        return <Redirect to="/pre-game"/>;
    }

    const endGame = () => {
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
        className="flex min-h-screen flex-col h-full sm:items-center sm:justify-center text-center bg-indigo-900">
        <p className="phrase text-4xl max-w-screen-lg mb-9 text-white font-semibold">La partie est terminée.</p>
        <p className="phrase text-3xl max-w-screen-lg mb-9 text-white font-semibold">Souhaitez-vous recommencer ?</p>
        <motion.p
            whileHover={{
            scale: 1.1
        }}
            whileTap={{
            scale: 0.9
        }}
            onClick={() => setCount(0) & setDice(!dice)}
            className="phrase text-3xl max-w-screen-lg mb-9 bg-white p-6 rounded-xl cursor-pointer text-indigo-900 font-semibold">Relancer une partie</motion.p>
            <motion.p
            whileHover={{
            scale: 1.1
        }}
            whileTap={{
            scale: 0.9
        }}
            onClick={() => backListGame()}
            className="phrase text-3xl max-w-screen-lg mb-9 bg-white p-6 rounded-xl cursor-pointer text-indigo-900 font-semibold">Retour aux modes de jeu</motion.p>
    </motion.div>
    }

    const showQuestion = () => {
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
            className="flex min-h-screen flex-col h-full sm:items-center sm:justify-center text-center bg-indigo-900">
            <p className="phrase text-4xl max-w-screen-lg mb-9 text-white font-semibold">{player}</p>
            <p className="phrase text-3xl max-w-screen-lg mb-9 text-white font-semibold">{question()}</p>
            <motion.p
                whileHover={{
                scale: 1.1
            }}
                whileTap={{
                scale: 0.9
            }}
                onClick={() => nextPlayer()}
                className="phrase text-3xl max-w-screen-lg mb-9 bg-white p-6 rounded-xl cursor-pointer text-indigo-900 font-semibold">Joueur suivant</motion.p>
        </motion.div>
    }

    return (
        <div
            className="flex min-h-screen flex-col h-full items-center justify-center text-center bg-indigo-900 overflow-y-none">
            {dice & count <= 25
                ? showQuestion()
                : ''}
            {count > 25 ? endGame() : ''}
            {!dice & count <= 25
                ? <motion.div
                        initial={{
                        opacity: 0
                    }}
                        exit={{
                        opacity: 0
                    }}
                        animate={{
                        opacity: 1
                    }}
                        className="flex flex-col h-full ml-6 mr-6 text-center text-white text-3xl font-semibold justify-center">{player + ' '}
                        : clique sur le dé pour commencer...
                        <div className="mt-24"><Dice
                            rollingTime={'1400'}
                            size={'150'}
                            onRoll={(value) => afterRolling(value)}/></div>
                    </motion.div>
                : ''}

        </div>

    )
}