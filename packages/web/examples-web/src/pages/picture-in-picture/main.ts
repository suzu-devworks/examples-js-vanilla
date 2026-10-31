import '@/assets/style.scss'
import './style.scss'
import { content as documentPIPContent } from './doc-pip'
import { content as videoPIPContent } from './video-pip'

document.title = `Picture-in-Picture API - ${import.meta.env.VITE_APP_TITLE}`
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Picture-in-Picture API</h1>
  ${videoPIPContent}
  ${documentPIPContent}
`
