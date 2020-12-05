import React, {useState} from 'react';
import {
    View, Text, Button, StyleSheet, ActionSheetIOS, Alert
} from "react-native"

const ActionSheetComponent = () => {
    const Buttons = ["닫기", "뱅드림 실행", "마이마이 실행", "사볼 실행"]

    const [index, setIndex] = useState(0)

    const onActionPressed = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            options: Buttons,
            cancelButtonIndex: 0
        }, (buttonIndex) => {
            setIndex(buttonIndex)
        })
    }

    const onSharePressed = () => {
        ActionSheetIOS.showShareActionSheetWithOptions({
            url: "https://saintdev.kr",
            message: "이거 누르면 해킹당함 ㅋ"
        },
        (error) => console.log("error:", error),
        (success, method) => {
            if(success) {
                Alert.alert("공유 완료", "아싸 니 폰 해킹함 ㅅㄱ")
            } else {
                Alert.alert("공유 실패", "까비")
            }
        })
    }

    return (
        <View style={Styles.container}>
            <Button title="게임 실행" onPress={onActionPressed} />
            <Text>선택된 게임: {Buttons[index]}</Text>

            <Button title="공유 실행" onPress={onSharePressed} />
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

export default ActionSheetComponent;