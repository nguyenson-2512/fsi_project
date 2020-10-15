import * as React from 'react';
import { Animated, Easing, Image, StyleSheet  } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppStyles, Configuration } from './AppStyles'

import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'

import DrawerContainer from './components/DrawerContainer'



// const LoginStack = createStackNavigator(
//   {
//     Login: { screen: LoginScreen },
//     Signup: { screen: SignupScreen },
//     Welcome: { screen: WelcomeScreen }
//   },
//   {
//     initialRouteName: "Welcome",
//     headerMode: "float",
//     navigationOptions: ({ navigation }) => ({
//       headerTintColor: "red",
//       headerTitleStyle: styles.headerTitleStyle
//     }),
//     cardStyle: { backgroundColor: "#FFFFFF" }
//   }
// );

const LoginStack = createStackNavigator()

function Login() {
  return (
    <LoginStack.Navigator initialRouteName="Welcome"  headerMode="float" >
      <LoginStack.Screen name="Login" component={LoginScreen} options={({navigation}) => ({
        title: '',
        headerTitleStyle: styles.headerTitleStyle,
        cardStyle: { backgroundColor: "#FFFFFF"}
      })}/>
      <LoginStack.Screen name="Signup" component={SignupScreen} options={({navigation}) => ({
        title: '',
        headerTitleStyle: styles.headerTitleStyle,
        cardStyle: { backgroundColor: "#FFFFFF"}
      })}/>
      <LoginStack.Screen name="Welcome" component={WelcomeScreen} options={({navigation}) => ({
        title: '',
        headerTitleStyle: styles.headerTitleStyle,
        cardStyle: { backgroundColor: "#FFFFFF"}
      })}/>
    </LoginStack.Navigator>
  )
}

const HomeStack = createStackNavigator()

function Home() {
  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode="float" headerLayoutPreset="center">
      <HomeStack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
        headerTitleStyle: styles.headerTitleStyle,
        cardStyle: { backgroundColor: "#FFFFFF"}
      })} />
    </HomeStack.Navigator>
  )
}



// const HomeStack = createStackNavigator(
//   {
//     Home: { screen: HomeScreen }
//   },
//   {
//     initialRouteName: "Home",
//     headerMode: "float",

//     headerLayoutPreset: "center",
//     navigationOptions: ({ navigation }) => ({
//       headerTintColor: "red",
//       headerTitleStyle: styles.headerTitleStyle
//     }),
//     cardStyle: { backgroundColor: "#FFFFFF" }
//   }
// );

const TabNavigator = createBottomTabNavigator()

function MyTabs() {
  return (
    <TabNavigator.Navigator 
      initialLayout={{height: 300}}
      tabBarOptions={{
        activeTintColor: AppStyles.color.tint,
        inactiveTintColor: "gray",
        style: {
          height: Configuration.home.tab_bar_height
        }
      }}>
      <TabNavigator.Screen name="Home" component={Home} options={({navigation}) => ({
        tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = AppIcon.images.home;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Image
            style={{
              tintColor: focused ? AppStyles.color.tint : AppStyles.color.grey
            }}
            source={iconName}
          />
        );
      }
      })}/>
    </TabNavigator.Navigator>
  )
}

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: { screen: HomeStack }
//   },
  // {
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let iconName;
  //       if (routeName === "Home") {
  //         iconName = AppIcon.images.home;
  //       }

  //       // You can return any component that you like here! We usually use an
  //       // icon component from react-native-vector-icons
  //       return (
  //         <Image
  //           style={{
  //             tintColor: focused ? AppStyles.color.tint : AppStyles.color.grey
  //           }}
  //           source={iconName}
  //         />
  //       );
  //     }
  //   }),
  //   initialLayout: {
  //     height: 300
  //   },
  //   tabBarOptions: {
  //     activeTintColor: AppStyles.color.tint,
  //     inactiveTintColor: "gray",
  //     style: {
  //       height: Configuration.home.tab_bar_height
  //     }
  //   }
  // }
// );

// const DrawerStack = createDrawerNavigator(
//   {
//     Tab: TabNavigator
//   },
  // {
  //   drawerPosition: "left",
  //   initialRouteName: "Tab",
  //   drawerWidth: 200,
  //   contentComponent: DrawerContainer
  // }
// );

const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="left"
        initialRouteName= "Tab"
        drawerWidth={200}
        contentComponent={DrawerContainer}>
        <Drawer.Screen name="Tab" component={MyTabs} />
      </Drawer.Navigator>
    // </NavigationContainer>
  )
}

// Manifest of possible screens
// const RootNavigator = createStackNavigator(
//   {
//     LoginStack: { screen: LoginStack },
//     DrawerStack: { screen: DrawerStack }
//   },
//   {
//     // Default config for all screens
//     headerMode: "none",
//     // initialRouteName: "DrawerStack",
//     initialRouteName: "LoginStack",
//     transitionConfig: noTransitionConfig,
//     navigationOptions: ({ navigation }) => ({
//       color: "black"
//     })
//   }
// );

const RootNavigator = createStackNavigator()

function RootStack() {
  return (
    <RootNavigator.Navigator headerMode="none" initialRouteName="DrawerStack">
      <RootNavigator.Screen name="LoginStack" component={Login} />
      <RootNavigator.Screen name="DrawStack" component={MyDrawer} />
    </RootNavigator.Navigator>
  )
}



// const AppNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="home">
//         <Stack.Screen name="home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={LoginScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer><RootStack /></NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center"
//   },
//   or: {
//     fontFamily: AppStyles.fontName.main,
//     color: "black",
//     marginTop: 40,
//     marginBottom: 10
//   },
//   title: {
//     fontSize: AppStyles.fontSize.title,
//     fontWeight: "bold",
//     color: AppStyles.color.tint,
//     marginTop: 20,
//     marginBottom: 20
//   },
//   leftTitle: {
//     alignSelf: "stretch",
//     textAlign: "left",
//     marginLeft: 20
//   },
//   content: {
//     paddingLeft: 50,
//     paddingRight: 50,
//     textAlign: "center",
//     fontSize: AppStyles.fontSize.content,
//     color: AppStyles.color.text
//   },
//   loginContainer: {
//     width: AppStyles.buttonWidth.main,
//     backgroundColor: AppStyles.color.tint,
//     borderRadius: AppStyles.borderRadius.main,
//     padding: 10,
//     marginTop: 30
//   },
//   loginText: {
//     color: AppStyles.color.white
//   },
//   placeholder: {
//     fontFamily: AppStyles.fontName.text,
//     color: "red"
//   },
//   InputContainer: {
//     width: AppStyles.textInputWidth.main,
//     marginTop: 30,
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: AppStyles.color.grey,
//     borderRadius: AppStyles.borderRadius.main
//   },
//   body: {
//     height: 42,
//     paddingLeft: 20,
//     paddingRight: 20,
//     color: AppStyles.color.text
//   },
//   facebookContainer: {
//     width: AppStyles.buttonWidth.main,
//     backgroundColor: AppStyles.color.facebook,
//     borderRadius: AppStyles.borderRadius.main,
//     padding: 10,
//     marginTop: 30
//   },
//   facebookText: {
//     color: AppStyles.color.white
//   }
// })
const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    color: "purple",
    flex: 1,
    fontFamily: AppStyles.fontName.main
  }
});

export default App;