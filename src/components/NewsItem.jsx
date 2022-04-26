import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react'
import { css, StyleSheet } from 'aphrodite'
import { useNavigate } from 'react-router-dom'
import headerBackground from '../static/img/background.png'
import moment from "moment";
import {baseURL} from "../requests/axios";
import {prepareImageLink} from "../utils/format-link";

export default function NewsItem({ item }) {
    const descRef = useRef(null)
    const navigate = useNavigate()

    const styles = StyleSheet.create({
        newsContentItem: {
            width: '100%',
            height: 252,
            // marginBottom: 30,
            backgroundImage: `url(${item.image ? prepareImageLink(item.image) : headerBackground})`,
            backgroundPosition: 'center',
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            overflow: 'hidden',
            borderBottomColor: '#A7A7A7',
            backgroundSize: 'cover',
            boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, 0.25)',
            transition: '0.3s',
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'flex-end',
            cursor: 'pointer',
            '@media (max-width: 1200px)': {
                maxWidth: 300,
            },
            '@media (max-width: 992px)': {
                maxWidth: 280,
                // margin: '18px',
            },
            '@media (max-width: 768px)': {
                maxWidth: 360,
            },
            '@media(max-width: 576px)': {
                // marginLeft: '15px',
                // maxWidth: 158,
                height: 175,
                borderBottomWidth: 2
            },
            ':hover': {
                // transform: 'scale(1.1)',
            },
        },
        newsHover: {
            position: 'relative',
            padding: '200px 20px 20px 15px',
            height: '100%',

            // animation: 'show-down 1s forwards',
            // transform: `translateY(${descRef.current?.clientHeight + 20}px)`,
            transition: '0.4s',
            ':hover': {
                height: '100%',
                // padding: '70px 20px 20px 15px',
                transform: 'translateY(0px)',
                opacity: 1,
                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
            '@media(max-width: 576px)': {
                padding: '135px 15px 10px 15px',
                transform: `translateY(0px)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                boxShadow: '0px -80px 16px -10px rgba(0, 0, 0, 0.9) inset'
            },
        },
        newsContentItemTitle: {
            fontSize: 20,
            color: '#A7A7A7',
            fontWeight: 800,
            '@media(max-width: 576px)': {
                fontSize: 16,
            }
        },
        description: {
            fontFamily: 'Barlow Condensed',
            fontWeight: 'normal',
            // transform: 'translateY(80px)',
            fontSize: 18,
            // height: 100,
            color: '#969696',
            // marginTop: 30,
            display: 'block',
            // animation: 'show-down 1s forwards',
            '@media(max-width: 1024px)': {
                display: 'none'
            }
        },
        grid: {
            display: 'grid',
            // transform: 'translateY(108px)',
        }
    })

    const [height, setHeight] = useState(0)

    useEffect(() => {
        console.log(descRef.current?.clientHeight)
        if (height === 0) {
            setHeight(descRef.current?.clientHeight || 0)
        }
    }, [descRef.current?.clientHeight])

    const goTo = () => {
        navigate(`/news/${item.name}`)
        // console.log(descRef.current.clientHeight)
    }

    if (!item) return null

    return (
        <div className={css(styles.newsContentItem)} onClick={goTo}>
            <div className={css(styles.newsHover)} style={{ transform: `translateY(${height + 20}px)` }}>
                <span className={css(styles.newsContentItemTitle)}>{moment(item.date).format('MMMM DD, yyyy')}</span>
                <span className="newsContentItemDescr">
                    {item.header}
                </span>
                <span
                    className={css(styles.description)}
                    ref={descRef}
                    // style={{ height: `${descRef.current?.clientHeight}px` }}
                >
                    { item.desc }...
                </span>
            </div>
        </div>
    )
}
