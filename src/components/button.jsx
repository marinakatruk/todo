import React from 'react'

import styles from './button.module.scss'


const Button = ({ type, text, color, onClick }) => {
    
    return (
        <button
            type={type}
            className={styles.button}
            style={{ backgroundColor: `${color}`}}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;