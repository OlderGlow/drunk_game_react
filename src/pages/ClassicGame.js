/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {motion} from 'framer-motion';
import {randomMode, randomGorgees, randomPhrase, randomPlayer} from '../components/game/classic_game_algorithm'

function ClassicGame({listOfPlayer}) {

    const players = listOfPlayer;
    
    const [Player, setPlayer] = useState();
    const [Gorgees, setGorgees] = useState();
    const [Phrase, setPhrase] = useState();
    const [Title, setTitle] = useState();
    const [Count, setCount] = useState(0);
    const [NbTour] = useState(25)


    function randomGame(){
        if(Count <=NbTour && players){
            setTitle(randomMode())
            setPlayer(randomPlayer(players))
            setCount(Count+1)
        }
    }

    useEffect(() => {
        if(players)
        setTitle(randomMode())
        setPlayer(randomPlayer(players))
    }, [])

    useEffect(() => {
        if(players)
            setPhrase(randomPhrase(Title, Player))
            setGorgees(randomGorgees(Title))
        
    }, [Title, Player])



     if(players === null || players.length < 2){
        return <Redirect to="/pre-game"/>
     }   
        return (
            <motion.div id="divgame" initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}}  onClick={() => randomGame()}>
                <div className="flex flex-col h-full items-center justify-center sm:overflow-x-hidden">

                    <p className="text-7xl mb-9 text-white font-semibold">{Count <= NbTour ? Title : 'Fin du jeu'}</p>
                    <p className="text-5xl max-w-screen-lg text-center mb-9 text-white font-semibold">{Count <= NbTour ? Phrase : 'Souhaitez-vous relancer une partie ?'}</p>
                    <p className="text-2xl text-center mb-9 text-gray-300 font-semibold">{Count <= NbTour ? Gorgees : ''}</p>

                    {Count > NbTour ? 
                    <motion.button className="text-4xl text-center mb-9 bg-white rounded-xl p-3 font-semibold text-gray-600"
                                   whileHover={{scale: 1.1}}
                                   whileTap={{scale: 0.9}} 
                                   onClick={() => setCount(0)}>Relancer maintenant</motion.button> : ''}
                    <div className="relative pt-1 w-1/2">
                        <div className="overflow-hidden h-2 mb-4 w-full text-xs flex rounded bg-pink-200">
                            <motion.div animate={{width: `${Count/(NbTour+1) * 100}%`}} transition={{ type: "spring", duration: 1.2 }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"></motion.div>
                    </div>
                </div>
                </div>
                
            </motion.div>
            
        );
    }


export default ClassicGame;