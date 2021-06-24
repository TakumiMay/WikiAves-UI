import { GET_BIRD, GET_REGION_BIRD } from "../constants/constants";
import { fetchWithToken } from "../helpers/fetch";

export function getBird(birdName) {
    return {
        type: GET_BIRD,
        async payload() {
            const response = await fetchWithToken('posts/birds',birdName,'GET')
            const body = await response.json();
            return body;
        }
    }
}

export function getBirdFromRegion(birdName, region) {
    return {
        type: GET_REGION_BIRD,
        async payload() {
            const response = await fetchWithToken(`posts/birds?search=${region}`, { birdName, region },'GET')
            const body = await response.json();
            return body;
        }
    }
}
