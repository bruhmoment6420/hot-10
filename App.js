import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch
} from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper'

import PostBox from './components/post';
import InfoScreen from './components/info';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeScreenText}>
        {' '}
          WARNING TOO MUCH HOT IN NEXT SLIDE
        {' '}
      </Text>
      <Button
        icon="fire"
        mode="contained"
        onPress={() => navigation.navigate('TOP 10 HOT PEOPLE')}
      >
        GO TO TOP 10 HOT
      </Button>
      <Text style={styles.helpText}>Long press on images for some info 😩.</Text>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.detailsScreen}>
      <ScrollView>

        <Pressable
          onLongPress={() => navigation.navigate('Jaglul')}
        >
          <PostBox
            caption="Number 1 Jaglul"
            src="https://cdn-10.netlify.app/1.png"
          />
        </Pressable>

        <Pressable
          onLongPress={() => navigation.navigate('Bishwajid')}
        >
          <PostBox
            caption="Number 2 Bishwajid"
            src="https://cdn-10.netlify.app/2.png"
          />
        </Pressable>

        <Pressable
          onLongPress={() => navigation.navigate('Nehan')}
        >
          <PostBox
            caption="Number 3 Nehan"
            src="https://cdn-10.netlify.app/3.png"
          />
        </Pressable>

        <Pressable
          onLongPress={() => navigation.navigate('Arthob')}
        >
          <PostBox
            caption="Number 4 Arthob"
            src="https://cdn-10.netlify.app/4.png"
          />
        </Pressable>

        <Pressable
          onLongPress={() => navigation.navigate('Anas')}
        >
          <PostBox
            caption="Number 5 Anas"
            src="https://cdn-10.netlify.app/5.png"
          />
        </Pressable>

        <Pressable
          onLongPress={() => navigation.navigate('Rehman')}
        >
          <PostBox
            caption="Number 6 Rehman"
            src="https://cdn-10.netlify.app/6.png"
          />
        </Pressable>

        <Pressable
          onLongPress={() => navigation.navigate('Ridwan')}
        >
          <PostBox
            caption="Number 7 Ridwan"
            src="https://cdn-10.netlify.app/7.png"
          />
        </Pressable>

        <Pressable
          onLongPress={() => navigation.navigate('Safwan')}
        >
          <PostBox
            caption="Number 8 Safwan"
            src="https://cdn-10.netlify.app/8.png"
          />
        </Pressable>

        <Pressable
          onLongPress={() => navigation.navigate('Anwar')}
        >
          <PostBox
            caption="Number 9 Anwar"
            src="https://cdn-10.netlify.app/9.png"
          />
        </Pressable>

        <Pressable
          onLongPress={() => navigation.navigate('Adeeb')}
        >
          <PostBox
            caption="Number 10 Adeeb"
            src="https://cdn-10.netlify.app/10.png"
          />
        </Pressable>

      </ScrollView>
    </View>
  );
}

// Jagluls Screen
function JaguScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/1.png"
      name='Jaglul'
      info='He is the jagu and he is the messiah. Jaglul is the literal definition of a perfect human being. No human can compare to his manliness, truly a splendid human specimen.'
    />
  )
}

// Bishwa Screen
function BishwaScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/2.png"
      name='Bishwa'
      info='Bishwa aka Bishwajid is a person who is filled with unnecessary amounts of Swagger. His presence radiates off literal C00l. Any person who can be of his aquaintance become a auto swag master.'
    />
  )
}

// Nehan Screen
function NehanScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/3.png"
      name='Nehan'
      info='One of the founders of the Anti Faul Pola Organization (AFPO), he is known as the owner of the organization. His web devs skillz are also tip top. A near contender to Jagus stature but nothing can beat Jagu.'
    />
  )
}

// Arthob Screen
function ArthobScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/4.png"
      name='Arthob'
      info='Down Bad. A musician from heart. He makes music and is big sad. He considers himself as a puppet. A proper and splendid human none the less.'
    />
  )
}

// Anas Screen
function AnasScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/5.png"
      name='Anas'
      info='He is a golfer. Golf is his passion. He knows a fair amount of memes making him a interesting person to be around. He is a bit on the thicc side but that makes him the more epic.'
    />
  )
}

// Rehman Screen
function RehmanScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/6.png"
      name='Rehman'
      info='He does the guitaring af. So not much is known about him. I once broke his watch tho thats the most fond memory I have of him.'
    />
  )
}

// Ridwan Screen
function RidwanScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/7.png"
      name='Ridwan'
      info='Terminal Autisim.'
    />
  )
}

// Safwan Screen
function SafwanScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/8.png"
      name='Safwan'
      info='He is a fan of DC stuff. I used to share a Netflix account with him. Looks kinda like steve from Minecraft. He is also commonly known as Manwhore'
    />
  )
}

// Anwar Screen
function AnwarScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/9.png"
      name='Anwar'
      info='YAAAA NAFSIIIII YAAA NAFSIIIII, Listening to those two peices of culture can trigger the thought of Anwar. He is the maker of classics like Musturduuu and Bastarde.'
    />
  )
}

// Adeeb Screen
function AdeebScreen() {
  return (
    <InfoScreen
      src="https://cdn-10.netlify.app/10.png"
      name='Adeeb'
      info='Adeeb is mostly known for his height which is equal to that of a ant. During his first day at school it took the faculty 2 whole hours to find him since he was lost. Turns out he was stuck in a ant hill.'
    />
  )
}


function DevInfo() {
  return (
    <InfoScreen
      src="https://instagram.fdac24-1.fna.fbcdn.net/v/t51.2885-15/e35/140323829_733364847569148_5741331271629730347_n.jpg?_nc_ht=instagram.fdac24-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-ypZC_cT020AX9t9tAu&tp=1&oh=2ec66600480e309f92351dde39792cbe&oe=6034A932&ig_cache_key=MjQ5MTcwNzAwMDAxMTY2NzE3NA%3D%3D.2"
      name="Tahlil"
      info='Hello I am the developer of this app. I didnt feel like I deserved to be on that list since im no where near the big bren and greatness of the top 10 epics. So I put myself on another slide. There is nothing figuratively special about me tbh. I mean nothing that i know of.'
    />
  )
}

const Tab = createBottomTabNavigator();


function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'flame' : 'flame-outline';
            } else if (route.name === 'Developer Info') {
              iconName = focused ? 'information-circle' : 'information-circle-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#6200ee',
          inactiveTintColor: 'gray',
        }}

      >
        <Tab.Screen name="Home" component={EpicMoment} />
        <Tab.Screen name="Developer Info" component={DevInfo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const Stack = createStackNavigator();

function EpicMoment() {
  return (
    <Stack.Navigator initialRouteName="Hot 10 Section">
      <Stack.Screen name="HOT MEN OF THE YEAR" component={HomeScreen} />
      <Stack.Screen name="TOP 10 HOT PEOPLE" component={DetailsScreen} />
      <Stack.Screen name="Jaglul" component={JaguScreen} />
      <Stack.Screen name="Bishwajid" component={BishwaScreen} />
      <Stack.Screen name="Nehan" component={NehanScreen} />
      <Stack.Screen name="Arthob" component={ArthobScreen} />
      <Stack.Screen name="Anas" component={AnasScreen} />
      <Stack.Screen name="Rehman" component={RehmanScreen} />
      <Stack.Screen name="Ridwan" component={RidwanScreen} />
      <Stack.Screen name="Safwan" component={SafwanScreen} />
      <Stack.Screen name="Anwar" component={AnwarScreen} />
      <Stack.Screen name="Adeeb" component={AdeebScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  detailsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  homeScreenText: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
  },
  helpText: {
    marginTop: 15,
    fontStyle: 'Roboto'
  },
  switchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  settingsText: {
    paddingLeft: 15,
    fontWeight: 'bold',
  }
});

export default App;
