import {
  IonButton,
  IonContent,
  IonDatetime,
  IonInput,
  IonItemDivider,
  IonLabel,
  IonModal,
} from "@ionic/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { tourApi } from "../../api";
import { ICreateTour } from "../../api/apiInterfaces";
import './CreateTour.css'

const CreateTour = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  async function createTour(params:any) {
    try {
      const tourCreate: ICreateTour = {
        name: params.name,
        tour: params.tour,
        schedule: params.schedule,
        startDate: params.startDate,
        endDate: params.endDate,
        cost: params.cost,
        shortDescription: params.shortDescription,
        details: {
          service: params.detailService,
          schedule: params.detailSchedule,
          note: params.detailNote
        }
      }
      const data: any = await tourApi.createTour(tourCreate)
      console.log(data)
    }catch (error) {
      throw error;
    }
  }

  return (
    <IonContent>
      <form className="form" onSubmit={handleSubmit((data:any)=>{
        createTour(data)
    })}>
      <IonLabel>name</IonLabel>
      <IonInput type="text" {...register("name")} />
      <IonLabel>tour</IonLabel>
      <IonInput type="text" {...register("tour")} />
      <IonLabel>schedule</IonLabel>
      <IonInput type="text" {...register("schedule")} />
      <IonLabel>cost</IonLabel>
      <IonInput type="number" {...register("const")} />
      <IonLabel>date start</IonLabel>
      <IonInput type="date" {...register("startDate")} />
      <IonLabel>date end</IonLabel>
      <IonInput type="date" {...register("endDate")} />
      <IonLabel>short description</IonLabel>
      <IonInput type="text" {...register("shortDescription")} />
      
      <IonItemDivider/>
      <IonLabel>detail schedule</IonLabel>
      <IonInput type="text" {...register("detailSchedule")} />
      <IonLabel>detail service</IonLabel>
      <IonInput type="text" {...register("detailService")} />
      <IonLabel>detail note</IonLabel>
      <IonInput type="text" {...register("detailNote")} />

      <IonButton type="submit">Add</IonButton>
    </form>
    </IonContent>
  );
};

export default CreateTour;
