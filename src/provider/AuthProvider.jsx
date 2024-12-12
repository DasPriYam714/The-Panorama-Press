import React, { createContext,  useEffect, useState } from 'react'
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/Firebase.init';



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)


    // create new user
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
       
    }

    
    // user login
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    //user Signout
    const logoutUser=()=>{
        return signOut(auth)
        .then()
        .catch(error=>{
            console.log(error);
        })
    }


    // set user in the state
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, loggedUser=>{
           console.log('current user in the state:', loggedUser)
            setUser(loggedUser)
        });
        return ()=>{
            unSubscribe();
        }
    }, [])


    const authInfo ={
        user,
        createUser,
        loginUser,
        logoutUser

    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children} 
    </AuthContext.Provider>
  )
}

export default AuthProvider;
