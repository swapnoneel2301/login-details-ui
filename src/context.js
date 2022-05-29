import React , {useState,useContext} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children})=>{
   const [userName,setUserName] = useState((localStorage.getItem('userName')));
   const [password,setPassword] = useState('');

   const changeUserName=(newUserName)=>{
       setUserName(newUserName);
   }
   const changePassword=(newPassword)=>{
       setPassword(newPassword);
   }
   return <AppContext.Provider value={{
       userName,
       changeUserName,
       password,
       changePassword
   }}>
       {children}
   </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};
