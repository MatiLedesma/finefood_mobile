import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Card from '../interfaces/ICard';

const MenuCard: React.FC<Card> = ({ title, image_uri }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.cardImage}>
            <View style={styles.cape}>
                <Text style={styles.imageText}>{title}</Text>
            </View>
            <Image style={{ flex: 1 }} resizeMode="cover" source={{ uri: image_uri }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardImage: {
        position: 'relative',
        width: 400,
        height: 250,
        overflow: 'hidden',
        borderRadius: 12,
        marginBottom: 12,
        marginTop: 12
    },
    imageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 62,
    },
    cape: {
        backgroundColor: 'rgba(0,0,0,.2)',
        position: 'absolute',
        width: 400,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        zIndex: 1
    },
});

export default MenuCard;