import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";

/* eslint-disable */
export default function Input(props) {

    const [inputList,
        setInputList] = useState([
        {
            PlayerName: ""
        }
    ]);

    const variants = {
        visible: {
            opacity: 1
        },
        hkeyden: {
            opacity: 0
        }
    }

    let storage = JSON.parse(sessionStorage.getItem('players'));

    useEffect(() => {
        if (storage) {
            let list = [...inputList];
            storage.map((p, index) => {
                list[index] = {
                    PlayerName: p
                }
                setInputList(list);
                props.setPlayer(list);
            })
        }
    }, [])

    useEffect(() => {
        if (props.player) {
            let list = [...inputList];
            props
                .player
                .map((p, index) => {
                    list[index] = {
                        PlayerName: p.PlayerName
                    }
                    setInputList(list);
                })
        }
    }, [])

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        let list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        if (value !== "") {
            props.setPlayer(list)
        }
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        const p = [...props.player];
        list.splice(index, 1);
        p.splice(index, 1)
        setInputList(list);
        props.setPlayer(list)
    };

    const handleAddClick = () => {
        setInputList([
            ...inputList, {
                PlayerName: ""
            }
        ]);
    };

    return (

        <div className="flex flex-col">
            {inputList.map((x, i) => {
                return <div key={i} className="flex flex-row justify-center  mb-3">
                    <div className="group justify-start">
                        {props.player
                            ? <motion.input
                                    initial="hkeyden"
                                    animate="visible"
                                    name="PlayerName"
                                    value={inputList[i].PlayerName}
                                    variants={variants}
                                    autoComplete={"off"}
                                    type="text"
                                    placeholder={"Joueur " + (i + 1)}
                                    onChange={e => handleInputChange(e, i)}/>
                            : <motion.input
                                initial="hkeyden"
                                animate="visible"
                                name="PlayerName"
                                autoComplete={"off"}
                                variants={variants}
                                type="text"
                                placeholder={"Joueur " + (i + 1)}
                                onChange={e => handleInputChange(e, i)}/>}
                        <span className="highlight"></span>
                        <span className="bar"></span>
                    </div>

                    <div className="btn-box ml-3">
                        {inputList.length !== 1 && <motion.button
                            className="mr10"
                            onClick={() => handleRemoveClick(i)}
                            whileHover={{
                            rotate: [0, 360]
                        }}
                            whileTap={{
                            scale: 0.9,
                            rotate: [0, 360]
                        }}>
                            <motion.span
                                whileHover={{
                                scale: 1.1
                            }}
                                whileTap={{
                                scale: 0.9
                            }}
                                className="text-white">
                                <svg
                                    className="w-12 h-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"><path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokewkeyth={2}
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </motion.span>
                        </motion.button>}
                        {inputList.length - 1 === i && inputList.length < 20 && <motion.button
                            onClick={handleAddClick}
                            whileHover={{
                            rotate: [0, 360]
                        }}
                            whileTap={{
                            scale: 0.9
                        }}>
                            <motion.span className="text-white">
                                <svg
                                    className="w-12 h-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokewkeyth={2}
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </motion.span>
                        </motion.button>}
                    </div>
                </div>

            })}

        </div>

    );
}