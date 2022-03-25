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

interface CardProps {
  id: string;
  name: string;
  tour: string;
  startDate: string;
  endDate: string;
  cost: number;
}

const TourCard = (props: CardProps) => {
  const router = useIonRouter();
  return (
    <IonContent className="container">
      <IonImg className="card-image" src="https://dulichviet.com.vn/images/bandidau/CH%C3%82U%20%C3%81/du-lich-indonesia.png" />
      <IonCardTitle>{props.name}</IonCardTitle>
      <IonCardSubtitle>{props.tour}</IonCardSubtitle>
      <IonGrid>
        <IonCol size="6">
          <IonRow className="col-1">
            <IonText>{"Ngày đi: " + props.startDate}</IonText>
          </IonRow>
          <IonRow className="col-1">
            <IonText>{"Ngày về: " + props.endDate}</IonText>
          </IonRow>
          <IonRow className="col-1">
            <IonText>{"Giá tiền: " + props.cost}</IonText>
          </IonRow>
        </IonCol>
        <IonCol size="5">
            <IonButton onClick={()=>{router.push(`/detail/${props.id}`)}}>Đặt ngay!</IonButton>
        </IonCol>
      </IonGrid>
    </IonContent>
  );
};

export default TourCard;
