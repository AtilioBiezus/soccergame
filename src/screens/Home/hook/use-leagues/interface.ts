import { LeaguesDto } from "../../../../domain/dto/leagues";

export interface UseLeaguesResult {
    loading: boolean,
    leagues: LeaguesDto[],
}
