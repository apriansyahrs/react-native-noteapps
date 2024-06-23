import React from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginBottom: 20,
    },
    textLabel: {
        marginBottom: 8,
        fontSize: 12,
        fontWeight: '700',
    },
    input: {
      borderWidth: 2,
      borderColor: '#C5C6CC',
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderRadius: 12,
      borderWidth: 1,
      fontSize: 14,
      fontWeight: '400',
    },
  })

  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  )
}

export default CustomTextInput