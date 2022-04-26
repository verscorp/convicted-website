import React, {useLayoutEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useLoad} from "../requests/hooks";
import Header from "../components/Header";
import headerBackground from "../static/img/headerBackground.jpg";
import Content from "../components/Content";
import {Helmet} from "react-helmet";

const GithubPage = () => {
    const { pathname } = useLocation()
    const path = pathname.substring(1)

    const { REACT_APP_COMPANY_NAME, REACT_APP_REP_NAME } = process.env

    const md = useLoad({ url: `${REACT_APP_COMPANY_NAME}/${REACT_APP_REP_NAME}/main/${path}.md` })

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <Helmet>
                <title>{path}</title>
                <meta name="description" content="Page desctiption" />
            </Helmet>
            <div>
                <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                    <Header back={headerBackground} imageFull/>
                </div>

                <Content md={md} />
            </div>
        </>
    )
}

export default GithubPage;
