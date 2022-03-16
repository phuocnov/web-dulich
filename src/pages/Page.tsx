import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  

  return (
    <IonPage>
      <IonHeader>
        <IonTitle>Du lịch Việt</IonTitle>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonImg src='./'/>
          <IonCardHeader>Ten tour du lich</IonCardHeader>
          <IonCardSubtitle>Hanh trinh tour du lich</IonCardSubtitle>
          <IonCardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa veniam autem corrupti, ab eligendi sed ullam. Harum, autem modi cum a omnis voluptas minima mollitia, doloremque repudiandae atque cupiditate.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page;
