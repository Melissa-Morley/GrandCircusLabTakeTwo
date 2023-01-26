import '../css/Ad.css';

interface AdProps{
    flavor: string,
    fontSize: number,
    darkTheme: boolean
}

export function Ad(props:AdProps){
    let className = "Ad " + (props.darkTheme ? "AdLight" : "AdDark");

    return (
        <div className= {className}>
            <p>Vote for</p>
            <h2 style={{fontSize: props.fontSize}}>{props.flavor}</h2>
            
         
        </div>
    )
}