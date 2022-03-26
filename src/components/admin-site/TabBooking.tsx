import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonModal,
  IonRow,
  IonText,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { authApi } from "../../api";
import booking from "../../api/booking";
import DetailBooking from "./DetailBooking";
import "./TabAccount.css";

const TabBooking = () => {
  const [bookingData, setBookingData] = useState([])
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [detailId, setDetailId] = useState(0)

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
      <IonModal isOpen={showDetailModal}>
        <DetailBooking id={detailId}/>
        <IonButton onClick={()=>{setShowDetailModal(false)}}>Close</IonButton>
      </IonModal>

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
                <IonText className="account-text">
                  {booking.customer.username}
                </IonText>
              </IonCol>
              <IonCol size="3">
                <IonText className="account-text">
                  {booking.phoneNumber}
                </IonText>
              </IonCol>
              <IonCol size="3">
                <IonText className="account-text">{booking.tour.name}</IonText>
              </IonCol>
              <IonCol size="2">
                <IonButton onClick={()=>{
                  setDetailId(booking.id)
                  setShowDetailModal(true)
                }}>Detail</IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonList>
    </IonContent>
  );
};

export default TabBooking;
