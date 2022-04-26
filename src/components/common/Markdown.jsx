import React, {Fragment, useEffect, useState} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {useLocation} from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import {baseURL} from '../../requests/axios'
import {prepareImageLink} from "../../utils/format-link";

export function MarkdownBase({md, overrides}) {
    return (
        <div className={css(styles.wrapper)}>
            {/* eslint-disable-next-line react/no-children-prop */}
            <Markdown children={md} options={{
                wrapper: Wrapper,
                overrides: {h1: Title, p: Paragraph, ul: Ul, table: Table, ol: Ol, h2: H2, h3: H2, blockquote: Quote, strong: B, ...overrides},
            }}/>
        </div>
    )
}

export function Wrapper({children}) {
    return <main className={css(styles.content)}>{children}</main>
}

export function B({children}) {
    return (
        <strong className={css(styles.b)}>{children}</strong>
    )
}

export function Title({children}) {
    const {pathname} = useLocation()
    const re = / /g

    function appendToSessionStorage() {
        const data = JSON.parse(sessionStorage.getItem(pathname)) || []
        data.push(children[0])
        const unique = data.filter((v, i, a) => a.indexOf(v) === i)
        sessionStorage.setItem(pathname, JSON.stringify(unique))
    }

    appendToSessionStorage()

    return (
        <h1 className={css(styles.title)} id={children[0].replace(re, '-')}>{children}</h1>
    )
}

export function Paragraph({children}) {
    if (children[0]?.type === 'img') {
        return <Image props={children[0].props}/>
    }

    return (
        <p className={css(styles.paragraph)}>{children}</p>
    )
}

export function Quote({children}) {
    return (
        <p className={css(styles.quote)}>{children}</p>
    )
}

export function Image({props}) {
    const imageSrc = prepareImageLink(props.src)
    const [full, setFull] = useState(false)

    return (
        <>
            {
                full &&
                <div className={css(styles.fullImageWrapper)} onClick={() => setFull(false)}>
                    <img
                        className={css(styles.fullImage)}
                        src={`${imageSrc}`}
                        alt={props.alt}

                    />
                </div>
            }
            <div className={css(styles.image)}>
                <img
                    style={{width: '100%', cursor: 'pointer'}}
                    src={`${imageSrc}`}
                    alt={props.alt}
                    onClick={() => setFull(true)}
                />
            </div>
        </>
    )
}

export function Ul({children}) {
    return (
        <ul className={css(styles.ul)}>
            {children.map((li) => (
                <li key={li.props.children[0]}>{li.props.children}</li>
            ))}
        </ul>
    )
}

export function Ol({children}) {
    console.log(children)
    return (
        <ol className={css(styles.ul)}>
            {
                children.map((li) => (
                    <li className={css(styles.li)} key={li.props.children[0]}>{li.props.children}</li>
                ))
            }
        </ol>
    )
}

export function H2({children}) {
    const re = / /g
    return (
        <h2 className={css(styles.subtitle)} id={children[0].replace(re, '-')}>{children}</h2>
    )
}

export function H3({children}) {
    const re = / /g
    return (
        <h3 className={css(styles.title)} id={children[0].replace(re, '-')}>{children}</h3>
    )
}

export function Table({children}) {
    return (
        <div className={css(styles.hack1)}>
            <div className={css(styles.hack2)}>
                <table className={css(styles.table)}>
                    {children.map((item) => (
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        <Fragment key={item.type}>
                            {item.type === 'thead' ? (
                                <Thead props={item.props.children.props.children}/>
                            ) : <Tbody props={item.props.children}/>}
                        </Fragment>
                    ))}

                    <Tfoot props={children[1].props.children[children[1].props.children.length - 1].props.children}/>
                </table>
            </div>
        </div>
    )
}

export function Thead({props}) {
    return (
        <thead>
        <tr>
            {props.map((item) => (
                <th key={item.key} className={css(styles.theadTitle)}>
                    {item.props.children[0]}
                </th>
            ))}
        </tr>
        </thead>
    )
}

export function Tbody({props}) {
    useEffect(() => {
        const data = []
        // eslint-disable-next-line no-unused-vars
        let len = null
        // eslint-disable-next-line array-callback-return
        props.map((tr) => {
            const arr = []
            // eslint-disable-next-line array-callback-return
            tr.props.children.map((item) => {
                arr.push(item.props.children[0])
            })
            data.push(arr)
            len = tr.props.children.length
        })

        sessionStorage.setItem(len > 3 ? 'table2' : 'table1', JSON.stringify(data))
    })

    return (
        <tbody>
        {props.map((tr) => (
            <tr key={tr.key}>
                {tr.props.children.map((item, i) => (
                    <th key={item.key} className={css(styles.tbodyText, i === 0 && styles.tbodyTitle)}>
                        {item.props.children[0]}
                    </th>
                ))}
            </tr>
        ))}
        </tbody>
    )
}

export function Tfoot({props}) {
    return (
        <tfoot>
        <tr>
            <th className={css(styles.tfoot)} style={{backgroundColor: 'rgba(178,205,115, 0.15)'}}>
                {props[0].props.children[0]}
            </th>

            {props.slice(1).map((item) => (
                <th key={item.key} className={css(styles.tfoot)}>
                    {item.props.children[0]}
                </th>
            ))}
        </tr>
        </tfoot>
    )
}

const styles = StyleSheet.create({
    wrapper: {width: '100%', maxWidth: 953},
    content: {width: '100%'},
    quote: {
        borderLeft: '2px solid #EC7925',
        paddingLeft: '1.5em'
    },
    title: {
        fontFamily: 'Barlow Condensed',
        color: '#ffffff',
        // wordSpacing: '0.5em',
        fontWeight: 600,
        fontSize: 40,
        marginTop: 60,
        marginBottom: 30,
        '@media(max-width: 765px)': {
            fontSize: 35,
        },
        '@media(max-width: 576px)': {
            fontSize: 30,
            justifyContent: 'flex-start',
            textAlign: 'left',
            marginLeft: 0,
        },
        ':nth-child(1)': {
            marginTop: 0
        }
    },
    subtitle: {
        fontFamily: 'Barlow Condensed',
        color: '#ffffff',
        fontWeight: 600,
        fontSize: 30,
        '@media(max-width: 765px)': {
            fontSize: 25,
        },
        '@media(max-width: 576px)': {
            fontSize: 20,
            justifyContent: 'flex-start',
            textAlign: 'left',
            marginLeft: 0,
        },
    },
    paragraph: {
        fontFamily: 'Barlow Condensed',
        color: '#828282',
        fontWeight: 400,
        // margin: 0,
        fontSize: 26,
        '@media(max-width: 576px)': {
            fontSize: 18,
            textAlign: 'left',
        },
    },
    image: {
        maxWidth: 942,
        height: 'auto',
        textAlign: 'center',
        // margin: 'auto',
        marginTop: 50,
        marginBottom: 50,
    },
    fullImageWrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        // zIndex: 1000000,
        // overflow: 'hidden',
        padding: '5em',
        boxSizing: 'border-box',
        backdropFilter: 'blur(5px)',
        height: '100%',

    },
    fullImage: {
        maxWidth: "90%",
        maxHeight: "90%",
        height: '100%',
        width: 'auto',
        bottom: "0",
        left: "0",
        margin: "auto",
        overflow: "auto",
        position: "fixed",
        right: "0",
        top: "0",
        // OObjectFit: "contain",
        objectFit: "contain"
    },
    ul: {
        margin: '1em 0em',
        fontFamily: 'Barlow Condensed',
        color: '#828282',
        fontWeight: 400,
        fontSize: 26,
        maxWidth: 928,
        textAlign: 'left',
        '@media(max-width: 476px)': {
            fontSize: 20,
            margin: 0
        },
    },
    li: {
        paddingLeft: '0.6em'
    },
    b: {
      fontWeight: 600
    },
    table: {
        margin: '50px 0',
        width: '100%',
        borderSpacing: 0,
        fontSize: 20,
        '@media(max-width: 576px)': {
            fontSize: 14,
        },
    },
    hack1: {
        display: 'table',
        tableLayout: 'fixed',
        width: '100%'
    },
    hack2: {
        display: 'table-cell',
        overflowX: 'auto',
        width: '100%',
    },
    theadTitle: {
        fontFamily: 'Circe',
        fontWeight: 500,
        // fontSize: 20,
        height: 40,
        color: '#ffffff',
        border: 2,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderBottom: 'none'
    },
    tbodyText: {
        height: 40,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#565454',
        fontFamily: 'Circe',
        fontWeight: 'normal',
        // fontSize: 20,
        color: '#fdfcfb',
    },
    tbodyTitle: {
        color: '#c2c2c2'
    },
    tfoot: {
        border: 2,
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#C3D263',
        fontFamily: 'Circe',
        fontWeight: 'normal',
        // fontSize: 20,
        color: '#D1E848',
    },
})
