import { createContext, useState, useEffect } from "react";

interface iUserState {
    name: string,
    class: string,
    level: number
  }
  
const Context = createContext<any | null>(null);

function ContextProvider({children}: any) {

    const [firstTime, setFirstTime] = useState(true);

    const [user, setUser] = useState<iUserState>({
        name: "Default Name",
        class: "Wizard",
        level: 1
      });

    return (
        <Context.Provider value={{user, setUser, firstTime, setFirstTime}}>
            {children}
        </Context.Provider>
    )

}

export {Context, ContextProvider};