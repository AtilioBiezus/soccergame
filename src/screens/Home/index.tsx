import React, { useCallback } from "react";
import { ListRenderItemInfo, Text, View } from "react-native";
import { LeaguesDto } from "../../domain/dto/leagues";
import LeagueItem from "./component";
import useLeagues from "./hook/use-leagues";
import Styles from "./styles";

type LeagueItemInfo = ListRenderItemInfo<LeaguesDto>

const Home = () => {
    const { leagues } = useLeagues()

    //NAVEGAÇÃO
    // const navigation = useNavigation<AppNavigationProp>()
    // const openSeasons = useCallback((league_id: LeaguesDto) =>
    //     navigation.navigate('Seasons', { league_id }), [])

    return (
        <View style={Styles.content}>
            <Text style={Styles.title}>SELECIONE A LIGA:</Text>
            {leagues.map(league => (
                <LeagueItem item={league} onPress={() => {}} key={league.leagueId}/>
            ))}
        </View>
    )
}

export default Home