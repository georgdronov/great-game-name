export class startScreen {
    private container: HTMLElement

    constructor(appContainer: HTMLElement) {
        this.container = appContainer
    }

    render(): void {
            this.container.innerHTML = `
        <div class="container">
            <h1>Hello world!</h1>
        </div>
        `

    }
}