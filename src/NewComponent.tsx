import React, {useState} from 'react';
import App, { FilterMoneyType} from "./App";

export type MoneyType = {
    banknots: string
    value: number
    number: string
}
export type NewComponentType = {
    currentMoney: Array<MoneyType>
    onClickHandler: (name:FilterMoneyType) => void
    money: Array<MoneyType>
}

const NewComponent = (props: NewComponentType) => {

    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoney, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoney.banknots}</span>
                            <span> {objFromMoney.value}</span>
                            <span> {objFromMoney.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: 35}}>

                <button onClick={() => props.onClickHandler('ALL')}>All</button>
                <button onClick={() => props.onClickHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => props.onClickHandler('Dollars')}>Dollars</button>
            </div>
        </div>
    );
};

export default NewComponent;