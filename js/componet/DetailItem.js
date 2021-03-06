/**
 * Created by Mrx on 2017/7/9.
 */
import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
}from 'react-native'

// 每条列表的组件
export default class HotItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.contentContainer}>
                <Image source={{uri: 'http:' + this.props.itemValue.member.avatar_normal}}
                       style={styles.imageStyle}/>
                <View style={styles.textContainer}>
                    <Text style={styles.nameStyle}>{this.props.itemValue.member.username}</Text>
                    <Text style={styles.titleStyle}>{this.props.itemValue.content}</Text>
                </View>
            </View>
        )
        console.log(this.props.itemValue)
    }
}

const styles = StyleSheet.create({
    touchStyle: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 5,
        flexDirection: 'column',
    },
    titleStyle: {
        fontSize: 14,
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    contentStyle: {
        fontSize: 13,
        paddingTop: 2
    },
    imageStyle: {
        borderRadius: 5,
        width: 50,
        height: 50,
    }
})