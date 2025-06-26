
import imgSpace from '/img/spaceship.png'
import './Idea.css'

function Idea() {

  return (
    <>
    <h2>Chat Messages</h2>

    <ul className='ChatList'>
<div class="container">
  <p>Hello. How are you today?</p>
  <span class="time-right">11:00</span>
</div>


<div class="container darker">
  
  <p>Hey! I'm fine. Thanks for asking!</p>
  <span class="time-left">11:01</span>
</div>

<div class="container">
  
  <p>Sweet! So, what do you wanna do today?</p>
  <span class="time-right">11:02</span>
</div>

<div class="container darker">
  
  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?Nah, I dunno. Play soccer.. or learn more coding perhaps?Nah, I dunno. Play soccer.. or learn more coding perhaps?Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
  <span class="time-left">11:05</span>

  
</div>
</ul>

    <div className='InputBar'>
      <input />
      <button>
        보내기
      </button>
    </div>
    </>
  )
}

export default Idea
