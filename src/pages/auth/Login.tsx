import {
  IonBreadcrumb,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  useIonRouter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ILogin } from "../../api/apiInterfaces";
import { authApi } from "../../api";
import "./Login.css";
import storage from "../../helper/storage";
import { useDispatch } from "react-redux";
import { actions, reducers } from "../../redux";
import store from "../../redux/store";
import { push } from "ionicons/icons";

const Login = () => {
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

  async function loginSuccess(token: string) {
    storage.set("token", token);
    dispatch(actions.auth.login(token));
  }

  async function login(params: ILogin) {
    try {
      const data:any  = await authApi.login(params);
      const {accessToken} = data
      if (accessToken) {
        loginSuccess(accessToken)
      } else {
        console.log("no token")
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <IonReactRouter>
      <IonPage>

        <form
          onSubmit={handleSubmit((data: any) => {
            login(data)
            if(store.getState().auth.isLogin === true) router.push("/")
          })}
        >
          <IonLabel>Username or email</IonLabel>
          <IonInput type="text" {...register("usernameOrEmail")} />
          <IonLabel>Password</IonLabel>
          <IonInput type="password" {...register("password")} />
          <IonButton type="submit">Login</IonButton>
          <IonText onClick={()=>{
            router.push("/signup")
          }}>Do not have an account? signup here</IonText>
        </form>
      </IonPage>
    </IonReactRouter>
  );
};

export default Login;

