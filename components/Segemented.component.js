import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    Text
} from "react-native"
import SegmentedControl from '@react-native-community/segmented-control';

const SegementedComponent = () => {
    const [index, setIndex] = useState(0)
    
    return (
        <View style={Styles.container}>
            <SegmentedControl
                values={["마이마이", "사운드볼텍스", "반도리"]}
                selectedIndex={index}
                style={{ width: "100%" }}
                tintColor="#444444"
                backgroundColor="#222222"
                onChange={(event) => {
                    setIndex(event.nativeEvent.selectedSegmentIndex)
                }} />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default SegementedComponent;