import { createContext,useState,useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user,setUser] = useState(()=>{
        return localStorage.getItem('user')||'';
    });
    useEffect(()=>{
        if(user){
            localStorage.setItem('user', user);
        }
        else{
            localStorage.removeItem('user');
        }
    },[user]);
    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
