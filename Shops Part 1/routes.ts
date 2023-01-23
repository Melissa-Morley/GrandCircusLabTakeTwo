import { Shop } from "./shop";
import {Router, Request, Response} from "express";

let shopArray: Shop[] = [
    { id: 1, name: "Pepper's Pizza", rating: 4.5},
    { id: 2, name: "Clive's Chives", rating: 3.4},
    { id: 3, name: "Betty's Brews", rating: 4.3},
    { id: 4, name: "Sylvester's Shoes", rating: 3.8},
    { id: 5, name: "Teddy's Tunes", rating: 4.7}

];

export const itemRouter = Router();

itemRouter.get("/", async (req:Request, res:Response) :Promise<Response> => {
    if(req.query.minRating !== undefined){
        let minRatingArray = shopArray.filter((x) => x.rating >= Number(req.query.minRating));
        return res.status(200).json(minRatingArray);
    }
    else if(req.query !== undefined){
        return res.status(200).json(shopArray);
    }
    
    else{
        return res.status(404)
    }
});

itemRouter.get("/:id", async (req:Request, res:Response) :Promise<Response> => {
    let itemFound = shopArray.find((x) => x.id === Number(req.params.id));

    if(itemFound === undefined){
        return res.status(404).send(`"error": "Shop not found: ${req.params.id}"`)
    }
    else{
        return res.status(200).json(itemFound);
    }
});

itemRouter.post("/", async (req:Request, res:Response) :Promise<Response> => {
    let newShop:Shop = {
        id: GetNextID(),
        name: req.body.name,
        rating: req.body.rating,
    };

    shopArray.push(newShop);

    return res.status(201).json(newShop);
});

itemRouter.put("/:id", async (req:Request, res:Response) :Promise<Response> => {
    let shopFound = shopArray.find((x) => x.id === Number(req.params.id))

    if(shopFound !== undefined){
        shopFound.name = req.body.name;
        shopFound.rating = req.body.rating;

        return res.status(200).json(shopFound);
    }
    else{
        return res.status(404).send("I didn't find that shop");
    }
});

itemRouter.delete("/:id", async (req:Request, res:Response) :Promise<Response> => {
    let shopToDelete = shopArray.find((x) => x.id === Number(req.params.id));

    if(shopToDelete === undefined){
        return res.status(404);
    }
    else{
        shopArray.splice(Number(req.params.id) - 1, 1);

        return res.status(204)
    }
});

function GetNextID(){
    return Math.max(...shopArray.map((x) => x.id)) + 1;
}