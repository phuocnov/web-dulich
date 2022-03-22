import {
    IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
  useIonRouter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
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
    <div>
    <IonCard className="container">
      <IonImg src="https://dulichviet.com.vn/images/bandidau/CH%C3%82U%20%C3%81/du-lich-indonesia.png" />
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
    </IonCard>
    </div>
  );
};

export default TourCard;
