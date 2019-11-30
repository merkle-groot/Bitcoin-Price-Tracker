import React from 'react';
import {IonCard, IonSkeletonText ,IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/react';

// import './BitCoinCard.css';

export const BitcoinCard=(props)=>(
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                {props.data.code}
            </IonCardSubtitle>
            <IonCardTitle>
                {props.data.rate_float}
            </IonCardTitle>
        </IonCardHeader>
    </IonCard>
)