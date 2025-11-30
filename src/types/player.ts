export interface Player {
    name: string;
}

export interface GameState {
    player: Player | null;
    isGameStarted: boolean;
    
}