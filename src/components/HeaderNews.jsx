import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { Link } from 'react-router-dom'

export default function HeaderNews() {
    return (
        <div className={css(styles.newsTitle)}>
            <span style={{ fontSize: 30, textTransform: 'uppercase' }}>LATEST NEWS</span>
            <Link to="/news" className={css(styles.newsView)}>
                <text className={css(styles.newsViewText)}>
                    VIEW ALL
                </text>
                <div style={{
                    width: 27,
                    height: 13,
                    marginLeft: 12,
                    cursor: 'pointer',
                }}>
                    <svg width="29" height="13" viewBox="0 0 29 13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.4472 6.40747L18.4472 0.633968V12.181L28.4472 6.40747ZM0.868164 7.40747H19.4472V5.40747H0.868164V7.40747Z" />
                    </svg>
                </div>
            </Link>
        </div>
    )
}

const styles = StyleSheet.create({
    newsTitle: {
        display: 'flex',
        flexDirection: 'row',
    },
    newsView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
        fill: '#A7A7A7',
        color: '#A7A7A7',
        ':hover': {
            color: 'white',
            fill: 'white',
        },
    },
    newsViewText: {
        fontSize: 30,
        marginLeft: 17,
        fontWeight: 'normal',
        fontFamily: 'BenchNine',
        transition: '0.2s',
    },
})
