import { LeaguesDto } from "../../../domain/dto/leagues";

export interface LeaguesItemProps {
    item: LeaguesDto,
    onPress: (league_id: LeaguesDto) => void
}