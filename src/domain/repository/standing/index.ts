import { standingService } from "../../../service";
import { TeamStanding } from "../../../service/standings/interface";
import { GroupDto } from "../../dto/group";
import { StandingDto } from "../../dto/standing";

export const getStandings = async (season: number): Promise<StandingDto[]> => {
   const response = await standingService.getStandings(season)

   if (response.has_groups) {
      const groups = response.standings as TeamStanding[][]

      return groups.map<GroupDto><group => ({
         teams[]: group.teams
      })

   } else {
      const standings = response.standings as TeamStanding[]

      return standings.map<StandingDto>(standing => ({
         teamId: standing.team_id,
         position: standing.position,
         points: standing.points,   
         status: standing.status,
         result: standing.result,
         gamesPlayed: standing.gamesPlayed,
         won: standing.won,
         draw: standing.draw,
         lost: standing.lost,
         goalsDiffs: standing.goalsDiffs,
         goalsScored: standing.goalsScored,
         goalsAgainst: standing.goalsAgainst,
   
      })) 

   }


}






