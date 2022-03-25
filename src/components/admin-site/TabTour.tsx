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
import { tourApi } from "../../api";
import CreateTour from "./CreateTour";
import DetailTour from "./DetailTour";
import "./TabAccount.css";

const TabTour = () => {
  const [tourData, setTourData] = useState([]);

  async function getAccountData() {
    try {
      const data: any = await tourApi.getTours();
      setTourData(data);
      console.log(data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    const listAPI = [getAccountData()];
    async function fetchAPI() {
      await Promise.all(listAPI);
    }
    fetchAPI();
  }, []);
  return (
    <IonContent className="container">
      <IonModal trigger="create-trigger">
        <CreateTour />
      </IonModal>
      <IonModal trigger="detail-trigger">
        <DetailTour></DetailTour>
      </IonModal>
      <IonButton id="create-trigger">Create tour</IonButton>
      <IonList>
        <IonGrid>
          <IonRow className="">
            <IonCol size="1">
              <IonText className="account-text">ID</IonText>
            </IonCol>
            <IonCol size="3">
              <IonText className="account-text">Name</IonText>
            </IonCol>
            <IonCol size="3">
              <IonText className="account-text">tour</IonText>
            </IonCol>
            <IonCol size="2">
              <IonText className="account-text">date start</IonText>
            </IonCol>
            <IonCol size="2">
              <IonText className="account-text">date end</IonText>
            </IonCol>
            <IonCol size="1">
              <IonText className="account-text">action</IonText>
            </IonCol>
          </IonRow>

          {tourData.map((account: any) => (
            <IonRow className="">
              <IonCol size="1">
                <IonText>{account.id}</IonText>
              </IonCol>
              <IonCol size="3">
                <IonText>{account.name}</IonText>
              </IonCol>
              <IonCol size="3">
                <IonText>{account.tour}</IonText>
              </IonCol>
              <IonCol size="2">
                <IonText>{account.startDate}</IonText>
              </IonCol>
              <IonCol size="2">
                <IonText>{account.endDate}</IonText>
              </IonCol>
              <IonCol size="1">
                <IonButton id="detail-trigger">Adjust</IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonList>
    </IonContent>
  );
};

export default TabTour;
