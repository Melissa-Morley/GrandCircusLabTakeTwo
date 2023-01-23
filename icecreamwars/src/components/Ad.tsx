import '../css/Ad.css';

interface AdProperties{
    flavor:string,
    isLight:boolean,
    fontSize:number 
}

export function Ad(props:any){
    let className = "Ad " + (props.isLight ? "AdLight" : "AdDark");

    return (
        <div className= {className}>
            <p>Vote for</p>
            <h2 style={{fontSize: props.fontSize}}>{props.flavor}</h2>
            
         
        </div>
    )
}