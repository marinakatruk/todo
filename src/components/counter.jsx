import React from 'react'

import styles from './counter.module.scss'

const Counter = ({ items, total, completed }) => {

    return (
        <div
            className={styles.itemCounter}
            style={{display: items.length === 0 ? "none" : "" }}
        >
            Total:<span>{total}</span>
            Completed:<span>{completed}</span>
      </div>
    )
}

export default Counter;