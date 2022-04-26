import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import headerBackground from '../static/img/headerBackground.jpg'
import { useLoad } from '../requests/hooks'
import Content from '../components/Content'

export default function FAQ() {
    const { pathname } = useLocation()
    const path = pathname.substring(1)

    const { REACT_APP_COMPANY_NAME, REACT_APP_REP_NAME } = process.env

    const md = useLoad({ url: `${REACT_APP_COMPANY_NAME}/${REACT_APP_REP_NAME}/main/${path}.md` })

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div>
            <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Header back={headerBackground}/>
                {/*<img src={headerBackground} alt="" style={{ width: '100%', zIndex: -100 }} />*/}
            </div>

            <Content md={md} />
        </div>
    )
}
