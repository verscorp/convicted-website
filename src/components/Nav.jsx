import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import moment from 'moment'
import { useLoad } from '../requests/hooks'

export default function Nav({ path }) {
    const { REACT_APP_COMPANY_NAME, REACT_APP_REP_NAME } = process.env

    const md = useLoad({ baseURL: `https://api.github.com/repos/${REACT_APP_COMPANY_NAME}/${REACT_APP_REP_NAME}/commits?path=${path}.md&per_page=1` })

    return (
        <div className={css(styles.wrapper)}>
            <span className={css(styles.location)}>home / {path}</span>
            {md.response && !md.loading ? (
                <span className={css(styles.date)}>
                    Page last updated: {moment(md.response[0].commit.committer.date).format('MMMM D, YYYY')}
                </span>
            ) : null}
        </div>
    )
}

const styles = StyleSheet.create({
    wrapper: { display: 'flex', flexDirection: 'column' },
    location: {
        fontWeight: 800,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    date: {
        fontWeight: 'normal',
        color: '#ADADAD',
        fontSize: 20,
        marginTop: 5,
        '@media(max-width: 678px)': {
            fontSize: 15,
        },
    },
})
