import React, {useState} from 'react';
import {motion} from "framer-motion";

export default function Input({setPlayer}) {

    const [inputList, setInputList] = useState([{PlayerName: ""}]);

    const variants = {
        visible: {opacity: 1},
        hidden: {opacity: 0},
    }

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        setPlayer(list);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, {PlayerName: ""}]);
    };
    return (
        <>
            <div className="flex flex-col">
                {inputList.map((x, i) => {
                    return <div className="flex flex-row">
                        <motion.input initial="hidden"
                                      animate="visible"
                                      name="PlayerName"
                                      variants={variants}
                                      key={i} type="text"
                                      placeholder={"Joueur " + (i+1)}
                                      className="pl-3 mb-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                                      onChange={e => handleInputChange(e, i)}

                        />
                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>
                                <motion.span whileHover={{scale: 1.1}}
                                             whileTap={{scale: 0.9}}
                                             className="text-white">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </motion.span>
                            </button>}
                            {inputList.length - 1 === i && inputList.length < 8 && <button onClick={handleAddClick}>
                                <motion.span whileHover={{scale: 1.1}}
                                             whileTap={{scale: 0.9}} className="text-white">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </motion.span></button>}
                                </div>
                                </div>

                            })}

                    </div>

                    </>
                    );
                }