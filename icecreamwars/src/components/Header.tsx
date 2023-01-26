import { Ad } from "./Ad";

interface user{
    name: string
}

export function Header(props:user){
    return (
        <>
        <header>
            <h2>Ice Cream Wars</h2>
            <div className = "WelcomeMessage">Welcome {props.name}</div>
        </header>
        <section className = "Ads">
        <Ad flavor= {"Chocolate"}
                darkTheme = {true}
                fontSize = {15}
            />
        <Ad flavor= {"Vanilla"}
                darkTheme = {true}
                fontSize = {28}
            />
        <Ad flavor= {"Strawberry"}
                darkTheme = {false}
                fontSize = {32}
            />
        </section>
        </>
    )
    
};