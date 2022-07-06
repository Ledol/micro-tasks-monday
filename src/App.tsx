import React, {MouseEventHandler, useState} from 'react';
import './App.css';
import NewComponent from "./NewComponent";

export type FilterMoneyType = 'ALL' | 'RUBLS' | 'Dollars'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterMoneyType>('ALL')

    let currentMoney = money;
    if (filter === 'RUBLS') {
        currentMoney = money.filter((chooseBanknote) => chooseBanknote.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((chooseBanknote) => chooseBanknote.banknots === 'Dollars')
    }

    const onClickHandler = (name: FilterMoneyType) => {
        return setFilter(name)
    }

    return (
        <>
            <NewComponent onClickHandler={onClickHandler}
                          money={money}
                          currentMoney={currentMoney}
            />
        </>
    );
}

export default App;
