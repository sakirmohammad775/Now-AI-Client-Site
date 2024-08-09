import { createContext, useState } from "react";
import run from "../Config/NowAI";

export const Context = createContext()

const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const dailyPara = (index, nextWord) => {

    }

    const onSent = async (prompt) => {
        setResultData('')
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await run(input)

        let responseArray = response.split("**");
        let newResponse;

        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) { // If index is even
                newResponse += responseArray[i];
            } else { 
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        let newResponse2 = newResponse.split("*").join("<br/>");
        setResultData(newResponse2);
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider