import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'

export default function Container({ children, className }) {
    return (
        <div className={css([styles.container, className])}>
            {children}
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 1285,
        margin: 'auto',
    },
})
