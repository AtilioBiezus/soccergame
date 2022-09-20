import { useCallback, useEffect, useState } from "react"
import { LeaguesDto } from "../../../../domain/dto/leagues"
import { leaguesRepository } from "../../../../domain/repository"
import { UseLeaguesResult } from "./interface"

const useLeagues = (): UseLeaguesResult => {
    const [loading, setLoading] = useState(false)
    const [leagues, setLeagues] = useState<LeaguesDto[]>([])

    const loadLeagues = useCallback(async () => {
        setLoading(true)

        const result = await leaguesRepository.getLeagues()
        
        setLeagues(result)
        setLoading(false)
    }, [])

    useEffect(() => {
        loadLeagues()
    }, [])

    return {
        loading,
        leagues,
    }
}

export default useLeagues