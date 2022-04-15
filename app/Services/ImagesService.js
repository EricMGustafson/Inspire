import { sandboxApi } from "./AxiosServices.js";


class ImagesService {
  async getImage() {
    const res = await sandboxApi.get('images')
    console.log('Get image', res);
  }
}
export const imagesService = new ImagesService()