import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native';
import News from './components/News';
const data = [
    {
        id: 0,
        img: require("./components/ceasefire.jpg"),
        head: 'Armenia and Azerbaijan truce comes into force',
        text: 'The ceasefire over disputed Nagorno-Karabakh region was agreed  after talks in Moscow',

    },
    {
        id: 1,
        img: require("./components/hurricane.jpg"),
        head: 'Hurricane Delta hits storm-battered Lousiana',
        text: 'The state is still recovering from damage caused by another storm, Hurricane Laura, in August',

    },
    {
        id: 2,
        img: require("./components/belarus.jpg"),
        head: 'UK recalls ambassador to Belarus amid unrest',
        text: 'The UK has temporarily recalled its ambassador from Belarus amid growing tensions over political unrest there ',

    },
    {
        id: 3,
        img: require("./components/whales.jpg"),
        head: 'Real and imminent extinction risk to whales',
        text: 'Hundreds of scientists call for global action to protect whales, dolphins and porpoises',

    },



]
const Main = () => {
    return (
        <ScrollView>
            <SafeAreaView style={{ backgroundColor: "#fff" }}>
                <View style={styles.header}>
                    <Image style={{ width: 50, height: 50 }} source={require("./components/lighthouselogo.png")} />
                    <Text style={{
                        fontSize: 27,
                        fontWeight: "bold", color: "#d50000", marginLeft: 40
                    }}>Lighthouse News</Text>
                </View>

                <View>
                    {data.map((item) => {
                        return (
                            <News
                                picture={item.img}
                                title={item.head}
                                text={item.text}
                            />);
                    })}
                </View>
                <View style={styles.input}>
                    <Image style={styles.searchimage} source={require("./components/search_icon.png")} />
                    <TextInput placeholder="Search Lighthouse..." />
                </View>

                <View >
                    <Text style={styles.footerText}>
                        World
                    </Text>
                    <Text style={styles.footerText}>
                        Bussines
                    </Text>
                    <Text style={styles.footerText}>
                        Sports
                    </Text>
                    <Text style={styles.footerText}>
                        Weather
                    </Text>
                    <Text style={styles.footerText}>
                        Health
                    </Text>
                </View>





            </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header: {


        margin: 10,
        borderColor: "#1a237e",
        borderWidth: 2,
        borderRadius: 5,
        flex: 1,
        flexDirection: "row",
    },

    input: {
        backgroundColor: "white",
        width: 280,
        height: 45,
        borderRadius: 10,
        marginBottom: 30,
        paddingLeft: 5,
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,

    },
    searchimage: {
        width: 50,
        height: 50,
        padding: 5,
        margin: 5,
    },
    footerText: {
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 30,
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 20,

    },
})
export default Main;