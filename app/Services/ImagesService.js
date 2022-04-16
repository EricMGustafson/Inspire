import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosServices.js";


class ImagesService {
  async getImage() {
    const res = await sandboxApi.get('images')
    ProxyState.currentImage = res.data
  }
}
export const imagesService = new ImagesService()