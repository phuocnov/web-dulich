import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonText,
  IonTitle,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { bookingAPI, tourApi } from "../../api";

const DetailBooking = (props: any) => {
  const [booking, setBooking]: any = useState({});

  async function getData(id: number) {
    try {
      const data: any = await bookingAPI.getBookingById(id);
      setBooking(data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    const listAPI = [getData(props.id)];
    async function fetchAPI() {
      await Promise.all(listAPI);
    }
    fetchAPI();
  }, []);

  return (
    <IonContent>
      <IonTitle>Booking detail</IonTitle>
    </IonContent>
  );
};

export default DetailBooking;
