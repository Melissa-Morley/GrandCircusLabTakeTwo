import { useEffect, useState } from "react";
import { Quote } from "../models/Quote";
import { GetQuoteData } from "../services/QuoteService";
import { Card, CardBody, CardText, CardFooter } from "reactstrap";


export function Quotes() {
    const [quote, setQuote] = useState<Quote[]>();

    useEffect(() => {
        GetQuoteData().then(data => setQuote(data));
    }, []);

    useEffect(() => {
        console.log(quote);
    }, [quote])

    let displayQuotes = quote?.map((quote) =>
    <div className = "cardDisplay">
    <Card className = "card">
        <CardBody>
        <CardText className="cardText">{quote.text}</CardText>
        </CardBody>
        <CardFooter className = "cardFooter">{quote.author}</CardFooter>
    </Card>
    </div>
    )



    return(
        <div className="Quotes">
            <header><h1>Quotes</h1></header>
            {quote !== undefined && <>{displayQuotes}</>};
            
        </div>
    )
}