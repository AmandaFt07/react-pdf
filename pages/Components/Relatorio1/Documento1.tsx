import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import scoutbt from '../../../data/scoutbt.json'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#f9cf59ff',
    width: 297,
    height: 210,
  },
  sectionBlue: {
    padding: '30 50 0',
    width: '90%',
    backgroundColor: '#073763ff',
    height: 250,
    margin:'50 auto 0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  boxTop:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  boxTopText:{
    display: 'flex',
    flexDirection: 'column'
  },
  sectionWhite:{
    padding: '30 50 20',
    width: '90%',
    backgroundColor: '#fff',
    margin: '0 auto'
  },
  text20:{
    fontSize: '15px'
  },
  mb5:{
    marginBottom:'5px',
  },
  image: {
    width: 100,
    marginRight: 50
  },
  row:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  column:{
    display: 'flex',
    flexDirection:'column'
  }
});

// Create Document Component
export default function MyDocument(){
    const P1_point_Set1 = 5
        , P2_point_Set1 = 7
        , P1_point_Set2 = 7
        , P2_point_Set2 = 5
        , P1_point_Set3 = 3
        , P2_point_Set3 = 6

    return(
    <Document>
        <Page size="A4" style={[styles.page, styles.column]}>
          <View style={styles.sectionBlue}>
            <View style={[styles.boxTop, {marginBottom: '20px'}]}>
              <Image
                style={styles.image}
                src="/logobt.png"
              />
              <View style={styles.boxTopText}>
                <Text style={[styles.text20, styles.mb5, {color:'#fff'}]}>Torneio: Point</Text>
                <Text style={[styles.text20, styles.mb5, {color:'#fff'}]}>Data: 20/12/22</Text>
                <Text style={[styles.text20, styles.mb5, {color:'#fff'}]}>Autor(a): José Ricardo</Text>
              </View>
            </View>
            <View style={[styles.boxTop, {justifyContent:'space-between'}]}>
                <View style={styles.column}>
                  <Text style={{color:'#fff'}}>Fausto Silva</Text>
                  <Text style={{color:'#fff'}}>Alex Moura</Text>
                </View>
                <View style={styles.column}>
                  <View style={styles.row}>
                    <Text style={{color: P1_point_Set1 > P2_point_Set1 ? '#f9cf59ff' : '#fff'}}>{P1_point_Set1}</Text>
                    <Text style={{color:'white'}}>&nbsp;-&nbsp;</Text>
                    <Text style={{color: P2_point_Set1 > P1_point_Set1 ? '#f9cf59ff' : '#fff'}}>{P2_point_Set1}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={{color: P1_point_Set2 > P2_point_Set2 ? '#f9cf59ff' : '#fff'}}>{P1_point_Set2}</Text>
                    <Text style={{color:'white'}}>&nbsp;-&nbsp;</Text>
                    <Text style={{color: P2_point_Set2 > P1_point_Set2 ? '#f9cf59ff' : '#fff'}}>{P2_point_Set2}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={{color: P1_point_Set3 > P2_point_Set3 ? '#f9cf59ff' : '#fff'}}>{P1_point_Set3}</Text>
                    <Text style={{color:'white'}}>&nbsp;-&nbsp;</Text>
                    <Text style={{color: P2_point_Set3 > P1_point_Set3 ? '#f9cf59ff' : '#fff'}}>{P2_point_Set3}</Text>
                  </View>
                </View>
                <View style={styles.column}>
                  <Text style={{color:'#fff'}}>Renan Ferraz</Text>
                  <Text style={{color:'#fff'}}>Alberto Silva</Text>
                </View>
            </View>
          </View>
          
          <View style={styles.sectionWhite}>
            {
              scoutbt.map((item, index) => 
                <View style={[styles.boxTop, {justifyContent:'space-between', borderBottom:'1px solid #000', padding:'15 10'}]} key={index}>
                  <Text>{item.point_P1}</Text>
                  <Text>{item.type}</Text>
                  <Text>{item.point_P2}</Text>
                </View>
              )
            }
          </View>
          
        </Page>
    </Document>
    )

}