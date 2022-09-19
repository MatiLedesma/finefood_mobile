import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card, Avatar, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IDeals from '../interfaces/IDeals';

const Icons = MaterialCommunityIcons;

const DealsCard: React.FC<IDeals> = ({ title, description, price, image_uri, promotion, color }) => {
    const [counter, setCounter] = useState<number>(0);

    const increaseCounter = () => setCounter(counter + 1);
    const decreaseCounter = () => counter > 0 && setCounter(counter - 1);

    return (
        <View style={styles.card}>
            <View style={[styles.topTicket, {backgroundColor: color}]}>
                <Text style={{ color: 'white', paddingLeft: 12, fontWeight: 'bold', fontSize: 9 }}>{promotion}</Text>
            </View>
            <Card.Content style={{ flexDirection: 'row' }}>
                <Avatar.Image size={180} source={{ uri: image_uri }} />
                <View style={{ width: 160, paddingLeft: 12, marginTop: 16 }}>
                    <Title style={{ fontWeight: 'bold' }}>{title}</Title>
                    <Text style={{ color: '#666666', fontSize: 16, lineHeight: 20 }}>{description}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>${price}</Text>
                </View>
            </Card.Content>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                <View style={styles.counter}>
                    <TouchableOpacity onPress={decreaseCounter} style={[styles.counterButton, {
                        borderTopLeftRadius: 12,
                        borderBottomLeftRadius: 12
                    }]}>
                        <Icons name="chevron-down" size={16} color="#FB7A32" />
                    </TouchableOpacity>
                    <View style={styles.counterText}>
                        <Text>{counter}</Text>
                    </View>
                    <TouchableOpacity onPress={increaseCounter} style={[styles.counterButton, {
                        borderTopRightRadius: 12,
                        borderBottomRightRadius: 12
                    }]}>
                        <Icons name="chevron-up" size={16} color="#FB7A32" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{marginLeft: 12}}>
                    <Icons name="plus-box-outline" size={30} color="#FB7A32" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 3,
        padding: 12,
        overflow: 'hidden',
        marginBottom: 12
    },
    topTicket: {
        position: 'absolute',
        justifyContent: 'center',
        borderBottomLeftRadius: 12,
        paddingVertical: 6,
        paddingRight: 12,
        top: 0,
        right: 0,
        elevation: 2,
    },
    counter: {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        overflow: 'hidden'
    },
    counterButton: {
        borderWidth: 1,
        borderColor: "#666",
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        width: 40,
        height: 40,
        textAlign: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#666666",
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DealsCard;