import React from 'react';
import s from './NewComponent.module.css'

type CarType = {
    manufacturer: string
    model: string
}

type NewComponentType = {
    topCars: Array<CarType>
}

const NewComponent = (props: NewComponentType) => {
    return (
        <table className={s.table}>
            {props.topCars.map((ObjectCar, index) => {
                return (
                    <tr key={index}>
                        <th>{ObjectCar.manufacturer}</th>
                        <th> {ObjectCar.model}</th>
                    </tr>
                )
            })}
        </table>
    );
};

export default NewComponent;