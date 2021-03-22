import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import SettingsStartGame from "./pages/Settings_start_game";
import {AnimatePresence} from "framer-motion";
import ClassicGame from "./pages/ClassicGame";
import HotGame from "./pages/HotGame";
import RandomGame from "./pages/RandomGame";
import {useEffect, useState} from 'react';
import ReactGA from 'react-ga';

export default function App() {

    const [listOfPlayer,
        setlistOfPlayer] = useState([]);

    const TRACKING_ID = "G-VV7BCGQM5L";

    useEffect(() => {
        ReactGA.initialize(TRACKING_ID);
        ReactGA.pageview(window.location.pathname);
    }, [])

    document.oncontextmenu = new Function("return false");

    return (
        <div className="app">
            <AnimatePresence>
                <Switch>
                    <Route path={'/'} component={Home} exact/>
                    <Route
                        path={'/pre-game'}
                        component={() => <SettingsStartGame
                        listOfPlayer={listOfPlayer}
                        setlistOfPlayer={setlistOfPlayer}/>}/>
                    <Route
                        path={'/classic-game'}
                        component={() => <ClassicGame listOfPlayer={listOfPlayer}/>}/>
                    <Route path={'/hot-game'} component={HotGame}/>
                    <Route path={'/random-game'} component={RandomGame}/>
                </Switch>
            </AnimatePresence>
        </div>
    );

}