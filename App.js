import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PostBox from './components/post';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeScreenText}>
        {' '}
        WARNING TOO MUCH HOT IN NEXT SLIDE
        {' '}
      </Text>
      <Button
        title="Go to Top 10 Epic Hot"
        onPress={() => navigation.navigate('TOP 10 HOT PEOPLE')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.detailsScreen}>
      <ScrollView>
        <PostBox
          caption="Number 1 Jaglul"
          src="https://cdn-10.netlify.app/1.png"
        />
        <PostBox
          caption="Number 2 Bishwajid"
          src="https://cdn-10.netlify.app/2.png"
        />
        <PostBox
          caption="Number 3 Nehan"
          src="https://cdn-10.netlify.app/3.png"
        />
        <PostBox
          caption="Number 4 Arthob"
          src="https://cdn-10.netlify.app/4.png"
        />
        <PostBox
          caption="Number 5 Anas"
          src="https://cdn-10.netlify.app/5.png"
        />
        <PostBox
          caption="Number 6 Rehman"
          src="https://cdn-10.netlify.app/6.png"
        />
        <PostBox
          caption="Number 7 Ridwan"
          src="https://cdn-10.netlify.app/7.png"
        />
        <PostBox
          caption="Number 8 Safwan"
          src="https://cdn-10.netlify.app/8.png"
        />
        <PostBox
          caption="Number 9 Anwar"
          src="https://cdn-10.netlify.app/9.png"
        />
        <PostBox
          caption="Number 10 Adeeb"
          src="https://cdn-10.netlify.app/10.png"
        />
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HOT MEN OF THE YEAR" component={HomeScreen} />
        <Stack.Screen name="TOP 10 HOT PEOPLE" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
});

export default App;
