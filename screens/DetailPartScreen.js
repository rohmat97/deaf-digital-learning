import React, {useEffect, useRef} from 'react';
import {StyleSheet, ScrollView, Platform} from 'react-native';
import Video from 'react-native-video'; // Import react-native-video
import {getVideoLocal} from '../utils/getVideo';

const DetailsPartScreen = ({route, navigation}) => {
  const {item} = route.params;
  const videoRef = useRef(null); // Create a ref for the video

  useEffect(() => {
    navigation.setOptions({
      title: item.title || 'Details',
    });

    return () => {
      // Cleanup function to handle unmounting
      if (videoRef.current) {
        videoRef.current.seek(0); // Seek to the beginning
      }
    };
  }, [item, navigation]);

  // Define the local video path
  const videoSource = Platform.select({
    ios: getVideoLocal(item.title),
    android: getVideoLocal(item.title),
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Video
        ref={videoRef} // Set the video ref
        source={videoSource} // URI for the video
        style={styles.video}
        controls={true} // Show controls for the video
        resizeMode="contain" // Adjust the video to fit within the container
        onEnd={() => {
          // Optionally, handle video end
          videoRef.current.seek(0); // Seek back to the beginning if needed
        }}
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
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default DetailsPartScreen;
