import { leagueService } from "../../../service"
import { LeaguesDto } from "../../dto/leagues"

export const getLeagues = async (): Promise<LeaguesDto[]> => {
    const leagues = await leagueService.getLeagues()
    
    return leagues.data.map<LeaguesDto>(league => ({
        leagueId: league.league_id,
        countryId: league.country_id,
        name: league.name
    }))
}