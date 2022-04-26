import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import {css, StyleSheet} from 'aphrodite'
import {useLoad} from '../requests/hooks'
import Header from '../components/Header'
import headerBackground from '../static/img/background.png'
import Container from '../components/common/Container'
import {MarkdownBase, Wrapper} from '../components/common/Markdown'
import Footer from '../components/Footer'
import {baseURL} from '../requests/axios'
import LatestNews from '../components/LatestNews'
import {useNewsContext} from "../NewsContext";
import {prepareImageLink} from "../utils/format-link";
import Content from "../components/Content";

function Heading({children}) {
    return (
        <div>
            <h1 className={css(styles.heading)}>{children}</h1>
        </div>
    )
}

function DateHeading({children}) {
    return (
        <div>
            <h6 className={css(styles.date)}>{children}</h6>
        </div>
    )
}

function Paragraph({children}) {
    if (children[0]?.type === 'img') {
        return <Image props={children[0].props}/>
    }

    return (
        <p className={css(styles.paragraph)}>{children}</p>
    )
}

function Image({props}) {
    const {REACT_APP_COMPANY_NAME, REACT_APP_REP_NAME} = process.env
    return (
        <div className={css(styles.image)}>
            <img
                style={{width: '100%'}}
                src={prepareImageLink(props.src)}
                alt={props.alt}/>
        </div>
    )
}

export default function NewsDetail() {
    const {name} = useParams()
    const news = useNewsContext()
    const [detail, setDetail] = useState()

    useEffect(() => {
        setDetail(news.find(n => n.name === name))
    }, [news, name])

    // const detail = useLoad({ url: `${REACT_APP_COMPANY_NAME}/${REACT_APP_REP_NAME}/main/news/${name}` }, [name])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div style={{position: 'relative'}}>
            <div className={css(styles.headerWrapper)}>
                <Header boxShadow back={(detail && detail.image) ? prepareImageLink(detail.image) : headerBackground}/>
            </div>

            {detail ? (
                <Container className={styles.wrapper}>
                    <MarkdownBase md={detail.content} overrides={{ h6: DateHeading, h1: Heading }}/>
                </Container>
            ) : null}

            <h3 className={css(styles.latestNews)}>Latest News</h3>
            <LatestNews size={3}/>
            <Footer/>
        </div>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        maxWidth: 950,
        marginTop: '-50px',
        position: 'relative',
        zIndex: 100,
        width: '94%'
    },
    heading: {
        // position: 'absolute',
        // top: 490,
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        zIndex: 10000,
        textAlign: 'center',
        fontFamily: 'BenchNine',
        fontWeight: 700,
        fontSize: 52,
        color: '#ECECEC',
        '@media (max-width: 992px)': {
            left: 0,
            transform: 'translate(0, 0)',
            fontSize: 42,
            top: 390,
        },
    },
    date: {
        fontFamily: 'BenchNine',
        fontWeight: 400,
        fontSize: 30,
        textAlign: 'center',
        color: '#ADADAD',
        margin: 0,
    },
    paragraph: {
        fontFamily: 'Barlow Condensed',
        color: '#828282',
        fontWeight: 400,
        fontSize: 22,
        '@media(max-width: 576px)': {
            width: '94%',
            marginLeft: '3%',
            fontSize: 18,
        },
    },
    image: {
        textAlign: 'center',
        // width: '100%',
        marginTop: 50,
        marginBottom: 50,
        '@media(max-width: 576px)': {
            // width: '00px',
        },
    },
    latestNews: {
        textTransform: 'uppercase',
        fontFamily: 'BenchNine',
        fontWeight: 700,
        fontSize: 24,
        marginTop: 80,
        textAlign: 'center',
        color: '#fff',
    },
    headerWrapper: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        // zIndex: 1,
        '@media(max-width: 576px)': {
            // height: '100vh',
            // zIndex: 1000000,
        },
    }
})
