import React, { useEffect, useState } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { useLoad } from '../requests/hooks'
import Container from './common/Container'
import HeaderNews from './HeaderNews'
import NewsItem from './NewsItem'
import Pagination from './common/Pagination'
import {useNewsContext} from "../NewsContext";

export default function LatestNews({ withHeader, withPagination, size }) {
    const [page, setPage] = useState(1)

    const newsVal = useNewsContext()

    const styles = StyleSheet.create({
        news: {
            marginTop: 51,
            '@media (max-width: 1200px)': {
                margin: '51px 40px 0 40px',
            },
            '@media(max-width: 576px)': {
                margin: '51px 15px 0 15px',
            },
        },
        newsContent: {
            display: 'grid',
            marginTop: 17,
            gridTemplateColumns: 'repeat(3, 1fr)',
            rowGap: '1em',
            columnGap: '50px',
            // overflow: 'hidden',
            // overflowY: 'hidden',
            '@media (max-width: 1024px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
                alignSelf: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                ...(size === 3 && { gridTemplateRows: 'repeat(1, 1fr)', gridAutoRows: 0, overflowY: 'hidden' }),
            },
            '@media(max-width: 576px)': {
                columnGap: '20px'
            },
        },
    })

    return (
        <Container>
            <div className={css(styles.news)}>
                {withHeader && <HeaderNews />}

                {newsVal.length > 0 ? (
                    <div>
                        <div className={css(styles.newsContent)}>
                            {newsVal.map((item, i) => (
                                <NewsItem key={i} item={item} />
                            ))}
                        </div>

                        {withPagination && (
                            <Pagination
                                count={newsVal.length}
                                page={page}
                                onSelect={setPage}
                                size={size}
                            />
                        )}
                    </div>
                ) : null}

            </div>
        </Container>
    )
}
