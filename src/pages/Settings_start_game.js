import React, {Component} from 'react';
import {motion} from "framer-motion";
import Input from "../components/pre-game/Input";
import Drunk from '../images/logo.png'
import Card from "../components/pre-game/Card";
import {Link} from "react-router-dom";

class SettingsStartGame extends Component {


    state = {};

    setMode = mode => {
        this.setState({
            mode: mode
        })
    }

    setPlayer = player => {
        this.setState({
            player: player
        })
    }

    addPlayer(){
        if(this.state.player){
            let listOfPlayer = this.state.player.map(p => p.PlayerName)
            this.props.setListOfPlayer(listOfPlayer)
        }
        else{
            alert('Il manque des joueurs')
        }
    }

    render() {
        return (
            <motion.div initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}}
                        className="h-full bg-gradient-to-tr from-purple-500 to-purple-800">
                <div className="flex h-auto items-center justify-center">
                    <div className="mt-6">
                        <img src={Drunk} alt="Logo" className="h-20 w-30"/>
                    </div>
                </div>
                <div className="max-w-sm sm:max-w-full mx-auto sm:grid grid-cols-2 h-auto mt-16">
                    <div className="flex flex-col items-center">
                        <div className="overflow-auto mx-auto" style={{width: "fit-content"}}>
                            <p className="text-2xl text-white font-semibold mb-4">Ajoutez jusqu'à 8 joueurs</p>
                            <Input player={this.state.player} setPlayer={this.setPlayer}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Card mode={this.state.mode} setMode={this.setMode}/>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center">
                    <motion.button whileHover={{scale: 1.1}}
                                   whileTap={{scale: 0.9}}
                                   className="p-4 h-24 text-2xl mt-20 mb-20 bg-white text-blue-600 rounded-xl font-semibold">

                        {this.state.mode === 1 &&
                        <Link to={'/classic-game'} onClick={() => this.addPlayer()}>Commencer une partie « Classic Drunk »</Link>}
                        {this.state.mode === 2 && <Link to={{
                            pathname:'/hot-game'
                            }}>Commencer une partie « Hot Drunk »</Link>}
                        {this.state.mode === 3 && <Link to={'/random-game'}>Commencer une partie « ?! Drunk »</Link>}
                        {this.state.mode === undefined && "Sélectionnez un mode de jeu"}
                    </motion.button>
                </div>

            </motion.div>
        );
    }
}

export default SettingsStartGame;