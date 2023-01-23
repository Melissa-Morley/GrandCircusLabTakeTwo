interface IRacer {
    team: string;
    speed: number;
    accelerate(): void;
    isFuelEmpty(): boolean;
}

export {IRacer};