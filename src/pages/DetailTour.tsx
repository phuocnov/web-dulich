import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IncomingMessage } from "http";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { tourApi } from "../api";
const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour]: any = useState();

  async function getData(id: number) {
    try {
      const data: any = await tourApi.getToursByID(id);
      setTour(data);
      console.log(data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    const listAPI = [getData(parseInt(id))];
    async function fetchAPI() {
      await Promise.all(listAPI);
    }
    fetchAPI();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonTitle>{tour? tour.name : ""}</IonTitle>
      </IonHeader>

      <IonContent>
        <IonImg src="https://dulichviet.com.vn/images/bandidau/CH%C3%82U%20%C3%81/du-lich-indonesia.png" />
        <IonText>{tour? tour.tour : ""}</IonText>
        <IonText>{tour? tour.schedule: ""}</IonText>
        <IonText>{tour? tour.shortDescription: ""}</IonText>
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;
