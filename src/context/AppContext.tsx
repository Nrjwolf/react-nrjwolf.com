import { createContext } from "react"

interface AppContextInterface {
    fontColor: string
}

export const AppContext = createContext<AppContextInterface | null>(null)

type AppProviderProps = {
    children?: React.ReactNode
}

const AppProvider: React.FC<AppProviderProps> = props => {

    const context: AppContextInterface = {
        fontColor: '#a9a9b3'
    }

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider

