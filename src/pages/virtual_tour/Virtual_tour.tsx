import React, { useState } from 'react'
import myImage from '../../data/team_01.jpg';
import secondImage from '../../data/team_02.jpg';
import myVideo from '../../data/my-video.mp4'


export default function Virtual_tour() {
    const [member, setMember] = useState()
  return (
    <section>
        <article>
            <h1>Are you ready to see the treasure of art throught our virtual tour?</h1>
            <video width="340" height="360" controls>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </article>
      <article>
        <h1>OUR TEAM</h1>
        <p>At Magnolia, we're proud to introduce our passionate team of art enthusiasts 
            who are dedicated to sharing the wonders of creativity with you.
        </p>
      </article>
      <ul>
        <li>
            <h1>Anna</h1>
            <img src = {myImage} alt="team member" />
            <p> Anna Meer is our official virtual tour guide, ready to lead you through the treasures 
                of our museum from the comfort of your own home. With her expertise and passion for 
                art, Anna will be your companion on an immersive journey.
            </p>
        </li>
        <li>
            <h1>Sarah</h1>
            <img src = {secondImage} alt="team member" />
            <p> Meet Sarah Ray, our dedicated art concierge, committed to providing you with personalized 
                assistance and insights tailored to your interests. With a keen eye for detail and a 
                deep appreciation for the arts, Sarah is here to curate a bespoke experience for you.
            </p>
        </li>
      </ul>
    </section>
  )
}
