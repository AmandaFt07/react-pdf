import React from "react";
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'

import MyDocument from './Documento2'

export default function Relatorio1(){
    return(
        <>
            <PDFDownloadLink document={<MyDocument/>} fileName='relatorio.pdf'>download</PDFDownloadLink>

            <PDFViewer width='100%' height='1000'>
                <MyDocument/>
            </PDFViewer>
        </>
    )
}

