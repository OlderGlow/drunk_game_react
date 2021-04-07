import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import Input from "../components/pre-game/Input";
import Drunk from '../images/logo.png'
import Card from "../components/pre-game/Card";

function SettingsStartGame(props) {

    const [player,
        setPlayer] = useState([])
    const [etat,
        setEtat] = useState(false)
        
    function addPlayer() {
        if (player) {
            let _p = player.map(p => p.PlayerName)
            sessionStorage.setItem('players', JSON.stringify(_p))
        }
        setEtat(etat => !etat)
    }

    
    useEffect(() => {
        if (sessionStorage.getItem('end-game')) {
            setEtat(true)
        }
        return (() => sessionStorage.removeItem('end-game'))
    }, [])

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
            
            className="h-full bg-gradient-to-tr min-h-screen from-blue-400 to-indigo-800">
            <div className="flex h-auto items-center justify-center">
                <div className="mt-6 sm:mt-20">
                    <img src={Drunk} alt="Logo" className="h-20 w-30"/>
                </div>
            </div>

            <div
                className="max-w-xs sm:max-w-sm lg:max-w-lg md:max-w-md xl:max-w-xl w-full mx-auto h-auto mt-16"
                >
                {!etat
                    ? <div className="flex flex-col items-center">
                            <div
                                className="mx-auto"
                                style={{
                                width: "fit-content"
                            }}>
                                <p className="text-2xl sm:text-3xl mb-24 text-white font-semibold text-center">Ajoutez des joueurs pour démarrer</p>
                                <Input
                                    player={player}
                                    setPlayer={setPlayer}
                                    listOfPlayer={props.listOfPlayer}
                                    setListOfPlayer={props.setlistOfPlayer}/>
                            </div>
                        </div>
                    : ''}
                {etat
                    ? <div
                            className="flex w-max justify-center items-center"
                            >
                            <Card listOfPlayer={props.listOfPlayer} setListOfPlayer={props.setlistOfPlayer} />
                        </div>
                    : ''}
            </div>
            <div
                className="flex flex-row max-w-xs sm:max-w-sm lg:max-w-lg md:max-w-md xl:max-w-xl w-full mx-auto mt-7 mb-3 justify-center">
                {player.length >= 2
                    ? <motion.button
                            onClick={() => addPlayer()}
                            whileHover={{
                            scale: 1.1
                        }}
                            whileTap={{
                            scale: 0.9
                        }}
                            className="p-4 mb-8 text-2xl bg-white text-blue-600 rounded-xl font-semibold">
                            {!etat
                                ? "Sélectionner un mode de jeu"
                                : <span>
                                    <svg
                                        className="w-6 h-6 inline"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                                    Liste des joueurs</span>}
                        </motion.button>
                    : ''}
            </div>

        </motion.div>
    );

}

export default SettingsStartGame;