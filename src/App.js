import './App.css';
import {Route, Switch} from 'react-router-dom'
import SettingsStartGame from "./pages/Settings_start_game";
import {AnimatePresence} from "framer-motion";
import ClassicGame from "./pages/ClassicGame";
import HotGame from "./pages/HotGame";
import RandomGame from "./pages/RandomGame";
import {useEffect, useState} from 'react';
import ReactGA from 'react-ga'

export default function App() {

    useEffect(() => {
        
    ReactGA.initialize('G-BJFJZE21R7');
    ReactGA.pageview(window.location.pathname);

    }, [])

    const [listOfPlayer,
        setlistOfPlayer] = useState([]);
    
    /* eslint-disable-next-line */
    document.oncontextmenu = new Function("return false");

    return (
        <div className="app">
            <AnimatePresence>
                <Switch>
                    <Route
                        path={'/'}
                        component={() => <SettingsStartGame
                        listOfPlayer={listOfPlayer}
                        setlistOfPlayer={setlistOfPlayer}/>} exact/>
                    <Route
                        path={'/classic-game'}
                        component={() => <ClassicGame listOfPlayer={listOfPlayer}/>}/>
                    <Route path={'/hot-game'} component={() => <HotGame listOfPlayer={listOfPlayer}/>}/>
                    <Route path={'/random-game'} component={() => <RandomGame listOfPlayer={listOfPlayer}/>}/>
                </Switch>
            </AnimatePresence>
        </div>
    );

}