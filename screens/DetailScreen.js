import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Video from 'react-native-video'; // Import react-native-video
import {getVideoLocal} from '../utils/getVideo';
import {getImageCategoryLocal} from '../utils/getImage';
import {FlatList} from 'react-native-gesture-handler';

const data = require('@assets/data/category.json');

const DetailsScreen = ({route, navigation}) => {
  const [listData, setListData] = useState([]);
  const {item} = route.params;
  const videoRef = useRef(null); // Create a ref for the video

  useEffect(() => {
    navigation.setOptions({
      title: item.title || 'Details',
    });

    // Set list data only if item.title is valid
    if (data[item.title]) {
      setListData(data[item.title]);
    }

    return () => {
      // Cleanup function to reset video when unmounting
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

  const renderItem = ({item}) => {
    const source = getImageCategoryLocal(item.imageUrl);
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailsPart', {
            item: item,
          })
        }>
        <View style={styles.itemContainer}>
          <Image source={source} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Video
        ref={videoRef} // Set the video ref
        source={videoSource} // URI for the video
        style={styles.video}
        controls={true} // Show controls for the video
        resizeMode="contain" // Adjust the video to fit within the container
      />
      <Text style={styles.description}>Part of {item.title}</Text>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatList} // Apply full width to FlatList
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

export default DetailsScreen;
