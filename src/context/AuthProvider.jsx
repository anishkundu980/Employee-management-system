import { createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'


export const AuthContext = createContext()



const AuthProvider = ({children}) => {
    const [userData,setUserData] = useState(() => {
      let { employees } = getLocalStorage()

      if (!employees) {
        setLocalStorage()
        employees = getLocalStorage().employees
      }

      return employees ?? []
    })

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData ]}>
            
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider