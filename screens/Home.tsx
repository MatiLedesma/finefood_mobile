import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, Button, Card, Title, Avatar, Portal, Modal } from 'react-native-paper';
import menues from '../components/data/menues';
import MenuCard from '../components/cards/MenuCard';
import DealsCard from '../components/cards/DealsCard';
import deals from '../components/data/deals';
import fast from '../components/data/fast';
import ModalView from '../components/src/ModalView';
const { width, height } = Dimensions.get('screen');

export default function Home() {
    const [visible, setVisible] = useState<boolean>(false);
    const handleModal = () => setVisible(!visible);

    return (
        <View style={styles.container}>
            <Portal>
                <Modal visible={visible} onDismiss={handleModal}>
                    <ModalView data={[]} closeButton={handleModal}></ModalView>
                </Modal>
            </Portal>
            <Appbar.Header style={styles.appBar}>
                <Appbar.Content title="finefoods" titleStyle={styles.titleStyle} />
                <Appbar.Action icon="cart-minus" iconColor='#FFFFFF' onPress={handleModal} />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.body}>
                    <View>
                        <Text style={[styles.text, { fontSize: 65, fontWeight: 'bold' }]}>Delight{'\n'}in every bite!</Text>
                        <Text style={[styles.text, { fontSize: 35 }]}>Delivering happiness,{'\n'}
                            <Text style={{
                                textDecorationLine: 'underline'
                            }}>on time.</Text></Text>
                        <Button onPress={() => null} contentStyle={{ height: 60 }} style={styles.buttonStyle}>
                            <Text style={{
                                color: "#FB7A32",
                                fontWeight: 'bold',
                                letterSpacing: 1,
                                fontSize: 20
                            }}>Explore menu</Text>
                        </Button>
                        <View style={styles.plateImage}>
                            <Image source={require('../components/images/plate.png')} style={{ flex: 1 }} resizeMode='contain' />
                        </View>
                        <Card style={{ borderRadius: 12 }}>
                            <Card.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
                                {
                                    menues?.map(val => <MenuCard key={val.id} {...val} />)
                                }
                            </Card.Content>
                            <Card.Content>
                                <Text style={styles.title}>Deals of the day</Text>
                            </Card.Content>
                            <Card.Content style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                {
                                    deals?.map(val => <DealsCard key={val.id} {...val} />)
                                }
                            </Card.Content>
                            <Card.Content style={{ marginTop: 12 }}>
                                <Text style={styles.title}>Fast & delicious</Text>
                            </Card.Content>
                            <Card.Content style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                {
                                    fast?.map(val => <DealsCard key={val.id} {...val} />)
                                }
                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FB7A32"
    },
    appBar: {
        backgroundColor: "#FB7A32",
        elevation: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.2)'
    },
    titleStyle: {
        color: 'white',
        fontWeight: '700',
        paddingLeft: 12
    },
    body: {
        padding: 12,
        paddingTop: 24
    },
    text: {
        color: 'white'
    },
    buttonStyle: {
        width: 200,
        borderRadius: 12,
        marginTop: 24,
        backgroundColor: 'white',
        height: 60
    },
    plateImage: {
        width: width,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 45,
        fontWeight: 'bold'
    },
    card: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 3,
        padding: 12,
        overflow: 'hidden',
    },
    topTicket: {

        position: 'absolute',
        backgroundColor: '#FB7A32',
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
        borderColor: "#666666",
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