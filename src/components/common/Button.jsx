import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'
import githubIcon from '../../static/icons/github.svg'

export default function Button({ text, onClick, style, github, textStyle, className, isAbout, textClass }) {
    return (
        <button
            style={style}
            onClick={onClick}
            className={`${className} ${css(styles.button)}`}>
            {github ? <img src={githubIcon} className={css(styles.image)} alt="" /> : null}
            <span style={{ ...textStyle, fontWeight: isAbout && 400 }} className={textClass}>{text}</span>
        </button>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'BenchNine',
        // fontWeight: 800,
        fontSize: 20,
        color: 'white',
        border: 2,
        borderStyle: 'solid',
        borderRadius: 3,
        width: '100%',
        padding: 10,
        background: 'none',
        borderColor: 'rgba(167, 167, 167, 0.7)',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: '0.2s',
        '@media(max-width: 1200px)': {},
        '@media(max-width: 576px)': {

        },

        ':hover': {
            borderColor: '#ea6f2a',
            transform: 'translateY(-2px)',
        },
    },
    image: {
        width: 32,
        height: 32,
        '@media(max-width: 576px)': {
            width: 26,
            height: 26,
        },
    }
})
