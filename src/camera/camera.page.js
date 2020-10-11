import React, { Component, useRef, useEffect, useState } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  Platform,
  Text,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  DrawerLayoutAndroidComponent,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Spinner from 'react-native-loading-spinner-overlay'
import axios from 'axios'
import styles from './styles.js';

const Camera = () => {


  const [uri, setURI] = useState('');
  const [loading, setLoading] = useState(false);
  const [weedDetail, setWeedDetail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [2, 3],
        quality: 1,
      });
      if (!data.cancelled) {
        setURI(data.uri)
      }
    } else {
      Alert.alert('Permission is required to access Gallery');
    }
  };

  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [2,3],
        quality: 0.5,
      });
      if (!data.cancelled) {
        setURI(data.uri)
      }
    } else {
      Alert.alert("Permission is required to access Gallery");
      Linking.openURL("app-settings:");
    }
  };

  const submitPicture = async () => {
    setLoading(true)
    const data = new FormData()
    data.append('file', {
        name: 'Weed.jpg',
        uri: uri,
        type: "image/jpg"
    })
    const response = await axios.post('http://192.168.43.24/predict', data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    })
    console.log(response)
    setLoading(false)
    setWeedDetail('asdgkalrg nrjkgn rugn urgb akgakjgbigb ibgi ubg ig rigb gb rbg bgr greiugb rubg rubg rbg rugb rubgg regb bg gu ebg uirgbru ger gre gbireugb rgnb rgb rgub grugb rn grungbrnvbui fniuren fiugrb irubg iurb fgb rfgb rubg rub rubgeiurbgfu erbgeurg bufgb iufgb eugb eubg euig eirbg fnerfneir gfeirbgf er frbg fuir fnierubgf r furf fbru fbg ufreug fru fbug guuri bgriue biuer')
    setShowModal(true)
  }

  let CondView = () => {
      if(!uri)
        return(
            <Text style={{marginVertical: 230 ,...styles.caption}}>
                With millions of species of weed its hard to know what you have in hand. Share a picture of a "suspected" weed and our Deployed Model should help you distinguish what type of weed you are dealing with.
            </Text>
        )
      else
        return(
            <View style={styles.container}>
                <Image style={{...styles.imagePreview, ...styles.container}} source={{uri: uri}}></Image>
                <TouchableOpacity onPress={() => submitPicture()} style={styles.submit}>
                    <Text style={styles.text}>Submit -></Text>
                </TouchableOpacity>
            </View>
        )
  }
  
  return (
    <View>
        <View>
            <Text style={styles.title}>Weed AI</Text>
            <Text style={styles.subtitle}>Know Your Weed</Text>
        </View>
        <View >
            <CondView></CondView>
            <Spinner visible={loading} textContent="Processing..."></Spinner>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', ...styles.container }}>
            <TouchableOpacity onPress={() => pickFromGallery()} style={styles.button}>
                <Text style={{ color: '#ffff' }}>From Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pickFromCamera()} style={styles.button}>
                <Text style={{ color: '#ffff' }}>Take a Pic</Text>
            </TouchableOpacity>
        </View>


        <Modal            
          animationType = {"fade"}  
          transparent = {true}  
          visible = {showModal}  
          onRequestClose = {() =>{ setShowModal(false) } }>  
            <View style={styles.modal}>  
              <Text style = {styles.modalText}>{weedDetail}</Text>  
              <Button title="Close" onPress = {() => {  
                  setShowModal(false)}}/>  
            </View>  
        </Modal>  
    </View>
  );
};

export default Camera;
