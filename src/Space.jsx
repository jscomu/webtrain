
import imgSpace from '/img/spaceship.png'
import './Space.css'

function Space() {

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

export default Space
