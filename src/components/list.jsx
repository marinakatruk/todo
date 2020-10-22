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
                            &#10004;
                        </button>
                        <button
                            onClick={() => removeItem(index)}
                            type="button"
                            className={styles.deleteButton}
                            value={item.text}
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