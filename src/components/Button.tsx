import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}

const Button = (props: ButtonType) => {
    const onClickHundler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHundler}>{props.name}</button>
        </div>
    );
};

export default Button;