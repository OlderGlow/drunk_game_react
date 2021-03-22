import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import SettingsStartGame from "./pages/Settings_start_game";
import {AnimatePresence} from "framer-motion";
import ClassicGame from "./pages/ClassicGame";
import HotGame from "./pages/HotGame";
import RandomGame from "./pages/RandomGame";
import {useState} from 'react';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-VV7BCGQM5L";
ReactGA.initialize(TRACKING_ID);

export default function App() {

    const [listOfPlayer,
        setlistOfPlayer] = useState([]);

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