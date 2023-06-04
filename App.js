import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigations/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>   
  );
}


// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAeB7ayApDoxMHVFIdAiMzHgtl795vFoXg",
//   authDomain: "mobileproject-9ee4a.firebaseapp.com",
//   projectId: "mobileproject-9ee4a",
//   storageBucket: "mobileproject-9ee4a.appspot.com",
//   messagingSenderId: "776060697989",
//   appId: "1:776060697989:web:9fef8257e3bcb4360458ec"
// };


// const app = initializeApp(firebaseConfig);
