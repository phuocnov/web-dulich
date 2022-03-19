import {
  IonButton,
  IonInput,
  IonLabel,
  IonPage,
  IonText,
  useIonRouter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { constructOutline } from "ionicons/icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authApi } from "../../api";
import { ISignUp } from "../../api/apiInterfaces";
import './Signup.css'

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const router = useIonRouter();
  const dispatch = useDispatch();

function success(action: Function){
  action()
}

async function signup(params:ISignUp) {
    const data: any = await authApi.signUp(params).then((data:any)=>{
      console.log(data)
    })
}
  return (
    <IonReactRouter>
      <IonPage>
        <form
          onSubmit={handleSubmit((data: any) => {
            signup(data);
            // router.push("/login");
          })}
        >
          <IonLabel>name</IonLabel>
          <IonInput type="text" {...register("name")} />
          <IonLabel>username</IonLabel>
          <IonInput type="text" {...register("username")} />
          <IonLabel>Password</IonLabel>
          <IonInput type="password" {...register("password")} />
          <IonLabel>Email</IonLabel>
          <IonInput type="text" {...register("email")} />
          <IonButton type="submit">Login</IonButton>
          <span>Already have an account?</span>
          <IonText onClick={()=>{
            router.goBack()
          }}> sign in</IonText>
        </form>
      </IonPage>
    </IonReactRouter>
  );
};

export default SignupPage