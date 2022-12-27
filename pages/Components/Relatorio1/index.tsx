import { useState, useEffect } from 'react'
import Header from '../Header'
import Relatorio1 from "./Relatorio1"

export default function Relat1(){
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return(
        <>
        <Header/>
        <h1>Relatório 1</h1>
        {
           isClient && <Relatorio1/>

        }
        </>
    )
}