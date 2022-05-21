import React from 'react';
import { Column, Row } from 'simple-flexbox';

import './menuitem.scss'

// const useStyles = createUseStyles({
//     activeContainer: {
//         backgroundColor: ({ theme }) => theme.color.paleBlueTransparent
//     },
//     container: {
//         display: 'flex',
//         height: 56,
//         cursor: 'pointer',
//         '&:hover': {
//             backgroundColor: ({ theme }) => theme.color.paleBlueTransparent
//         },
//         paddingLeft: ({ level }) => 32 * level,
//         transition: 'all 0.2s ease-in-out'
//     },
//     leftBar: {
//         borderLeft: ({ theme, level }) =>
//             level > 1 ? 'none' : `3px solid ${theme.color.darkGrayishBlue}`
//     },
//     title: {
//         fontSize: 16,
//         lineHeight: '20px',
//         letterSpacing: '0.2px',
//         color: ({ theme, isActive }) => (isActive ? theme.color.paleBlue : theme.color.grayishBlue),
//         marginLeft: 24
//     }
// });

function MenuItem({ id, icon: Icon, title, isActive, onClick }) {

    function onItemClicked(e) {
        if (onClick) {
            onClick(e);
        }
        // onItemClick();
    }

    return (
        <Column key={id} className='menuitem-column'>
            <Row vertical='center' onClick={onItemClicked} className='menuitem-row'>
                <div className='menuitem-icon'><Icon fill={isActive ? 'white' : '#6F6C99'} opacity='1'/></div>
                <span className='menuitem-title' style={{color: isActive ? 'white' : '#6F6C99'}}>{title}</span>
            </Row>
        </Column>
    );
}

export default MenuItem;
