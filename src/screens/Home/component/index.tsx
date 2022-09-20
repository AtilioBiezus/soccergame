import React from "react"
import { Pressable, Text, View } from "react-native"
import { LeaguesItemProps } from "./interface"
import Styles from "./styles"

const LeagueItem = ({ item, onPress }: LeaguesItemProps) => {

    return (
        <View style={Styles.container}>
            <Pressable onPress={() => onPress(item)}>
                <Text style={Styles.content}>{item.name}</Text>
            </Pressable>
        </View>
    )
}

export default LeagueItem