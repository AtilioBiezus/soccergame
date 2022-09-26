export interface StandingDto{
    teamId: number,
    position: number,
    points: number,
    status: string,
    result?: string,
    gamesPlayed: number,
    won: number,
    draw: number,
    lost: number,
    goalsDiffs: number,
    goalsScored: number,
    goalsAgainst: number,
}