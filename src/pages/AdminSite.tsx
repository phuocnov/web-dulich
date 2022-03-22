import {
    IonContent,
    useIonRouter,
} from "@ionic/react";
import './AdminSite.css';
import { tourApi } from "../api";
import { useEffect, useState } from "react";
import TourList from "../components/TourList";


const AdminSite = () => {
    const router = useIonRouter();
    const [tours, setTours] = useState([]);
    async function getTour() {
        try {
          const data: any = await tourApi.getTours();
          setTours(data);
        } catch (error) {
          throw error;
        }
      }
    useEffect(() => {
        const listAPI = [getTour()];
        async function fetchAPI() {
          await Promise.all(listAPI);
        }
        fetchAPI();
      }, []);
      
    return(
        <div className="page_AdminSite">
            <div className="AdminSite_navbar">
                <ul className="navbar_list">
                    <li className="navbar_list--items">
                        Tour List
                    </li>
                </ul>
            </div>
            <div className="AdminSite_container">
                <button className="btn_add_tour">Thêm Tour</button>
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tour</th>
                        <th>Ngày Đi</th>
                        <th>Ngày Về</th>
                        <th>Giá Tiền</th>
                    </tr>
                    
                    
                        {tours.map((tour: any,index: number) => {
                        // console.log(tour);
                        
                        return (
                            <TourList
                            i = {index}
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
                    
                   
                    
                    
                </table>
            </div>
        </div>
    );
};
export default AdminSite;