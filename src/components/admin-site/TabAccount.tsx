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
import "./TabAccount.css";

const TabAccount = () => {
  const [accountData, setAccountData] = useState([]);

  async function getAccountData() {
    try {
      const data: any = await authApi.adminAccountList();
      setAccountData(data);
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
      <IonList>
        <IonGrid>
          <IonRow className="">
            <IonCol size="2">
              <IonText className="account-text">ID</IonText>
            </IonCol>
            <IonCol size="4">
              <IonText className="account-text">Name</IonText>
            </IonCol>
            <IonCol size="4">
              <IonText className="account-text">Email</IonText>
            </IonCol>
          </IonRow>
          {accountData.map((account: any) => (
            <IonRow className="">
              <IonCol size="2">
                <IonText>{account.id}</IonText>
              </IonCol>
              <IonCol size="4">
                <IonText>{account.name}</IonText>
              </IonCol>
              <IonCol size="4">
                <IonText>{account.email}</IonText>
              </IonCol>
              <IonCol size="2">
                <IonButton color="danger">Lock</IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonList>
    </IonContent>
  );
};

export default TabAccount;
