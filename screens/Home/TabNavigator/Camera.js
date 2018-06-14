import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import {
  Container,
  Content,
  Header,
  Item,
  Icon,
  Input,
  Button
} from 'native-base';
import createStackNavigator from 'react-navigation';

import { Ionicons } from '@expo/vector-icons'; 

// MaterialIcons,
// Foundation,
// MaterialCommunityIcons,
// Octicons

import Gallery from './Gallery';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back, 
    cameraRollUri: null,
    ratios: [],
    newPhotos: false,
    showGallery: false
  };
  
  toggleView = () => this.setState({ showGallery: !this.state.showGallery, newPhotos: false });
  // getRatios for takeSnap
  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async componentDidMount() {
    try {
      await FileSystem.makeDirectoryAsync(
        `${FileSystem.documentDirectory}photos`,
        {
          intermediates: true,
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

//   componentDidMount() {
//     FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
//       console.log(e, 'Directory exists');
//     });
//   }
  setRatio = ratio => this.setState({ ratio });

  // snap mas detallada 
  snap = async () => { 
    if (this.camera) {
                //  takePicture(view,options)
        this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }  
  }
  onPictureSaved = async photo => {
 
    await FileSystem.moveAsync({
    from: photo.uri,
    to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
    });
    this.setState({ newPhotos: true });
  
  };

  // basic cameraExample from RN
    // _handleOnPress = async () => {
    //     let picture = await takePictureAsync(this._container, {
    //     format: 'png',
    //     picture: 'file',
    //     });

    //     this.setState({ cameraRollUri: result });
    // }
    // snap = async function() {
    //     if (this.camera) {
    //         let photo = await this.camera.takePictureAsync();
    //         let resizedPhoto = await ImageManipulator.manipulate(
    //             photo.uri,
    //             [{ resize: { width: 108, height: 192 } }],
    //             { compress: 0, format: "jpg", base64: false }
    //         );
    //         FileSystem.moveAsync({
    //             from: resizedPhoto.uri,
    //             to: `${FileSystem.documentDirectory}photos/Photo_${
    //                 this.state.photoId
    //             }.jpg`
    //         });
    //         this.setState({ photoId: this.state.photoId + 1 });
    //         Vibration.vibrate();            
    //     }
    // };

    // snap = async function() {
    //     if (this.camera) {
    //       this.camera.takePictureAsync().then(async (data) => {

    //         cropdata = {
    //           offset:{x:0, y:0},
    //           size:{width:100, height:100},
    //         };

    //         await ImageEditor.cropImage(
    //           data.uri, 
    //           cropdata,
    //           async (uri) => {
    //             FileSystem.moveAsync({
    //               from: uri,
    //               to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`,
    //             }).then(() => {
    //               this.setState({
    //                 photoId: this.state.photoId + 1,
    //               });
    //               Vibration.vibrate();
    //             });
    //           },
    //           (error) => {
    //             console.log(error);
    //           }
    //         );

    //       });
    //     }
    //   };
    renderNoPermissions = () => 
        <View style={styles.noPermissions}>
        <Text style={{ color: 'white' }}>
            Camera permissions not granted - cannot open camera preview.
        </Text>
        </View>
    renderGallery() {
        return <Gallery onPress={this.toggleView.bind(this)} />;
    };
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
        return <View />;
        } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
        } else {
        return (
            <View style={styles.container}>
            <Camera style={styles.camera}  type={this.state.type} ref={ref => { this.camera = ref; }}>
                <View style={ styles.footer }>
                    <TouchableOpacity
                        onPress={() => { this.setState({
                            type: this.state.type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back,
                            });
                        }}>
                        <Ionicons name="ios-reverse-camera-outline" 
                            style={{ fontWeight: 'bold', color: 'white',fontSize :40 }}> </Ionicons>
                    </TouchableOpacity>
                    {/* onPress={this._handleOnPress}   onPress={this.snap}  */ }
                    <TouchableOpacity onPress={this.snap} >
                        <View style={styles.snapBotton} >
                            <View style={styles.innerSnapButton} > 
                                <Ionicons  name= "md-camera" style={{  color: 'white', fontSize : 90 }} > </Ionicons> 
                            </View>
                        </View>
                    </TouchableOpacity>   
                    {/* <TouchableOpacity onPress={this.toggleView} > */}
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Gallery')} >
                        <View   >
                            <Ionicons name= "md-images" 
                                style={{  fontWeight: 'bold', color: 'white',fontSize :40 }}> </Ionicons>
                                { /* {this.state.newPhotos} */ }
                        </View>
                    </ TouchableOpacity>
                </View>
            </Camera>
            </View>
        );
        }
    }
    renderScreen() {
        const cameraScreenContent = this.state.permissionsGranted
          ? this.render()
          : this.renderNoPermissions();
        const content = this.state.showGallery ? this.renderGallery() : cameraScreenContent;
        return <View style={styles.container}>{content}</View>;
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    camera:{
        flex: 1, 
        justifyContent:'space-between'
    },
    footer:{ 
        justifyContent:'space-around',
        flexDirection: 'row',  
        alignItems: "center",  
        marginTop: 390
    },
    snapBotton:{
        justifyContent:'center',
        alignItems:'center'
    }
   
  });