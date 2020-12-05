import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    Text
} from "react-native"
import {ProgressView} from "@react-native-community/progress-view";

const ProgressViewComponent = () => {
    const [progress, setProgress] = useState(0.0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(progress >= 1.0) {
                clearInterval(interval)
            }
            
            setProgress(progress + 0.05)
    
            
        }, 100)
    }, [])
    

    return (
        <View style={Styles.container}>
            <ProgressView
                progressTintColor="orange"
                trackTintColor="black"
                progress={progress}
                style={{ width: "100%" }} />
            <Text>progress: {progress * 100}</Text>
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

export default ProgressViewComponent;