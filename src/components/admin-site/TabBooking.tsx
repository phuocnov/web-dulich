import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonItem,
    IonList,
    IonRow,
    IonText,
  } from "@ionic/react";
  import { useState, useEffect } from "react";
  import { authApi } from "../../api";
import booking from "../../api/booking";
  import "./TabAccount.css";
  
  const TabBooking = () => {
    const [bookingData, setBookingData] = useState([]);
  
    async function getBookingData() {
      try {
        const data: any = await booking.getBooking();
        setBookingData(data);
        console.log(data);
      } catch (error) {
        throw error;
      }
    }
  
    useEffect(() => {
      const listAPI = [getBookingData()];
      async function fetchAPI() {
        await Promise.all(listAPI);
      }
      fetchAPI();
    }, []);
    return (
      <IonContent className="container">
        <IonList>
          <IonGrid>
            <IonRow className="">
              <IonCol size="1">
                <IonText className="account-text">ID</IonText>
              </IonCol>
              <IonCol size="3">
                <IonText className="account-text">Username</IonText>
              </IonCol>
              <IonCol size="3">
                <IonText className="account-text">Phone number</IonText>
              </IonCol>
              <IonCol size="3">
                <IonText className="account-text">Tour</IonText>
              </IonCol>
              <IonCol size="2">
                <IonText className="account-text">Date start</IonText>
              </IonCol>
            </IonRow>
          {bookingData.map((booking: any) => (
            <IonRow key={booking.id}>
              <IonCol size="1">
                <IonText className="account-text">{booking.id}</IonText>
              </IonCol>
              <IonCol size="3">
                <IonText className="account-text">{booking.customer.username}</IonText>
              </IonCol>
              <IonCol size="3">
                <IonText className="account-text">{booking.phoneNumber}</IonText>
              </IonCol>
              <IonCol size="3">
                <IonText className="account-text">{booking.tour.name}</IonText>
              </IonCol>
              <IonCol size="2">
                <IonButton>Detail</IonButton>
              </IonCol>
            </IonRow>
          ))}
          </IonGrid>
        </IonList>
      </IonContent>
    );
  };
  
  export default TabBooking;
  