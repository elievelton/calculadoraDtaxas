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
    //Registrar
    const createUser = async(data) => {
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
    // Deslogar

    const logout = () => { 
        checkCancelled();
        signOut(auth)
    }

    //login do usuario e verificações
     const login = async (data) => {
        checkCancelled();
        setLoading(true);
        setError(false);
        try {
            
            await signInWithEmailAndPassword(auth,data.email,data.password);
            setLoading(false);            
        } catch (error) {
            let messagemerro;
            if(error.message.includes("user-not-found")) {
                messagemerro = "Usuario não possui cadastro em nossa base de dados";

            }else if(error.message.includes("wrong-password")){
                messagemerro = "A senha está errada, tente novamente!";
            }else{
                messagemerro = "Ocorreu um erro, tente mais tarde!";
            }
            setError(messagemerro);
            setLoading(false);
        }
     }

    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])
    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

}