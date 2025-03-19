import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"


class HouseService {
  async getHouses() {

    const response = await api.get('api/houses')
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses

  }

  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    const house = new House(response.data)
    AppState.houses.push(house)
  }

  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    logger.log('Deleting this house,', response.data)
    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseId)
    houses.splice(houseIndex, 1)

  }


}



export const houseService = new HouseService()