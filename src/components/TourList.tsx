import {
  IonButton,
} from "@ionic/react";

interface CardProps {
    i: number;
    id: string;
    name: string;
    tour: string;
    startDate: string;
    endDate: string;
    cost: number;
  }
  const TourList = (props: CardProps) => {
    
    return (
      
        <tr>
            <td>{props.i}</td>
            <td>{props.name}</td>
            <td>{props.startDate}</td>
            <td>{props.endDate}</td>
            <td>{props.cost}</td>
            <td><IonButton className="delete_tour" color="danger">Xóa</IonButton></td>
            <td><IonButton className="edit_tour" color="warning">sửa</IonButton></td>
        </tr>
      
    );
  };
  
  export default TourList;