import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const ExpandableImages = ({ title, imageBefore, imageAfter, toggleExpansion, expanded }) => {

    return (
        <View>
            <TouchableOpacity onPress={toggleExpansion}>
                <Text style={styles.label}>{expanded ? '-' : '+'} View {title} Images</Text>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.container}>
                    <Text style={styles.label}>Before Detection</Text>
                    <Image source={{ uri: imageBefore }} style={{ width: 300, height: 300 }} />
                    <Text style={styles.label}>After Detection</Text>
                    <Image source={{ uri: imageAfter }} style={{ width: 300, height: 300 }} />
                </View>
            )}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#051250',
        marginBottom: 10
    }
})

export default ExpandableImages