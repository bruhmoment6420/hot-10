import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PostBox(props) {
  return (
    <View>
      <Text style={styles.postCaption}>{props.caption}</Text>
      <Image
        style={styles.postImage}
        source={{
          uri: props.src,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postCaption: {
    fontWeight: 'bold',
    fontStyle: 'Roboto',
    paddingLeft: 20,
    paddingTop: 10,
  },
  postImage: {
    width: 330,
    height: 330,
    marginTop: 10,
  },
});
