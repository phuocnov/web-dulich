import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonModal,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import "./AdminSite.css";
import { tourApi } from "../api";
import { useEffect, useState } from "react";
import TourList from "../components/TourList";
import CreateTour from "../components/admin-site/CreateTour";
import { Route } from "react-router";
import TabRenderSwitch from "../components/admin-site/TabRenderSwitch";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";

const tabList = [
  {
    id: 1,
    name: "Account",
  },
  {
    id: 2,
    name: "Tour",
  },
  {
    id: 3,
    name: "Booking",
  },
];

const AdminSite = () => {
  // State
  const [tab, setTab] = useState(1);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Admin Site</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="3">
              {tabList.map((option) => (
                <IonButton
                  color="primary"
                  size="large"
                  className="option-button"
                  onClick={() => {
                    setTab(option.id);
                  }}
                  key={option.id}
                >
                  {option.name}
                </IonButton>
              ))}
            </IonCol>
            <IonCol>
              <TabRenderSwitch tab={tab}/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default AdminSite;
