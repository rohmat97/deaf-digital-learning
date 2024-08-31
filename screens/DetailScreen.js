import React, {useEffect} from 'react';
import {Text, StyleSheet, Image, ScrollView, Platform} from 'react-native';
import Video from 'react-native-video'; // Import react-native-video

const DetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: item.title || 'Details',
    });
  }, [item, navigation]);

  // Define the local video path
  const videoSource = Platform.select({
    ios: require('../assets/videos/sample-video.mp4'),
    android: require('../assets/videos/sample-video.mp4'),
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />
      <Video
        source={videoSource}
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />

      {/* Description */}
      <Text style={styles.description}>
        {item.description || 'No description available.'}
      </Text>

      {/* Translation */}
      <Text style={styles.translation}>
        {item.translation || 'No translation available.'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  translation: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default DetailsScreen;
