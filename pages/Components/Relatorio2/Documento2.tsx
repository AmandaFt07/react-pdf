import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import nf from '../../../data/nf.json'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    paddingTop: 20,
  },
  head: {
    margin: 0,
    padding: 10,
    width: '100%',
    height: 120,
    borderBottom:'1px dotted #537d8d',
  },
  container:{
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50
  },
  colum:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  row:{
    display: 'flex',
    flexDirection: 'row'

  }
});

// Create Document Component
export default function MyDocument(){
    return(
    <Document>
        <Page size="A4" style={styles.page}>
        <View style={[styles.head, {height: 100}]}>
          <View style={styles.container}>
            <View style={[styles.colum, {marginRight: 30}]}>
              <Image
                    style={styles.image}
                    src="/logo.png"
                  />
              <Text>NFC-e</Text>
            </View>
            <View style={styles.colum}>
              <Text>CNPJ: </Text>
              <Text>Endereço: </Text>
            </View>
          </View>
        </View>
        <View style={[styles.head, {justifyContent:'center', alignItems:'center'}]}>
          <Text style={{width:'75%', textAlign:'center', marginBottom:'10px'}}>DANFE NFC-e Documento Auxiliar da Nota Fiscal de <br></br> Consumidor Eletrônica</Text>
          <Text style={{fontSize:'15px'}}>NFC-e não permite aproveitamento de crédito de ICMS</Text>
        </View>

        <View style={[styles.colum, {paddingTop:20}]}>
          <View style={[styles.row, {width:'90%', justifyContent:'space-between', borderBottom:'1px dotted #537d8d'}]}>
            <Text style={{width: 70, borderRight:'1px dotted #537d8d', textAlign:'center'}}>Código</Text>
            <Text style={{width: 120, borderRight:'1px dotted #537d8d', textAlign:'center'}}>Descrição</Text>
            <Text style={{width: 50, borderRight:'1px dotted #537d8d', textAlign:'center'}}>Qtde</Text>
            <Text style={{width: 50, borderRight:'1px dotted #537d8d', textAlign:'center'}}>Un</Text>
            <Text style={{width: 60, borderRight:'1px dotted #537d8d', textAlign:'center'}}>VL Unit</Text>
  T         <Text style={{width: 60, textAlign:'center'}}>VL total</Text>
          </View>

          {
            nf.map((item, index)=> {
              return(
                <View style={[styles.row, {width:'90%', justifyContent:'space-between'}]} key={index}>
                  <Text style={{width: 70, borderRight:'1px dotted #537d8d', textAlign:'center', fontSize:'15px'}}>{item.codigo}</Text>
                  <Text style={{width: 120, borderRight:'1px dotted #537d8d', textAlign:'center', fontSize:'15px'}}>{item.descricao}</Text>
                  <Text style={{width: 50, borderRight:'1px dotted #537d8d', textAlign:'center', fontSize:'15px'}}>{item.quantidade}</Text>
                  <Text style={{width: 50, borderRight:'1px dotted #537d8d', textAlign:'center', fontSize:'15px'}}>{item.quantidade}</Text>
                  <Text style={{width: 60, borderRight:'1px dotted #537d8d', textAlign:'center', fontSize:'15px'}}>{item.valor_unid}</Text>
        T         <Text style={{width: 60, textAlign:'center', fontSize:'15px'}}>{item.valor_total}</Text>
                </View>
              )
            })
          }

          <View style={[styles.row, {width:'90%', justifyContent:'space-between', borderTop:'1px dotted #537d8d', marginTop: 20, paddingTop: 20}]}>
            <Text>Quantidade total de itens: </Text>
            <Text style={{fontSize:'15px'}}>4</Text>
          </View>
          <View style={[styles.row, {width:'90%', justifyContent:'space-between', marginTop: 10}]}>
            <Text>Valor Total R$: </Text>
            <Text style={{fontSize:'15px'}}>36,38</Text>
          </View>
          <View style={[styles.row, {width:'90%', justifyContent:'space-between', marginTop: 10}]}>
            <Text>Forma de pagamento </Text>
            <Text>Valor pago</Text>
          </View>
          <View style={[styles.row, {width:'90%', justifyContent:'space-between', paddingBottom: 20 ,marginTop: 5, borderBottom:'1px dotted #537d8d'}]}>
            <Text style={{fontSize:'15px'}}>01-Dinheiro</Text>
            <Text style={{fontSize:'15px'}}>36,38</Text>
          </View>
          <View style={[styles.row, {width:'90%', justifyContent:'space-between', paddingBottom: 5,marginTop: 5, borderBottom:'1px dotted #537d8d'}]}>
            <Text style={{fontSize:'15px'}}>Inf. dos Tributos Totais Incidentes (Lei Federal 12.741/2012)</Text>
            <Text style={{fontSize:'15px'}}>5,52</Text>
          </View>
          <View style={[styles.row, {width:'90%', justifyContent:'space-between', paddingBottom: 5,marginTop: 5, borderBottom:'1px dotted #537d8d'}]}>
            <Text style={{fontSize:'15px'}}>Nº 5096</Text>
            <Text style={{fontSize:'15px'}}>Série: 101</Text>
            <Text style={{fontSize:'15px'}}>Data de emissão:</Text>
            <Text style={{fontSize:'15px'}}>03/03/2016 14:15:39</Text>
          </View>
        </View>

        
        </Page>
    </Document>
    )

}