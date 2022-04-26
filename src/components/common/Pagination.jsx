import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'
import back from '../../static/icons/left-arrow.png'
import next from '../../static/icons/right-arrow.png'

export default function Pagination({ page, count, size = 15, onSelect }) {
    const pagesNumber = Math.ceil(count / size)

    if (count <= size) {
        return null
    }

    return (
        <nav className={css(styles.pagination)}>
            {page - 1 > 0 ? (
                <div className={css(styles.item)} onClick={() => onSelect(page - 1)}>
                    <img src={back} alt="Back" className={css(styles.icon)} />
                </div>
            ) : null}

            {[...Array(pagesNumber).keys()].map((i) => (
                <div
                    className={css(styles.item)}
                    key={i}
                    onClick={() => onSelect(i + 1)}
                    style={{ backgroundColor: page === i + 1 ? '#F4673A' : '#707070' }}>
                    {i + 1}
                </div>
            ))}

            {page < pagesNumber ? (
                <div className={css(styles.item)} onClick={() => onSelect(page + 1)}>
                    <img src={next} alt="Next" className={css(styles.icon)} />
                </div>
            ) : null}
        </nav>
    )
}

const styles = StyleSheet.create({
    pagination: {
        marginTop: 60,
        display: 'flex',
        justifyContent: 'center',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#707070',
        width: 36,
        height: 36,
        margin: '0 4px',
        fontFamily: 'Do Hyeon',
        fontSize: 20,
        cursor: 'pointer',
    },
    icon: {
        width: 16,
        height: 16,
        objectFit: 'cover',
    },
})
