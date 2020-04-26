import React from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Movie} from '../modal/modals';

interface Prop {
  movie: Movie,
  handlePress : any
}

const MovieCard = (props: Prop) => {
  const { movie, handlePress } = props;

  const _handlePress = () => handlePress(movie)

  return (
    <TouchableWithoutFeedback style={{flex: 1}} onPress={_handlePress}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Image
             style={styles.image}
             source={{
              uri: `http://image.tmdb.org/t/p/original${movie?.poster_path}`
            }}
          />
          <View style={{flexDirection : 'row', paddingTop : 5, paddingHorizontal : 8}}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>{movie.title}</Text>
            <Text style={styles.popularity}>({movie.vote_average})</Text>
          </View>
          <View style={{paddingVertical : 5, paddingHorizontal : 8}}>
             <Text ellipsizeMode="tail" numberOfLines={2} style={styles.description}>{movie.overview}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 12,
    borderColor: "transparent"
  },
  body: {
    flex: 1,
    maxWidth: 180,
    height: 290,
    borderRadius: 20,
    backgroundColor: "#dfdfdf",
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
     height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3.42,
    elevation: 6,
   },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius : 20,
      height: 200,
      width : undefined
  },
  title: {
    fontSize: 16,
    color: '#4285f4',
    fontWeight: '500',
    flex : 1,
  },
  popularity: {
    fontSize: 15,
    color: "#4a4a4a",
    fontWeight : "500"
  },
  description: {
    fontSize: 14,
    color : "#4a4a4a"
  }
});
