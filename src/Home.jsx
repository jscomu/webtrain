
import imgSpace from '/img/spaceship.png'
import './Home.css'

function Home() {

  return (
    <>
    <div class="titlebox">
        <p class="txt1">가나다 다다다</p>
        <div><img src={imgSpace} /></div>
        <div><button class="btn" onClick="">Home</button></div>
    </div>
    </>
  )
}

export default Home
