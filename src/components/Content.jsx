import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import Button from './common/Button'
import { MarkdownBase } from './common/Markdown'
import Sidebar from './Sidebar'
import Container from './common/Container'

export default function Content({ md, withSidebar = true }) {
    const { pathname } = useLocation()
    const path = pathname.substring(1)

    return (
        <Container>
            <div className={css(styles.wrapper)}>
                {withSidebar && (
                    <div className={css(styles.nav)}>
                        <Nav path={path} />

                        <a
                            href={`https://github.com/${process.env.REACT_APP_COMPANY_NAME}/${process.env.REACT_APP_REP_NAME}/blob/main/${path}.md`}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            rel="noreferrer">
                            <Button
                                text="Edit page"
                                github
                                textClass={css(styles.editText)}
                                className={css(styles.button)} />
                        </a>
                    </div>
                )}

                {md.response && !md.loading ? (
                    <div className={css(styles.content)} style={{ justifyContent: withSidebar ? 'space-between' : 'center' }}>
                        <MarkdownBase md={md.response} />

                        {withSidebar && <Sidebar />}
                    </div>
                ) : null}
            </div>
        </Container>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: '100px 0 10px 0',
        '@media(max-width: 1200px)': {
            padding: '100px 30px',
        },
        '@media(max-width: 576px)': {
            alignItems: 'center',
            padding: '30px 10px'
        },
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media(max-width: 576px)': {
            alignItems: 'center',
            margin: '0 6px'
            // justifyContent: 'space-around'
        },
    },
    button: {
        width: 287,
        height: 52,
        borderColor: '#b3b3b3',
        borderWidth: '1px',
        '@media(max-width: 768px)': {
            width: 200,
        },
        '@media(max-width: 576px)': {
            width: 150,
            height: 43,
        },
    },
    content: {
        display: 'flex',
        marginTop: 70,
        '@media(max-width: 1200px)': {
            textAlign: 'center',
        },
        '@media(max-width: 576px)': {
            width: '94%',
            marginLeft: '3%',
            marginTop: 65
        },
    },
    editText: {
        color: '#B2B2B2', fontSize: 20, margin: '0 20px 0 15px', textTransform: 'uppercase',
        '@media(max-width: 1200px)': {

        },
        '@media(max-width: 576px)': {
            fontSize: 16,
            margin: '0 0px 0 15px'
        },
    },
})
