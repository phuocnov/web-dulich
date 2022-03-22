import {
  useIonRouter,
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
    const router = useIonRouter();
    
    return (
      
        <tr>
            <td>{props.i}</td>
            <td>{props.name}</td>
            <td>{props.startDate}</td>
            <td>{props.endDate}</td>
            <td>{props.cost}</td>
            <td><a href="#" className="delete_tour">Xóa</a></td>
            <td><a href="#" className="edit_tour">sửa</a></td>
        </tr>
      
    );
  };
  
  export default TourList;