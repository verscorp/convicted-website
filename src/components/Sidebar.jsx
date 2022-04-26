import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'

export default function Sidebar() {
    const { pathname } = useLocation()
    const data = JSON.parse(sessionStorage.getItem(pathname)) || []
    const re = / /g

    return (
        <div className={css(styles.wrapper)}>
            <span className={css(styles.title)}>
                On this page
            </span>

            <div className={css(styles.links)}>
                {data.map((item) => (
                    <a
                        key={item}
                        href={`${pathname}#${item.replace(re, '-')}`}
                        className={css(styles.linkWrap)}>
                        <span className={css(styles.link)}>{item}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 265,
        borderLeftWidth: 1,
        borderLeftStyle: 'solid',
        borderLeftColor: '#4A4A4A',
        height: 717,
        position: 'sticky',
        top: 40,
        padding: '0 0 0 17px',
        '@media(max-width: 1200px)': {
            display: 'none',
        },
    },
    title: { fontFamily: 'Barlow Condensed', fontWeight: 500, fontSize: 20, color: '#ffffff', textTransform: 'uppercase' },
    links: { display: 'flex', flexDirection: 'column' },
    linkWrap: { textDecoration: 'none', marginTop: 5 },
    link: {
        fontFamily: 'Barlow Condensed',
        color: '#949494',
        fontSize: 20,
        fontWeight: 'normal',
        transition: '0.3s',
        ':hover': {
            color: 'white',
        },
    },
})
