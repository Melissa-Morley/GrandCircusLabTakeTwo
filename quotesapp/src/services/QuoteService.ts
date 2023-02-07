import axios from "axios"
import { Quote } from "../models/Quote"

export function GetQuoteData() :Promise<Quote[]> {
    return axios.get<Quote[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(response => response.data)
}