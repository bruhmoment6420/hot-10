import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';


export default function InfoScreen(props) {
  return (
    <Card style={styles.cardStyle}>
      <View>
        <Image
          style={styles.profileImage}
          source={{
            uri: props.src,
          }}
        />
        <Text style={styles.infoCaption}>{props.name}</Text>
      </View>
      <Text style={styles.personInfo}>
        {props.info}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 316,
    height: 320,
    marginTop: 10,
  },
  infoCaption: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    paddingTop: 15,
  },
  cardStyle: {
    marginTop: 10,
    padding: 10,
  },
  personInfo: {
    marginTop: 14,
    fontStyle: 'italic',
  },
});
