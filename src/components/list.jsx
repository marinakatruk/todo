import React from 'react'
import styles from './list.module.scss'

const List = ({ items, removeItem, completeItem }) => {


    return (
        <ul className={styles.list}>
            {items.map((item, index) => (
                <li className={styles.listItem}
                    key={index}
                    index={index}
                >
                    <span
                        style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
                    >
                        {item.text}
                    </span>
                    <div>
                        <button
                            onClick={() => completeItem(index)}
                            type="button"
                            className={styles.completeButton}
                        >
                            Complete
                        </button>
                        <button
                            onClick={() => removeItem(index)}
                            type="button"
                            className={styles.deleteButton}
                        >
                            &times;
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default List;