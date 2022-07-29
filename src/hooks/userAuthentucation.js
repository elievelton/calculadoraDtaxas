import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut ,
    createUserWithEmailAndPassword,
    updateProfile,

} from 'firebase/auth'
import React, { useState, useEffect } from 'react';
import {db} from '../firebase/config'

export const useAuthentication = ()=>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled,setCancelled] = useState(false);
    const auth = getAuth()
    function checkCancelled() {
        if(cancelled){
            return;
        }
    }
    const createUser =async(data) => {
        checkCancelled();
        setLoading(true);
        setError(null);
        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user,{
                displayName: data.displayName
            })
            setLoading(false);
            return user;

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
            let messagemerro
            if(error.message.includes("Password")){
            messagemerro = "A senha precisa ter ao menos 6 caracteres!"
            }else if(error.message.includes("email-already")){
                messagemerro = "E-mail ja cadastrado!"
            }else{
                messagemerro = "Ocorreu um erro na base de dados, tente mais tarde!"
            }
            setLoading(false);
            setError(messagemerro)

            
        }
        
    }
    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])
    return{
        auth,
        createUser,
        error,
        loading
    }

}