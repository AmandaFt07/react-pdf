import { useState, useEffect } from 'react'
import Header from '../Header'
import Relatorio2 from "./Relatorio2"

export default function Relat1(){
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return(
        <>
        <Header/>
        <h1>Relatório 2</h1>
        {
            isClient && <Relatorio2/>
        }
        
        </>
    )
}