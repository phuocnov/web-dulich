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
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonModal,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IncomingMessage } from "http";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { bookingAPI, tourApi } from "../api";
const DetailPage = () => {
  const { id } = useParams<{ id: any }>()
  const [showModal, setShowModal] = useState(false)
  const [tour, setTour]: any = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  async function getData(id: number) {
    try {
      const data: any = await tourApi.getToursByID(id);
      setTour(data);
    } catch (error) {
      throw error;
    }
  }

  async function booking(params:any) {
    try {
      await bookingAPI.booking(params)
    }catch(error){

    }
  }

  useEffect(() => {
    const listAPI = [getData(id)];
    async function fetchAPI() {
      await Promise.all(listAPI);
    }
    fetchAPI();
  }, []);

  return (
    <IonPage>
      <IonModal isOpen={showModal}>
        <form className="form" onSubmit={handleSubmit((data: any) => {
          const params = {
            phoneNumber: data.phoneNumber,
            tourId: id
          }
          booking(params)
          setShowModal(false)
        })}>
          <IonLabel>Phone number</IonLabel>
          <IonInput type="text" {...register("phoneNumber")} />
          <IonButton type="submit">BOOK NOW!!</IonButton>
        </form>
      </IonModal>

      <IonHeader>
        <IonTitle>{tour.name}</IonTitle>
      </IonHeader>
      <IonContent>
        <IonImg
          className="image"
          src="https://dulichviet.com.vn/images/bandidau/CH%C3%82U%20%C3%81/du-lich-indonesia.png"
        />

        <IonItem>
          <IonText className="tour">{tour.tour}</IonText>
          <IonText className="schedule">{tour.schedule}</IonText>
          <IonText className="short-description">
            {tour.shortDescription}
          </IonText>
        </IonItem>
        {tour.details && (
          <IonList>
            <IonItem>{tour.details.note}</IonItem>
            <IonItem>{tour.details.service}</IonItem>
            <IonItem>{tour.details.schedule}</IonItem>
          </IonList>
        )}
        <IonButton onClick={()=>{setShowModal(true)}}>BOOK NOW!!</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;
