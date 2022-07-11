import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const buttonStyle = createUseStyles({
    button: (props) => ({
        color: props.props.bkgColor,
        background: props.theme.color.red,
        padding: '5px 15px',
        fontWeight: 'bold',
    }),
    label: (props) => ({
        color: props.color,
    }),
});

const Button = (props) => {
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

export default Button;