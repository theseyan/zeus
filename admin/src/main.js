/**
 * Zeus Administration Panel
*/

import './css/app.css'
import App from './App.svelte'

// Mount App
const app = new App({
    target: document.getElementById('app')
})

export default app