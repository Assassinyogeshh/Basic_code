


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style Components/AddReport.css';

function AddReport() {
    const [styles, setStyles] = useState({
        backGround: new Array(3).fill('transparent'),
        gray: new Array(3).fill('lightgray'),
        color: new Array(3).fill('gray'),
        width:new Array(3).fill('12rem'),
        boderRadius:new Array(3).fill('0px')

    });

    const changeBackground = (index) => {
        setStyles((prevStyles) => {
            const updatedStyles = {
                ...prevStyles,
                backGround: prevStyles.backGround.map((color, i) => {
                    return i === index ? 'rgb(240, 240, 240)' : 'transparent';
                }),
                color: prevStyles.color.map((color, i) => {
                    return i === index ? '#04284e' : 'gray';
                }),
                gray: prevStyles.gray.map((color, i) => {
                  return i === index ? 'darkgray' : 'lightgray';
              }),
              width: prevStyles.width.map((width, i)=>{
                return i === index ? '13.7rem' : '12rem'
              }),

              boderRadius: prevStyles.boderRadius.map((borderRadius, i)=>{
                return i === index ? '1rem' : '0px'
              })
            }              
            return updatedStyles;
        });
    };

    return (
        <>
            <div className="add_reports">
                <ul className="reports">
                    <li className='add_report'>Add Report</li>
                    <li className='high_light_word'>11th sep 2023</li>
                    <li className='link_container'>
                        <Link
                            className='remove_style'
                            onClick={() => changeBackground(0)}
                            style={{
                                backgroundColor: styles.backGround[0],
                                color: styles.color[0],
                                borderColor: styles.gray[0],
                                width:styles.width[0],
                                borderRadius:styles.boderRadius[0]
                            }}
                            to={'/workforce'}
                        >
                            Workforce
                        </Link>
                        <Link
                            className='remove_style'
                            onClick={() => changeBackground(1)}
                            style={{
                                backgroundColor: styles.backGround[1],
                                color: styles.color[1],
                                borderColor: styles.gray[1],
                                width:styles.width[1],
                                borderRadius:styles.boderRadius[1]
                            }}
                            to={'/equipment'}
                        >
                            Equipment
                        </Link>
                        <Link
                            className='remove_style'
                            onClick={() => changeBackground(2)}
                            style={{
                                backgroundColor: styles.backGround[2],
                                color: styles.color[2],
                                borderColor: styles.gray[2],
                                width:styles.width[2],
                                borderRadius:styles.boderRadius[2]
                            }}
                            to={'/consumables'}
                        >
                            Consumables
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default AddReport;
