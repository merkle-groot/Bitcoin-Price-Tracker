import React from 'react';
import {IonApp, IonButton, IonImg, IonIcon,IonHeader, IonToolbar, IonTitle,IonContent} from '@ionic/react'
import './App.css';
import { getBitcoinPrice } from './api/bitcoin';
import { LoadingCard } from './components/LoadingCards/LoadingCard';
import {BitcoinCard} from './components/BitcoinCard/BitcoinCard';

class App extends React.Component{
  state={
    bitcoinInfo:{},
    loading:true,
  };

  refresh=async()=>{
    this.setState({loading:true});
    const bitcoinInfo=await getBitcoinPrice(); 
    Object.keys(bitcoinInfo.bpi)
    .map((item,index)=><BitcoinCard data={bitcoinInfo.bpi[item]}/>)
    this.setState({
      bitcoinInfo,
      loading:false,
    },
      ()=>console.log(this.state),
    );
  }

  async componentDidMount(){
    const bitcoinInfo=await getBitcoinPrice(); Object.keys(bitcoinInfo.bpi)
    .map((item,index)=><BitcoinCard data={bitcoinInfo.bpi[item]}/>)
    this.setState({
      bitcoinInfo,
      loading:false,
    },
      ()=>console.log(this.state),
    );
  }

  createLoadingCard(){
    return(
      <>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
      </>
    )
  }

  createBitcoinCard(bitcoinInfo){
    return(
      Object.keys(bitcoinInfo.bpi)
      .map((item,index)=><BitcoinCard data={bitcoinInfo.bpi[item]}/>)
    )
  }

  render(){
    const {bitcoinInfo,loading}=this.state;
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
          <IonImg src={"https://www.bitcoinsolutions.ca/img/tickerImage/ticker_btc.svg"} className='bitcoin__logo' slot="start"/>
            <IonTitle slot="start" className='header_text'>Bitcoin Price Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          
          {
            loading===true?
              this.createLoadingCard():
              this.createBitcoinCard(bitcoinInfo)
          }
          <center>
            <IonButton onClick={this.refresh} color="round" className='refresh_button'>Refresh</IonButton>
          </center>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
