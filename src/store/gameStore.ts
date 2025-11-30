import type { GameState, Player } from '../types/player';

class GameStore {
    private state: GameState = {
        player: null,
        isGameStarted: false,
    }

    private listeners: (()=> void)[] = []
    private notify(): void {
        this.listeners.forEach(listener => listener())
    }


    getState(): GameState{
        return this.state
    }

    setPlayer(player: Player): void {
        this.state.player = player
        this.state.isGameStarted = true
        this.notify()    
    }
    
}

export const gameStore = new GameStore();
