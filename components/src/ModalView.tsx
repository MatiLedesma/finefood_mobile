import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const Icons = MaterialCommunityIcons;
const { width, height } = Dimensions.get("screen");

interface Data {
    data: [],
    closeButton: () => void
}

const ModalView: React.FC<Data> = ({ data, closeButton }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.floatButton} onPress={closeButton}>
                <Icons name="close" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.header}>
                <Icons name="pasta" size={125} color="#FFFFFF" />
            </View>
            <View>
                {
                    data.length === 0 ? (
                        <View style={[styles.body, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ fontSize: 24, color: "#959595", fontWeight: 'bold' }}>
                                No have any items.
                            </Text>
                        </View>
                    ) : (
                        <View>

                        </View>
                    )
                }
                <Text style={{ alignSelf: 'flex-end', paddingRight: 12, fontSize: 16, paddingBottom: 12, color: '#757575' }}>Total:
                    <Text style={{ fontWeight: 'bold', color: "#000000" }}> {data.length} items / ${data.length}</Text>
                </Text>
                <Button onPress={() => null} contentStyle={{ height: 45 }} style={styles.buttonStyle}>
                    <Text style={{ color: "#ffffff", fontWeight: 'bold', fontSize: 18 }}>Order</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 12,
        width: width * 0.8,
        backgroundColor: "#FFFFFF"
    },
    header: {
        backgroundColor: "#FB7A32"
    },
    body: {
        minHeight: height * 0.2,
        maxHeight: height * 0.4
    },
    buttonStyle: {
        alignSelf: 'flex-end',
        marginRight: 12,
        marginBottom: 12,
        width: 100,
        borderRadius: 12, 
        backgroundColor: '#FB7A32',
        height: 45
    },
    floatButton: {
        position: 'absolute',
        top: 12,
        right: 12,
        zIndex: 1,
    }
});

export default ModalView;