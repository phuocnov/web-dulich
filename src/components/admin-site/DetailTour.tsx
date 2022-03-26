import { IonContent, IonHeader, IonItem, IonList, IonText, IonTitle } from "@ionic/react";
import { useEffect, useState } from "react";
import { tourApi } from "../../api";

const DetailTour = (props: any) => {
  const [tour, setTour]: any = useState({})

  async function getData(id: number) {
    try {
      const data: any = await tourApi.getToursByID(id);
      setTour(data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    const listAPI = [getData(props.id)];
    async function fetchAPI() {
      await Promise.all(listAPI);
    }
    fetchAPI();
  }, []);

  return (
    <IonContent>
      <IonTitle>Tour details</IonTitle>

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
    </IonContent>
  );
};

export default DetailTour;
