/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {motion} from 'framer-motion';
import {randomMode, randomGorgees, randomPhrase, randomPlayer, restartGame} from '../components/game/classic_game_algorithm'

function ClassicGame({listOfPlayer}) {

    const players = listOfPlayer;
    const [Player,
        setPlayer] = useState();
    const [Gorgees,
        setGorgees] = useState();
    const [Phrase,
        setPhrase] = useState();
    const [Title,
        setTitle] = useState();
    const [Count,
        setCount] = useState(0);
    const [NbTour] = useState(25)
    const [redirectTo,
        setRedirectTo] = useState(false)

    function randomGame() {
        if (Count <= NbTour && players) {
            setTitle(randomMode())
            setPlayer(randomPlayer(players))
            setCount(Count + 1)
        }
    }

    function backListGame() {
        sessionStorage.setItem('end-game', true)
        restartGame(setCount(0))
        setRedirectTo(true)
    }

    useEffect(() => {
        if (players.length >= 2) {
            setTitle(randomMode())
            setPlayer(randomPlayer(players))
        } else {
            return setRedirectTo(true)
        }
    }, [])

    useEffect(() => {
        if (players.length >= 2) {
            setPhrase(randomPhrase(Title, Player))
            setGorgees(randomGorgees(Title))
        } else {
            return setRedirectTo(true)
        }
    }, [Title, Player])

    if (redirectTo) {
        return <Redirect to="/pre-game"/>;
    }

    return (
        <motion.div
            id="divgame"
            initial={{
            opacity: 0
        }}
            exit={{
            opacity: 0
        }}
            animate={{
            opacity: 1
        }}
            onClick={() => randomGame()}>

            <div
                className="flex min-h-screen flex-col h-full sm:items-center sm:justify-center text-center">

                <p className="title text-7xl mb-9 text-white font-semibold">{Count <= NbTour
                        ? Title
                        : 'Fin du jeu'}</p>
                <p className="phrase text-3xl max-w-screen-lg mb-9 text-white font-semibold">{Count <= NbTour
                        ? Phrase
                        : 'Souhaitez-vous rejouer ?'}</p>
                <p className="gorgees text-2xl mx-auto mb-9 text-gray-300 font-semibold">{Count <= NbTour
                        ? Gorgees
                        : ''}</p>

                <div className="countbar relative pt-1 w-1/2">
                    <div className="overflow-hidden h-2 mb-4 w-full text-xs flex rounded bg-white">
                        <motion.div
                            animate={{
                            width: `${Count / (NbTour + 1) * 100}%`
                        }}
                            transition={{
                            type: "spring",
                            duration: 1.2
                        }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"></motion.div>
                    </div>
                </div>
                <div className="grid grid-cols-2 w-1/3">
                    {Count > NbTour
                        ? <motion.button
                                className="text-3xl text-center mr-3 bg-white rounded-xl p-3 font-semibold text-gray-600"
                                whileHover={{
                                scale: 1.1
                            }}
                                whileTap={{
                                scale: 0.9
                            }}
                                onClick={() => restartGame(setCount(0))}>Relancer une partie</motion.button>
                        : ''}
                    {Count > NbTour
                        ? <motion.button
                                className="text-3xl text-center bg-white rounded-xl p-3 font-semibold text-gray-600"
                                whileHover={{
                                scale: 1.1
                            }}
                                whileTap={{
                                scale: 0.9
                            }}
                                onClick={() => backListGame()}>Retour aux modes de jeu</motion.button>
                        : ''}
                </div>
            </div>

        </motion.div>

    );
}

export default ClassicGame;