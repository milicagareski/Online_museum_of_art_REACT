import myImage from '../../data/team_01.jpg';
import secondImage from '../../data/team_02.jpg';
import thirdImage from '../../data/team_03.jpg';
import { Link } from 'react-router-dom';

export default function TourList() {
  return (
  <>
        <article className='container-header team'>
        <h2>Meet our team who will guide you through the virtual reality experience</h2>
        <p>At Magnolia, we're proud to introduce our passionate team of art enthusiasts 
            who are dedicated to sharing the wonders of creativity with you.
        </p>
      </article>
      <ul className='team-list'>
   <li>
            <h1>Anna</h1>
            <img src = {myImage} alt="team member" />
            <p> Anna Meer is our official virtual tour guide, ready to lead you through the 
              treasures of our museum from the comfort of your own home. With her expertise 
              and passion for art, Anna will be your companion on an immersive journey.
            </p>
        </li>
        <li>
            <h1>Sarah</h1>
            <img src = {secondImage} alt="team member" />
            <p> Meet Sarah Ray, our dedicated art concierge, committed to providing you with 
              personalized  assistance and insights tailored to your interests. With a keen eye for 
              detail and a deep appreciation for the arts, Sarah is here to curate a bespoke 
              experience for you.
            </p>
        </li>
        <li>
            <h1>Mia</h1>
            <img src = {thirdImage} alt="team member" />
            <p> Mia Brown is our official virtual tour guide, ready to lead you through the 
              treasures of our museum from the comfort of your own home. With her expertise 
              and passion for art, Anna will be your companion on an immersive journey.
            </p>
        </li>
        </ul>
      <article className='container-header'>
        <h2>
        If you're eager to embark on this virtual adventure, 
        get in touch with us by sending your email address 
        </h2>
        <h1>Are you ready?</h1>
        <Link to="/contact"><h4>Contact us</h4></Link>
      </article>
  </>
  )
}
