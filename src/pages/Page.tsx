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
  IonList,
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
import { authApi, tourApi } from "../api";
import tour from "../api/tour";
import store from "../redux/store";
import { actions, reducers } from "../redux";
import "./Page.css";
import TourCard from "../components/TourCard";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [tours, setTours] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
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

  async function userRole() {
    try {
      const data: any = await authApi.getUserInfo();
      if (data.authorities[0].authority === "ROLE_ADMIN") {
        setIsAdmin(true);
      }
    } catch (error) {}
  }

  useEffect(() => {
    const listAPI = [getTour(), userRole()];
    async function fetchAPI() {
      await Promise.all(listAPI);
    }
    fetchAPI();
    checkAuth();
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
                router.push("/login");
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
          {isAdmin && (
            <IonButton
              onClick={() => {
                router.push("/admin-site");
              }}
            >
              Admin site
            </IonButton>
          )}
        </IonRow>
      </IonHeader>

      <IonContent>
        <IonList>
          {tours.map((tour: any) => {
            // console.log(tour);
            return (
              <TourCard
                id={tour.id}
                name={tour.name}
                tour={tour.tour}
                startDate={tour.startDate}
                endDate={tour.endDate}
                cost={tour.cost}
                key={tour.id}
              />
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Page;
