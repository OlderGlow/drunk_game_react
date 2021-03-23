import {
    mode_name
} from '../../models/ClassicGame_models'
import {
    question_cul_sec_solo,
    question_cul_sec_groupe,
    donneur,
    prenneur,
    duel,
    duo,
    jeuEquipe,
    hasard
} from '../../models/ClassicGame_models'

var arrayProb = [6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let newHasard = hasard.slice();
let newDonneur = donneur.slice();
let newCulSec = question_cul_sec_solo.slice()
let newPrenneur = prenneur.slice();
let newDuel = duel.slice();
let newDuo = duo.slice();
let newJeuEquipe = jeuEquipe.slice();
let newCulSecGroupe = question_cul_sec_groupe.slice();

export function randomMode() {
    var arrayNum = Math.floor(Math.random() * (arrayProb.length));
    var arrayGameNumber = arrayProb[arrayNum];
    var pickModeGame = mode_name[arrayGameNumber]
    return pickModeGame;
}

function getRandomInt(max) {
    return Math.floor(1 + Math.random() * Math.floor(max));
}

function switchPhrase(Player, Probability, ArrayData, data) {
    const random = Math.floor(Math.random() * ArrayData.length);
    if (ArrayData.length !== 0) {
        const has = ArrayData[random].replace('j1', Player[0]).replace('j2', Player[1]);
        ArrayData.splice(random, 1)
        arrayProb.splice(Probability, 1)
        return has;
    } else {
        ArrayData = data.slice();
        const has = ArrayData[random].replace('j1', Player[0]).replace('j2', Player[1]);
        ArrayData.splice(random, 1)
        arrayProb.splice(Probability, 1)
        return has;
    }
}

export function randomGorgees(Title) {
    const ri = getRandomInt(6)
    if (Title !== 'Hasard' || Title !== 'Jeu d\'équipe') {
        return;
    }
    if (ri === 1) {
        return "En cas d'échec, tu dois boire " + ri + " gorgée"
    } else {
        return "En cas d'échec, tu dois boire " + ri + " gorgées"
    }
}

export function randomPhrase(Title, Player) {
    let div = document.getElementById('divgame')
    switch (Title) {
        default:
            div.className = "h-full bg-gradient-to-br from-yellow-400 to-red-800"
            return "Pas encore implanté";
        case 'Cul sec':
            div.className = "h-full bg-gradient-to-br from-red-400 to-red-800"
            return switchPhrase(Player, 6, newCulSec, question_cul_sec_solo);
        case 'Cul sec - Groupe':
            div.className = "h-full bg-gradient-to-br from-red-600 to-pink-800"
            return switchPhrase(Player, 7, newCulSecGroupe, question_cul_sec_groupe)
        case 'Hasard':
            div.className = "h-full bg-gradient-to-br from-green-400 to-green-800"
            return switchPhrase(Player, 0, newHasard, hasard);

        case 'Donneur':
            div.className = "h-full bg-gradient-to-br from-indigo-400 to-blue-800"
            return switchPhrase(Player, 1, newDonneur, donneur);

        case 'Prenneur':
            div.className = "h-full bg-gradient-to-br from-pink-400 to-pink-800"
            return switchPhrase(Player, 2, newPrenneur, prenneur);
        case 'Duel':
            div.className = "h-full bg-gradient-to-br from-gray-400 to-purple-800"
            return switchPhrase(Player, 3, newDuel, duel);
        case 'Duo':
            div.className = "h-full bg-gradient-to-br from-gray-300 to-gray-700"
            return switchPhrase(Player, 4, newDuo, duo);
        case 'Jeu d\'équipe':
            div.className = "h-full bg-gradient-to-br from-pink-300 to-blue-700"
            return switchPhrase(Player, 5, newJeuEquipe, jeuEquipe);
    }

}

function rnd(players) {
    return Math.floor(Math.random() * players.length);
}

export function randomPlayer(players) {
    if (players) {
        let p1 = players[rnd(players)];
        let p2 = players[rnd(players)];
        while(p1 === p2){
            console.log(p1, p2)
            let r = Math.floor(Math.random() * players.length);
            p2 = players[r]
        }
        return [p1, p2];
    } else return null;
}