import { IonText } from "@ionic/react";
import TabAccount from "./TabAccount";
import TabBooking from "./TabBooking";
import TabTour from "./TabTour";

const TabRenderSwitch = (props: any) => {
    switch (props.tab) {
        case 1:
          return <TabAccount/>;
        case 2:
          return <TabTour/>;
        case 3:
          return <TabBooking/>;
        default:
          return null
      }
}

export default TabRenderSwitch