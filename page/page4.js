import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    Platform
} from 'react-native';

// import MapView from 'react-native-maps';
export default class Page4 extends Component {



    onRegionChange(region) {
        this.setState({ region });
    }


    constructor(props){
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }


    componentDidMount() {

    }

    render() {
        return (<View style={{backgroundColor:'white',flex:1,marginTop: Platform.OS === "ios" ? 64 : 54,}}>
        
            </View>
        );

        // return (<View style={{backgroundColor:'white',flex:1,marginTop: Platform.OS === "ios" ? 64 : 54,}}>
        //         <MapView style={{flex:1,width:100}}
        //                  region={this.state.region}
        //                  onRegionChange={this.onRegionChange}
        //         />
        //     </View>
        // );
    }
}