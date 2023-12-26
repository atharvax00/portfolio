import React, {  useEffect, useState } from 'react'
import Navbar from '../navbar/navbar.js';
import './HomeComponent.css'
import BgImg from '../images/Background.png';
import profilePic from '../images/profile-pic2.png';
import darkSouls from '../images/img.gif';
import linkedin from  '../images/linkedin.png';
import mail from '../images/mail.png.png';
import git from '../images/github.png';
const HomeComponent = () => {

  const [text, setText] = useState('');
  const [selected  , setSelected] = useState('');
  let arr= [ 'FrontEnd Developement', 'Database Management' , 'BackEnd Developement','Version Control']
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1100); // You can adjust the threshold

  

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1380); // Update the threshold to 1100
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleLeftButtonClick = () => {
     
      const currentIndex = arr.indexOf(text);
      const newIndex = (currentIndex - 1 + arr.length) % arr.length;
      setText(arr[newIndex]);
    };
  
    const handleRightButtonClick = () => {
      // Implement logic to update the text when the "Right" button is clicked
      // For example, you can cycle through the array in order
      const currentIndex = arr.indexOf(text);
      const newIndex = (currentIndex + 1) % arr.length;
      setText(arr[newIndex]);
    };

    const handleSelected=()=>{
      if (text === 'FrontEnd Developement') {
        setSelected(
          <div>
            <br /> <br />
            FrontEnd Development.
            <br /><br />
            Skills:
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        );
      } else if (text === 'Database Management') {
        setSelected(
          <div>
            <br /> <br />
            Database Management .
            <br /><br />
            Skills:
            <ul>
              <li>MySQL</li>
            </ul>
          </div>
        );
      } else if (text === 'BackEnd Developement') {
        setSelected(
          <div>
            <br /> <br />
            BackEnd Development .<br /><br />
            Skills:
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>Spring Boot</li>
              <li>Socket.io</li>
            </ul>
          </div>
        );
      } else if (text === 'Version Control') {
        setSelected(
          <div>
            <br /> <br />
            Version Control .<br /><br />
            Skills:
            <ul>
              <li>GitHub</li>
            </ul>
          </div>
        );
      } 
    };
     const handleClose=()=>{
      setSelected('');
    }




  return (
    <div>
      {!isDesktop && (<div className='mobile-message'> <p className='mobile-msg-msg'>Please view this on desktop</p></div>) }
      <Navbar/>
    <div className='bgImg'id='home-section'>
      <img className='home-bg-image' src={BgImg} alt='bgImg'></img>
    </div>
    <p className='my-name'>Atharva Chougale</p>
    <div className='home-changing-txt' >
      <p className='home-changing-txt-txt'>I AM A  
      <div className='home-text-show'>
      <div className='home-inner-headings'>
      <span >
          Frontend Devloper <br/>
          Backend Devloper <br/>
          FullStack Devloper <br/>
          Ui/UX Designer <br/>

      </span>
      </div>
      </div>
      </p>
   
    </div>
    <div className='home-about' >
      <h1 className='home-about-me-heading' id='about-me-section'>About ME</h1>
    <div className='home-about-inner'>
        <p>
Greetings! I'm Atharva Chougale, a dynamic and accomplished graduate of 2023 with a strong proficiency in full-stack development. Leveraging my expertise in technologies such as React.js, HTML, CSS for the frontend, and Spring Boot, Express for the backend, I craft seamless and responsive web applications. My database prowess extends to MySQL, ensuring robust and efficient data management. With a passion for innovation and a commitment to delivering cutting-edge solutions, I am poised to make a significant impact in the ever-evolving world of web development.</p>
   
    </div>
    <img alt='profile-pic' className='home-profile-pic' src={profilePic}></img>
    </div>
      <div className='home-skills'>
      <img src={darkSouls} alt='darksouls' className='home-darksouls'></img>
        <div className='skills-showskills'>
        
        <button className='skill-btn1 btn btn-warning border border-dark ' onClick={handleLeftButtonClick}> left </button>
        {text}    
        <button className='skills-btn2 btn btn-warning border border-dark ' onClick={handleRightButtonClick}>Right</button>    
         
         </div>
         <div className='skills-section'>
         {selected && <div className='selected-skill-info'>
         {selected}
          <p className='home-close' onClick={handleClose} style={{textDecoration:'underline', cursor:'pointer'}}>x</p>
         </div>}
         </div>
       
      <button className='home-explore-btn' onClick={handleSelected} > Select</button>
     
    </div>
    <div className='contact-me' id='contact-me-section'>
<h1 className='contact-me-heading'> CONTACT ME</h1>
    <ul className='contactme-ul'>
      <li><a href='mailto:atharvachougaleismyname@gmail.com'><img img className='contactme-img' src={mail} alt='mail'></img></a></li>
      <li><a href='https://github.com/Godx00'><img src={git} className='contactme-img' alt='github'></img></a></li>
      <li><a href='https://www.linkedin.com/in/atharva-chougale-4a21a3269/'><img src={linkedin} className='contactme-img' alt='linkedin'></img></a></li>
    </ul>

    </div>
    </div>
    
  )
}

export default HomeComponent;