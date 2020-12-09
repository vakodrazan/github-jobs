import React, { createContext, useEffect, useReducer } from 'react'

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const [ state, dispatch ] = useReducer((state, action) => {
        switch (action.type) {
            case "JOB_TITLE": {
                return {
                    ...state,
                    loading: false,
                    githubJobs: action.githubJobs
                }
            }
            case "FILTER_BY_KEYWORDS": {
                return {
                    ...state,
                    loading: false,
                    githubJobs: action.githubJobs
                }
            }
            case "SEARCH_BY_LOCATION": {
                return {
                    ...state,
                    loading: false,
                    githubJobs: action.newJobs
                }
            }
            case "JOBS_FILTER": {
                return {
                    ...state,
                    loading: false,
                    githubJobs: action.data
                }
            }
            default: {
                return state
            }
        }
    }, {
        githubJobs: [],
        loading: true
    })
    const END_POINT = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
    async function fetchJobs() {
        const res = await fetch(END_POINT);
        const data = await res.json();
        dispatch({ type: "JOB_TITLE", githubJobs: data })
    }
    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContextProvider, GlobalContext }
