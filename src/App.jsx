import React, {useCallback, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Whitepaper from "./pages/Whitepaper";
import TokenInformation from "./pages/TokenInformation";
import Tokenomics from "./pages/Tokenomics";
import GithubPage from "./pages/GithubPage";
import Investements from "./pages/Investements";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Updates from "./pages/Updates";
import NewsContext from "./NewsContext";
import {useLoad} from "./requests/hooks";
import axios from "axios";

function App() {
    const [news, setNews] = useState([])

    const getNewsList = useCallback(async () => {
        const {REACT_APP_COMPANY_NAME, REACT_APP_API_URL} = process.env
        console.log(process.env)
        const newsNames = await axios.get(`${REACT_APP_API_URL || '/api'}/news`)
        setNews(newsNames.data)
    }, [])

    useEffect(() => {
        getNewsList()
    }, [])

    return (
        <NewsContext.Provider value={news}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="whitepaper" element={<GithubPage />} />
                    <Route path="token-information" element={<GithubPage />} />
                    <Route path="tokenomics" element={<GithubPage />} />
                    <Route path="faq" element={<GithubPage />} />
                    <Route path="investements" element={<GithubPage />} />
                    <Route path="news" element={<News />} />
                    <Route path="news/:name" element={<NewsDetail />} />
                    <Route path="updates" element={<Updates />} />
                    <Route path="guide" element={<GithubPage />} />
                    <Route path="contributors" element={<GithubPage />} />
                    <Route path="careers" element={<GithubPage />} />
                </Routes>
            </BrowserRouter>
        </NewsContext.Provider>
    )
}

export default App
