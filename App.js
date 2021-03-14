import React, {useEffect} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NavigationService from './app/service/Navigation';
import Login from './app/screen/Auth/loginScreen';
import Registration from './app/screen/Auth/registerScreen';
import SplashScreen from 'react-native-splash-screen';
import Home from './app/screen/Home';
import StartPage from './app/screen/Auth';
import Category from './app/screen/Home/Category';


const AuthStack = createAppContainer(
  createStackNavigator(
    {
      Login:Login,
      Registration:Registration,
      HomeScreen:Home,
      StartPage:StartPage,
      Category:Category
    },
    {
      headerMode: "none",
      initialRouteName: "Registration"
    }
  )
);
export default function App () {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
    return (
          <AuthStack
            ref={(r) => {
              NavigationService.setTopLevelNavigator(r);
            }}
          />
    );
}
