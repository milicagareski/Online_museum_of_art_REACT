import { useState } from 'react'

export default function Rating() {
    const [rating, setRating] = useState(false)

    const ratingPage = () =>{
        setRating(true)
        setTimeout(() => {
            setRating(false)
        }, 3000);
    }
  return (
    <section>
      <article id='rating'>
        <h2>Please rate out collection</h2>
      </article>
      {rating && <article>
        <p style={{ color: "green" }}>Thank you for the feedback</p>
        </article>}
      <article className='stars'>
      {[1, 2, 3, 4, 5].map((_, index) => {
        return (  
          <span className='star' key={index} onClick={ratingPage}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
      </article>
    </section>
  )
}
