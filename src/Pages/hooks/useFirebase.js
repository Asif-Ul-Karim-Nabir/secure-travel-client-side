import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut  } from "firebase/auth";
import initializeAuthentication from '../Login/Firebase/Firebase.init';

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState()
    const auth = getAuth()
    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user
            setUser(user);
        })
    }
    useEffect( ()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
        })
    },[ ])
    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    } 

    return ({
        user,
        signInUsingGoogle,
        logOut
    })
};

export default useFirebase;