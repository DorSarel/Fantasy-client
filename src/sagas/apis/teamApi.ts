import { HttpClient } from "../../services/httpClient"

export const getTeamById = async (leagueId: string, teamId: string) => {
    return await HttpClient.get(`/teams/${leagueId}/${teamId}`);
}