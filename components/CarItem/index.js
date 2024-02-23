import React  from "react";
import styles from './styles'
import StyledButton from "../StyledButton";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
const CarItem = (props) => { 
    return (
            <View style={styles.carContainer}>
            <ImageBackground
                 source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image}
            />
                <View style={styles.titles}>
                    <Text style={styles.title}>Model 1</Text>
                    <Text style={styles.subtitle}>Starting at $69,420</Text>
                </View>
            <StyledButton/>
        </View>
    );


}
export default CarItem;