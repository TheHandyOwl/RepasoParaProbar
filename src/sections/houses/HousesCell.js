import React, { Component } from 'react'
import { Dimensions, Image, View, Text, StyleSheet , TouchableOpacity } from 'react-native'
import { Colors } from 'RepasoParaProbar/src/commons';

export default class HousesCell extends Component {

    static defaultProps = {
        item: {},
        onSelectItem: () => {},
    }

    render() {
        const { item, onSelectItem } = this.props
        const image = item.image_dir ? { uri: item.image_dir } : null
        console.log("image: ", image)
        
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={ () => onSelectItem(item) }
                onLayout={ e => this.setState({ layout: e.nativeEvent.layout}) }
            >
                <Image
                    style={styles.image}
                    source={image}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
    },
    image: {
        margin: 10,
        width: Dimensions.get('window').width / 2 - 20, // 857/600
        height: (Dimensions.get('window').width / 2 - 20 ) * (857/600),
        backgroundColor: Colors.blue,
        resizeMode: 'contain', // 'contain', 'cover', 'stretch'
    }
    
});
