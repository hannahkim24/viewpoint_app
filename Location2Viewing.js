import * as React from 'react';
import { Animated, Image, Pressable, Text, View, StyleSheet, Button, } from 'react-native';

import { Video} from 'expo-av';

import StayVideo from './videos/IMG_0398.mp4';
import CameraIcon from './icons/CameraIcon.png';
import TextIcon from './icons/TextIcon.png';
import AddIcon from './icons/AddIcon.png';
import MapIcon from './icons/map-icon.png';


export default function Location3Viewing({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.homeScreen}>
      <Video source = {StayVideo}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
            shouldPlay  
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.addMemoriesBar}>
      {/* <Pressable onPress={() => navigation.navigate('MapLoc2')}>
          <Image style={styles.viewMemoryButtonIcons} source={MapIcon}/>
          </Pressable> */}

          <Pressable onPress={() => navigation.navigate('AddMemory2')}>
          <Image style={styles.viewMemoryButtonIcons} source={AddIcon}/>
          </Pressable>
			</View>
      <View style={styles.viewMemoriesBar}>
            <Pressable style={styles.viewMemoryButtons} onPress={() => navigation.navigate('ViewVideoMemory2')}>
              <Image style={styles.viewMemoryButtonIcons} source={CameraIcon}/>
              <Text style={styles.viewMemoryButtonText}>View video memory</Text>
            </Pressable>

            <Pressable style={styles.viewMemoryButtons} onPress={() => navigation.navigate('ViewTextMemory2')}>
               <Image style={styles.viewMemoryButtonIcons} source={TextIcon}/>
               <Text style={styles.viewMemoryButtonText}>View text memory</Text>
            </Pressable>
			</View>
      <View style={styles.backButtonBar}>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate('Location2Arrival')} >
          <Text style={styles.backButtonText}>  Back to Navigation  </Text>

        </Pressable>
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  homeScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  homeScreenText: {
    fontSize: 32,
  },


  locationLabel: {
    color: '#C25D00',
    backgroundColor:'white',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C25D00',
    overflow: 'hidden' ,
    padding: 10,
    position: 'absolute',
    top: 120,
    right: -120
    // ADD SHADOWS?
    

  },

  viewMemoriesBar: {
    position: 'absolute',
    bottom: 140,
    left: 0,
    right: 0,
		height: 45,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},

  viewMemoryButtons : {
    alignItems: 'center',
    height: 90,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C25D00',
    overflow: 'hidden' , 
  },

  viewMemoryButtonText : {
    fontSize: 18,
    color: '#C25D00',
  },

  viewMemoryButtonIcons: {
    width: 50,
    height: 50,
    resizeMode:'contain'
  },

  addMemoriesBar: {
    flex: 0.9,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },
  backButtonBar: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FF8F00',
    borderRadius: 10,
    width: 180,
    height: 40,
    position: 'absolute',
    bottom: 50
  },

  backButtonText: {
    fontSize: 18,
    color: 'white',
  },

  

});