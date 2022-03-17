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
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Router } from "workbox-routing";
import { tourApi } from "../api";
import tour from "../api/tour";
import ExploreContainer from "../components/ExploreContainer";
import store from "../redux/store";
import { actions, reducers } from "../redux";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [tours, setTours] = useState([]);
  const router = useIonRouter();
  const dispatch = useDispatch();

  async function getTour() {
    try {
      const data: any = await tourApi.getTours();
      setTours(data);
    } catch (error) {
      throw error;
    }
  }

  function checkAuth() {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(actions.auth.login(token));
      }
    } catch (error) {}
  }

  checkAuth();

  useEffect(() => {
    const listAPI = [getTour()];
    async function fetchAPI() {
      await Promise.all(listAPI);
    }
    fetchAPI();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonRow>
          <IonTitle>Du lịch Việt</IonTitle>
          {store.getState().auth.isLogin ? (
            <IonButton
              onClick={() => {
                dispatch(actions.auth.logout);
                localStorage.clear();
                router.push("/login")
              }}
            >
              Logout
            </IonButton>
          ) : (
            <IonButton
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </IonButton>
          )}
        </IonRow>
      </IonHeader>

      <IonContent>
        {tours.map((tour: any) => {
          // console.log(tour);
          return (
            <IonCard key={tour.id}>
              <IonImg src="./" />
              <IonCardHeader>{tour.name}</IonCardHeader>
              <IonCardSubtitle>{tour.schedule}</IonCardSubtitle>
              <IonCardSubtitle>
                {tour.startDate + "-" + tour.endDate}
              </IonCardSubtitle>
              <IonCardContent>{tour.shortDescription}</IonCardContent>
              <IonButton
                onClick={() => {
                  router.push(`details/${tour.id}`);
                }}
              >
                Chi tiết
              </IonButton>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Page;
