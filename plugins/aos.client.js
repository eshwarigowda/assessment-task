import AOS from 'aos'
import 'aos/dist/aos.css'

export default () => {
  if (process.client) {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    })
  }
}
