import React, { useLayoutEffect } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { useNavigate, useLocation } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import Header from '../components/Header'
import headerBackground from '../static/img/updatesBack.png'
import Footer from '../components/Footer'
import Container from '../components/common/Container'
import { useLoad } from '../requests/hooks'
import { Ul, Wrapper, Paragraph } from '../components/common/Markdown'
// import { Heading, DateHeading, Paragraph } from './NewsDetail'

function DateHeading({ children }) {
    return (
        <div>
            <h6 className={css(styles.date)}>{children}</h6>
        </div>
    )
}

function h2({ children }) {
    return (
        <h2 className={css(styles.h2)}>{children}</h2>
    )
}

function h3({ children }) {
    return (
        <h3 className={css(styles.h3)}>{children}</h3>
    )
}

function h5() {
    return (
        <div style={{ width: 3, height: 72, backgroundColor: 'black', marginLeft: -26, zIndex: 100 }} />
    )
}

export default function Updates() {
    const { pathname } = useLocation()
    const path = pathname.substring(1)
    const { REACT_APP_COMPANY_NAME, REACT_APP_REP_NAME } = process.env

    const detail = useLoad({ url: `${REACT_APP_COMPANY_NAME}/${REACT_APP_REP_NAME}/main/${path}.md` })

    const navigate = useNavigate()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div>
            <div className={css(styles.main)}>
                <Header boxShadow={false} back={headerBackground} />

                <Container>
                    <div className={css(styles.buttons)}>
                        <div
                            className={css([styles.button, styles.unActiveButton])}
                            onClick={() => navigate('/news')}>
                            News
                        </div>

                        <div className={css(styles.button)}>Updates</div>
                    </div>
                </Container>
            </div>

            {detail.response && !detail.loading ? (
                <Container>
                    <div className={css(styles.contentMain)}>
                        {/* eslint-disable-next-line react/no-children-prop */}
                        <Markdown children={detail.response} options={{
                            wrapper: Wrapper,
                            overrides: { h2, h3, h5, h6: DateHeading, ul: Ul, p: Paragraph },
                        }} />
                    </div>
                </Container>
            ) : null}

            <Footer />
        </div>

    )
}

const styles = StyleSheet.create({
    main: { position: 'relative', width: '100%', height: 'auto', marginBottom: 36 },
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
        border: '1px solid #606060',
    },
    unActiveButton: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        marginRight: 16,
        '@media(max-width: 576px)': {
            marginRight: 0,
            marginBottom: 16,
        },
    },
    background: { width: '100%', height: 553, objectFit: 'cover', zIndex: -100 },
    contentMain: { paddingLeft: 24, borderLeftColor: '#EC7925', borderLeftWidth: 1, borderLeftStyle: 'solid' },
    date: {
        fontFamily: 'BenchNine',
        fontWeight: 400,
        fontSize: 30,
        color: '#ADADAD',
        margin: 0,
    },
    h2: {
        margin: 0,
        fontFamily: 'BenchNine',
        fontWeight: 500,
        fontSize: 40,
        color: '#ECECEC',
    },
    h3: {
        fontFamily: 'Barlow Condensed',
        fontWeight: 500,
        fontSize: 30,
        color: '#ECECEC',
    },
})
