import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonItem,
  IonAvatar,
  IonLabel,
  IonFooter,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { add } from "ionicons/icons";

import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage className="content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Members</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        <IonList lines="full">
          {/* <IonListHeader>Gym Members</IonListHeader> */}
          <IonItem>
            <IonAvatar slot="start">
              <img
                height="300"
                width="300"
                src="https://images.unsplash.com/photo-1603698819488-03c6e857d280?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </IonAvatar>
            <IonLabel>
              <h2>Aashish Sharma</h2>
              <h3>Bank Manager</h3>
              <p>Mangliya</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://images.unsplash.com/photo-1603698819488-03c6e857d280?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://images.unsplash.com/photo-1603698819488-03c6e857d280?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://images.unsplash.com/photo-1603698819488-03c6e857d280?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      {/*-- fab placed to the bottom end --*/}
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="success">
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
      <IonFooter>
        <IonToolbar className="footer-text">
          <IonTitle>Powered By - Technomize</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;
