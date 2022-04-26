import React, {useContext} from "react";

const NewsContext = React.createContext([])

export const useNewsContext = () => {
    return useContext(NewsContext)
}

export default NewsContext
