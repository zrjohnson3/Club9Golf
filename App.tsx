import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Landing from './screens/Landing';
import Booking from './screens/Booking';
import MembershipCard from './screens/MembershipCard';
import Events from './screens/Events';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Book Tee Time') {
            iconName = focused ? 'golf' : 'golf-outline';
          } else if (route.name === 'Events') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Membership Card') {
            iconName = focused ? 'card' : 'card-outline';
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          paddingBottom: 5, // Increase bottom padding
          fontSize: 10,
          textAlign: 'center', // Ensures text is centered
          justifyContent: 'center', // Centers text horizontally
        },
        // tabBarStyle: {
        //   // paddingVertical: 5,
        //   height: 80,
        //   shadowColor: '#000',
        //   shadowOffset: { width: 0, height: 1 },
        //   shadowOpacity: 0.2,
        //   shadowRadius: 3,
        //   elevation: 5, // for Android
        //   backgroundColor: 'white', // Change as per your theme
        //   flexDirection: 'row', // Ensures that the border is applied correctly between tabs
        //   borderTopWidth: 1,
        //   borderTopColor: 'gray',
        // },
        // tabBarItemStyle: {
        //   borderRightWidth: 1, // Add border between tabs
        //   borderRightColor: 'grey', // Set border color
        // }

        // Or with no lines in between

        tabBarStyle: {
          paddingVertical: 5, // Increase vertical padding
          height: 80,
          alignItems: 'center', // Centers content vertically
          justifyContent: 'center', // Centers content horizontally
          paddingHorizontal: 10, // Increase horizontal padding
          // maxHeight: 100,
        }
      })}
    >
      <Tab.Screen name="Home" component={Landing} />
      <Tab.Screen name="Book Tee Time" component={Booking} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Membership Card" component={MembershipCard} />
    </Tab.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
