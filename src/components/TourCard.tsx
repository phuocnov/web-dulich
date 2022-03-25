import {
    IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
  useIonRouter,
} from "@ionic/react";
import "./TourCard.css";



const TourCard = (props: any) => {
  const router = useIonRouter();
  return (
    <IonContent className="container">
      <IonImg className="card-image" src="https://dulichviet.com.vn/images/bandidau/CH%C3%82U%20%C3%81/du-lich-indonesia.png" />
      <IonCardTitle>{props.data.name}</IonCardTitle>
      <IonCardSubtitle>{props.data.tour}</IonCardSubtitle>
      <IonGrid>
        <IonCol size="6">
          <IonRow className="col-1">
            <IonText>{"Ngày đi: " + props.data.startDate}</IonText>
          </IonRow>
          <IonRow className="col-1">
            <IonText>{"Ngày về: " + props.data.endDate}</IonText>
          </IonRow>
          <IonRow className="col-1">
            <IonText>{"Giá tiền: " + props.data.cost}</IonText>
          </IonRow>
        </IonCol>
        <IonCol size="5">
            <IonButton onClick={()=>{router.push(`/detail/${props.data.id}`)}}>Đặt ngay!</IonButton>
        </IonCol>
      </IonGrid>
    </IonContent>
  );
};

export default TourCard;
