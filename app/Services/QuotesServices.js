import { sandboxApi } from "./AxiosServices.js";

class QuotesServices {
  async getQuote() {
    const res = await sandboxApi.get('quotes')
    console.log('get quotes', res);
  }
}

export const quotesServices = new QuotesServices()