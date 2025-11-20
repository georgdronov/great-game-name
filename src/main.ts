import './style.scss'
import '@material/web/button/filled-button.js'
import '@material/web/progress/circular-progress.js'

const app = document.querySelector('#app')

if (app) {
  app.innerHTML = `
    <div class="container">
      <h1 class="title">AI NEXUS</h1>
      <p class="subtitle">Neural Network Interface</p>

      <div class="action-area">
        <md-filled-button id="start-btn">Initialize System</md-filled-button>
      </div>

      <div class="console" id="console-output">
        <span class="code-text">> Waiting for command...</span>
      </div>
    </div>
  `
}

const button = document.getElementById('start-btn')
const output = document.getElementById('console-output')

if (button && output) {
  button.addEventListener('click', () => {
    output.innerHTML = '<span class="code-text">> Connecting to server...</span>'
    
    setTimeout(() => {
      output.innerHTML = `
        <span class="code-text">> Connection established.</span><br>
        <span class="code-text">> AI Model: Online</span>
      `
    }, 2000)
  })
}