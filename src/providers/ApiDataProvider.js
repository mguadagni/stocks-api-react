import { createContext, useContext, useState } from "react";

export const ApiDataContext = createContext();
export const useApiDataContext = () => {
    return useContext(ApiDataContext);
}

const ApiDataContextProvider = (props) => {
    const [data, setData] = useState([]);
    return (
        <ApiDataContext.Provider value={{data, setData}}>
            {props.children}
        </ApiDataContext.Provider>
    )
}

export default ApiDataContextProvider