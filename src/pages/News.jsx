import React, { useLayoutEffect } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import headerBackground from '../static/img/newsBack.png'
import LatestNews from '../components/LatestNews'
import Footer from '../components/Footer'
import Container from '../components/common/Container'
import {useNewsContext} from "../NewsContext";
import {prepareImageLink} from "../utils/format-link";

export default function News() {
    const navigate = useNavigate()

    const news = useNewsContext()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div>
            <div className={css(styles.main)}>
                <Header boxShadow={false} back={(news[0] && news[0].image) ? prepareImageLink(news[0].image) : headerBackground} />

                <Container>
                    <div className={css(styles.buttons)}>
                        <div className={css(styles.button)}>News</div>

                        <div
                            className={css([styles.button, styles.unActiveButton])}
                            onClick={() => navigate('/updates')}>
                            Updates
                        </div>
                    </div>
                </Container>
            </div>

            <LatestNews withPagination size={15} />

            <Footer />
        </div>

    )
}

const styles = StyleSheet.create({
    main: { position: 'relative', width: '100%', height: 'auto' },
    buttons: {
        display: 'flex',
        position: 'absolute',
        bottom: 5,
        '@media(max-width: 1286px)': {
            left: '50%',
            transform: 'translate(-50%, 0%)',
        },
        '@media(max-width: 576px)': { flexDirection: 'column' },
    },
    button: {
        width: 220,
        height: 52,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontFamily: 'BenchNine',
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: 28,
        textAlign: 'center',
        color: '#FFFFFF',
        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.35)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        border: '2px solid #606060',
    },
    unActiveButton: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        marginLeft: 16,
        transition: '0.2s',
        '@media(max-width: 576px)': {
            marginLeft: 0,
            marginTop: 16,
        },
        ':hover': {
            borderWidth: 2,
            borderColor: '#ea6f2a',
        },
    },
    background: { width: '100%', height: 553, objectFit: 'cover', zIndex: -100 },
})
