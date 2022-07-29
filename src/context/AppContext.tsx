import { createContext } from "react"

export interface AppContextInterface {
    fontColor: string
    highlightColor: string
}

export const AppContext = createContext<AppContextInterface | null>(null)

type AppProviderProps = {
    children?: React.ReactNode
}

const AppProvider: React.FC<AppProviderProps> = props => {

    const context: AppContextInterface = {
        fontColor: '#a9a9b3',
        highlightColor: '#fff'
    }

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider

