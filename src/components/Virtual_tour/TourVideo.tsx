import myVideo from '../../data/my-video.mp4'

export default function VirtualVideo() {
  return (
    <>
    <article className='container-header'>
    <h2>Are you ready to unlock the  treasures of creativity and explore 
        masterpieces from the comfort of your own space
    </h2>
    <h5> Join us to our</h5>
    <h1 id='virtual'>VIRTUAL TOUR</h1>         
</article>
<article> <video width="340" height="360" controls>
<source src={myVideo} type="video/mp4" />
Your browser does not support the video tag.
</video></article>
</>
  )
}
