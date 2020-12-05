import React, {useState} from 'react';
import { View, StyleSheet, Text, DatePickerIOS } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerComponent = () => {
    const [date, setDate] = useState(new Date())

    return (
        <View style={Styles.container}>
            <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="spinner"
                onChange={(event, selectedDate) => setDate(selectedDate)}
                style={{width: "100%", backgroundColor: "red"}}
                 />
            <Text>{date.toLocaleDateString()}</Text>
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

export default DatePickerComponent;