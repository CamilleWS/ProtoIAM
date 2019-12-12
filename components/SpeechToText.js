import React, {Component} from 'react';
import {ExpoConfigView} from '@expo/samples';
import { FontAwesome } from '@expo/vector-icons';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    AppRegistry,
    Text,
    Button,
    Dimensions,
    TouchableOpacity,
    Modal,
    Alert,
    TouchableHighlight,
    SafeAreaView,
    View,
    ActivityIndicator,
    Vibration
} from 'react-native';
import {Audio} from 'expo-av'
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import FadeInView from "../components/FadeInView";
import {RippleLoader, TextLoader} from 'react-native-indicator';

const PATTERN = [ 50, 50];

const recordingOptions = {
    android: {
        extension: '.flac',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.wav',
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
        sampleRate: 44100,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
        //plateform -> linear16 pour IOS ( 2 request différentes )
    },
};

const  CLOUD_FUNCTION_URL = "https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyCfCay3CdYQskvfs7YOec6rdcWi06eJnrY"

class SpeechToText extends React.Component {
  constructor(props) {
       super(props);
       this.recording = [];
       this.state = {
           isFetching: false,
           isRecording: false,
           query: '',
       }
   }
   componentDidMount() {
    this._askForPermissions();
  }

   _askForPermissions = async () => {
     const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
     this.setState({
       haveRecordingPermissions: response.status === 'granted',
     });
   };

   componentDidUpdate(prevProps, prevState) {
       const { query } = this.state;
       if (prevState.query === null && query !== null) {
           // update search
       }
   }

   deleteRecordingFile = async () => {
       try {
           const info = await FileSystem.getInfoAsync(this.recording.getURI());
           await FileSystem.deleteAsync(info.uri)
       } catch(error) {
           console.log("There was an error deleting recording file", error);
       }
   }

   getTranscription = async () => {
       this.setState({ isFetching: true });
       try {
           const info = await FileSystem.getInfoAsync(this.recording.getURI());
           option = {encoding:FileSystem.EncodingType.Base64}
           const content = await FileSystem.readAsStringAsync(this.recording.getURI(), option);
            let test = {};
            if ( Platform.OS === 'ios') {
                test = {
                    config: {
                        encoding: 'LINEAR16',
                        sampleRateHertz: 16000,
                        languageCode: 'fr-FR',
                    },
                    audio: {
                        content: content,
                    }
                };
            } else {
                test = {
                    config: {
                        encoding: 'AMR_WB',
                        sampleRateHertz: 16000,
                        languageCode: 'fr-FR',
                    },
                    audio: {
                        content: content,
                    }
                };
            }
           const response = await fetch(CLOUD_FUNCTION_URL, {
               method: 'POST',
               body: JSON.stringify(test)
           });
           const data = await response.json();
           console.log(data);
           transcription = data.results[0].alternatives[0].transcript;
           console.log("Transcription:",  transcription);//results

           this.sendData(transcription);


          // this.setState({ query: transcription });
       } catch(error) {
           console.log('There was an error reading file', error);
           this.stopRecording();
           this.resetRecording();
       }
       this.setState({ isFetching: false });
   }

   startRecording = async () => {

       this.setState({ isRecording: true });
       await Audio.setAudioModeAsync({
           allowsRecordingIOS: true,
           interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
           playsInSilentModeIOS: true,
           shouldDuckAndroid: true,
           interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
           playThroughEarpieceAndroid: false,
           staysActiveInBackground: true,
       });
       const recording = new Audio.Recording();

       try {
           await recording.prepareToRecordAsync(recordingOptions);
           await recording.startAsync();
       } catch (error) {
           console.log(error);
           this.stopRecording();
       }
       this.recording = recording;

      Vibration.vibrate(PATTERN, false) ;

   }

   stopRecording = async () => {

       this.setState({ isRecording: false });
       try {
           await this.recording.stopAndUnloadAsync();

          Vibration.vibrate(PATTERN, false) ;
       } catch (error) {
         console.log(error)
           // Do nothing -- we are already unloaded.
       }
   }

   resetRecording = () => {
       this.deleteRecordingFile();
       this.recording = null;
   }

   handleOnPressIn = () => {
       this.startRecording();
   }

   handleOnPressOut = () => {
       this.stopRecording();
       this.getTranscription();
   }

   handlQueryChange = (query) => {
       this.setState({ query });
   }

   sendData = (transcription) => {
         this.props.parentCallback(transcription);
    };

   render() {
       const { isRecording, query, isFetching } = this.state;
       return (
               <View style={styles.recordButton}>
                 <TouchableOpacity
                     onPressIn={this.handleOnPressIn}
                     onPressOut={this.handleOnPressOut}
                 >
                 {isRecording &&

                  <View style={styles.recordIconRipple}>
                     <View style={styles.recordText}>
                       <TextLoader text="Maintenez appuyé pour parler " />
                     </View>
                     <RippleLoader  size={150} strokeWidth={20} color={'#8A2BE2'}/>

                  </View>
                 }
                 {!isRecording &&
                     <FontAwesome name="microphone" size={38} color="#FFFFFF" style={styles.recordIcon}/>
                 }
                 </TouchableOpacity>
               </View>
       );
   }
}

const styles = StyleSheet.create({
   container: {
       marginTop: 40,
       backgroundColor: '#fff',
       alignItems: 'center',
   },
    recordButton: {
        width: 55,
        height: 55,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.21)'
    },
    recordIconRipple: {
        alignItems:'center',
        marginVertical: -70,
    },
    recordIcon: {
      marginTop: 8,
      marginLeft:15,
    },
    recordText: {
      marginLeft: 70,
      marginTop:0,
      width:200,

    }
});


export default SpeechToText;
