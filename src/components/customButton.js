import React from "react";
import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";

const CustomButton = ({
    backgroundColor,
    color,
    text,
    onPress,
    fontSize = 14,
    width =  100,
}) => {
    const style = StyleSheet.create({
        button: {
            alignItems: 'center',
            backgroundColor,
            width,
            padding: 16,
            borderRadius: 12,
        },
        buttonText: {
            fontSize,
            fontWeight: '600',
            color,
        }
    })

    return (
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton