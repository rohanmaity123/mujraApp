//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, Dimensions } from 'react-native';
import ButtomTabNavigtor from '../../component/BottomTabNavigator/index';
import Video from 'react-native-video';
const postArr = [
    {
        type: 'http://techslides.com/demos/sample-videos/small.mp4'
    },
    {
        type: 'http://techslides.com/demos/sample-videos/small.mp4'
    },
    {
        type: 'http://techslides.com/demos/sample-videos/small.mp4'
    }
]

const { width, height } = Dimensions.get('window')
// create a component
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                {/* {console.log("height", height)} */}
                <FlatList
                    snapToAlignment={'top'}
                    viewabilityConfig={{ itemVisiblePercentThreshold: 20 }}
                    pagingEnabled={true}
                    decelerationRate={'fast'}
                    data={postArr}
                    showsVerticalScrollIndicator={false}
                    initialScrollIndex={true}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: height, width: width }}>
                                <Video
                                    // paused="false"
                                    source={{ uri: item.type }}
                                    resizeMode="cover"
                                    style={{ flex: 1 }}
                                    // onLoad={this.handleLoad}
                                    // onProgress={this.handleProgress}
                                    onEnd={this.handleEnd}
                                    ref={(ref) => (this.player = ref)}
                                    onLoadStart={this.handleFullScreenToLandscape}
                                // reportBandwidth={true}
                                // onBandwidthUpdate={this.handleBandwidth}
                                />
                            </View>
                        )
                    }}
                />

                <ButtomTabNavigtor />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Home;
