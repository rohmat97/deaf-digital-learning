import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, Platform} from 'react-native';
import Video from 'react-native-video'; // Import react-native-video
import {getVideoLocal} from '../utils/getVideo';

const DetailsPartScreen = ({route, navigation}) => {
  const {item} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: item.title || 'Details',
    });
  }, [item, navigation]);

  // Define the local video path
  const videoSource = Platform.select({
    ios: getVideoLocal(item.title),
    android: getVideoLocal(item.title),
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Video
        source={videoSource} // URI for the video
        style={styles.video}
        controls={true} // Show controls for the video
        resizeMode="contain" // Adjust the video to fit within the container
        useNativeControls={true} // Use native video controls for better performance
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    color: '#555',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  translation: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%', // Ensure the itemContainer takes full width
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  flatList: {
    marginTop: 12,
    minWidth: '100%', // Ensure FlatList takes full width
  },
});

export default DetailsPartScreen;
