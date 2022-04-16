import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosServices.js";

class QuotesServices {
  async getQuote() {
    const res = await sandboxApi.get('quotes')
    ProxyState.currentQuote = res.data
  }
}

export const quotesServices = new QuotesServices()