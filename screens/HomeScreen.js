import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const data = [
    {
      id: '1',
      title: 'Hand',
      description:
        'The hand is a versatile and highly dexterous part of the human body, consisting of fingers, a thumb, and a palm. It allows us to grasp, manipulate objects, and perform intricate tasks.',
      translation:
        'Tangan adalah bagian tubuh manusia yang serbaguna dan sangat terampil, terdiri dari jari-jari, ibu jari, dan telapak tangan. Ini memungkinkan kita untuk menggenggam, memanipulasi objek, dan melakukan tugas-tugas rumit.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Human-Hands-Front-Back.jpg/640px-Human-Hands-Front-Back.jpg',
    },
    {
      id: '2',
      title: 'Head',
      description:
        'The head is the uppermost part of the human body, housing the brain, eyes, ears, nose, and mouth. It is responsible for critical functions such as thinking, seeing, hearing, smelling, and speaking, and it also plays a key role in controlling the body’s movements and actions.',
      translation:
        'Kepala adalah bagian paling atas dari tubuh manusia, yang menampung otak, mata, telinga, hidung, dan mulut. Ini bertanggung jawab atas fungsi penting seperti berpikir, melihat, mendengar, mencium, dan berbicara, serta memainkan peran penting dalam mengendalikan gerakan dan tindakan tubuh.',
      imageUrl:
        'https://lh5.googleusercontent.com/proxy/mgmJ12YjIP3-orA4AYr2P6iarT8anzJdGVCAZ7gQlhReVGGAb1tn6kcofvMLfOVtGvQ6L4eYILsd8vlrEZHhdLejaXc',
    },
    {
      id: '3',
      title: 'Leg',
      description:
        'The leg is a powerful limb that supports the body’s weight and enables movement such as walking, running, and jumping. It includes the thigh, knee, shin, and foot.',
      translation:
        'Kaki adalah anggota tubuh yang kuat yang menopang berat badan dan memungkinkan gerakan seperti berjalan, berlari, dan melompat. Ini mencakup paha, lutut, tulang kering, dan kaki.',
      imageUrl:
        'https://www.shutterstock.com/image-photo/male-hairy-legs-isolated-on-600nw-164601392.jpg',
    },
  ];

  // Render item function
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          item: item,
        })
      }>
      <View style={styles.itemContainer}>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Removed alignItems: 'center' for better layout
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#555',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
