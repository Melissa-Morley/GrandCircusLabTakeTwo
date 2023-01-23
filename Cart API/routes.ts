import { Router, Request, Response } from "express";
import { Item } from "./item";

//hard coded data

let itemArray:Item[] = [
    {id: 1, quantity: 20, price: 10, product: "eggs", isActive: true},
    {id: 2, quantity: 12, price: 17, product: "croissants", isActive: true},
    {id: 3, quantity: 3, price: 5, product: "apples", isActive: true},
    {id: 4, quantity: 14, price: 20, product: "bagels", isActive: true}
];

export const itemRouter = Router();

itemRouter.get("/", async (req:Request, res:Response) : Promise<Response> => {
    if(req.query.maxPrice !== undefined){
        let underArray = itemArray.filter((x) => x.price <= Number(req.query.maxPrice) && x.isActive);
        return res.status(200).json(underArray);
    }
    else if(req.query.prefix !== undefined){
        let startsWithArray = itemArray.filter((x) => x.product.startsWith(String(req.query.prefix)) && x.isActive);
        return res.status(200).json(startsWithArray);
    }
    else if(req.query.pageSize !== undefined){
        let pageSizeArray = itemArray.filter((x) => x.isActive).slice(0, Number(req.query.pageSize));
        return res.status(200).json(pageSizeArray);
    }
    else{
        return res.status(200).json(itemArray.filter((x) => x.isActive));
    }    
});

//URI parameter is for when you want a specific thing (typically to find by id)
//find returns either the item you're looking for or undefined if it's not found
itemRouter.get("/:id", async (req:Request, res:Response) :Promise<Response> => {
    let itemIWantToFind = itemArray.find((x) => x.id === Number(req.params.id));
    if(itemIWantToFind === undefined){
        return res.status(404).send("ID not found");
    }
    else{
        return res.status(200).json(itemIWantToFind);
    }
    
});

itemRouter.post("/", async (req:Request, res:Response) :Promise<Response> => {
    let newItem:Item = {
        id: GetNextId(),
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        isActive: true
    };

    itemArray.push(newItem);

    return res.status(201).json(newItem);
});


 itemRouter.put("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let itemFound = itemArray.find((x) => x.id === Number(req.params.id));

    if(itemFound !== undefined){
        itemFound.price = Number(req.body.price);
        itemFound.product = String(req.body.product);
        itemFound.quantity = Number(req.body.quantity);

        return res.status(200).json(itemFound);
    }
    else{
        return res.status(404).send("Hey I didn't find it bro");
    }
});

itemRouter.delete("/:id", async (req:Request, res:Response) :Promise<Response> => {
    let itemToDelete = itemArray.find((x) => x.id === Number(req.params.id));
    
    if(itemToDelete === undefined){
        return res.status(404)
    }
    
    else{
        // itemArray.splice(Number(req.params.id) - 1, 1);

        itemToDelete.isActive = false;
        console.log(itemArray); /* console.log allows you to view the itemArray after item was deleted to confirm it's still in the array */
        return res.status(204)};
});

 function GetNextId(){
    return Math.max(...itemArray.map((x) => x.id)) + 1;
 };
