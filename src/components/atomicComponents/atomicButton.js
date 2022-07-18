import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const buttonStyle = createUseStyles({
    button: (props) => ({
        background: props.props.bkgColor,
        padding: '5px 15px',
        fontWeight: 'bold',
    }),
    label: (props) => ({
        color: props.props.color,
    }),
});

const AtomicButton = (props) => {
    const { label, value, bkgColor, color, isOp } = props;

    const theme = useTheme();
    // console.log(theme);
    const style = buttonStyle({props, theme});
    // console.log(typeof bkgColor);
    return (
        <>
            {/* <div className={style.btn}>{label}</div> */}
            <button className={style.button}>
                <span className={style.label}>{label}</span>
            </button>
            {/* <button className={style.btn}>{label}</button> */}
        </>
    );
};

export default AtomicButton;