import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text
} from "react-native"
import {Picker} from '@react-native-picker/picker';

const PickerComponent = () => {
    const [item, setItem] = useState()

    return (
        <View style={Styles.container}>
            <Picker 
                selectedValue={item} 
                style={{height: 50, width: "100%"}}
                onValueChange={(itemValue, itemIndex) =>
                    setItem(itemValue)
                }>
                <Picker.Item label="마이마이" value="maimai" />
                <Picker.Item label="사운드 볼택스" value="sdvx" />
                <Picker.Item label="반도리 걸파" value="bangdream" />
            </Picker>

            <Text>선택된 아이템: {item}</Text>
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

export default PickerComponent;