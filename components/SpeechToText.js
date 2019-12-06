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
    View, ActivityIndicator
} from 'react-native';
import {Audio} from 'expo-av'
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import FadeInView from "../components/FadeInView";

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
       console.log("Deleting file");
       try {
           const info = await FileSystem.getInfoAsync(this.recording.getURI());
           await FileSystem.deleteAsync(info.uri)
       } catch(error) {
           console.log("There was an error deleting recording file", error);
       }
   }

   getTranscription = async () => {
     console.log("---> Transcript");
       this.setState({ isFetching: true });
       try {
           const info = await FileSystem.getInfoAsync(this.recording.getURI());
           option = {encoding:FileSystem.EncodingType.Base64}
           const content = await FileSystem.readAsStringAsync(this.recording.getURI(), option);

           test = {
               config: {
                  encoding: 'AMR_WB',
                  sampleRateHertz: 16000,
                  languageCode: 'fr-FR',
               },
               audio: {
                   content: content,
               }
           }
           const response = await fetch(CLOUD_FUNCTION_URL, {
               method: 'POST',
               body: JSON.stringify(test)
           });
           console.log(response);
           const data = await response.json();
           console.log(data);
           this.setState({ query: data.transcript });
       } catch(error) {
           console.log('There was an error reading file', error);
           this.stopRecording();
             console.log("---> handleOnPressOut");
           this.resetRecording();
       }
       this.setState({ isFetching: false });
   }

   startRecording = async () => {
     console.log("---> Start");

       this.setState({ isRecording: true });
       await Audio.setAudioModeAsync({
           allowsRecordingIOS: true,
           interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
           playsInSilentModeIOS: true,
           shouldDuckAndroid: true,
           interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
           playThroughEarpieceAndroid: true,
           staysActiveInBackground: true,
       });
       const recording = new Audio.Recording();

       try {
           await recording.prepareToRecordAsync(recordingOptions);
           await recording.startAsync();
       } catch (error) {
           console.log(error);
           this.stopRecording();
             console.log("---> Error");
       }
       this.recording = recording;

   }

   stopRecording = async () => {

       this.setState({ isRecording: false });
       try {
           await this.recording.stopAndUnloadAsync();
             console.log("---> stopRecording -> okay");
       } catch (error) {
         console.log("---> stopRecording -> error");
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
         console.log("---> handleOnPressOut");
       this.getTranscription();
   }

   handlQueryChange = (query) => {
       this.setState({ query });
   }

   render() {
       const { isRecording, query, isFetching } = this.state;
       return (
               <View>
               <TouchableOpacity
                   style={styles.button}
                   onPressIn={this.handleOnPressIn}
                   onPressOut={this.handleOnPressOut}
               >
                <Text>Hold for Voice Search</Text>
               </TouchableOpacity>
                   {isRecording &&
                       <FadeInView>
                           <FontAwesome name="microphone" size={32} color="#48C9B0" />
                       </FadeInView>
                   }
                   {!isRecording &&
                       <FontAwesome name="microphone" size={32} color="#48C9B0" />
                   }
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
   button: {
       backgroundColor: '#48C9B0',
       paddingVertical: 20,
       width: '90%',
       alignItems: 'center',
       borderRadius: 5,
       marginTop: 20,
   }
});


export default SpeechToText;
