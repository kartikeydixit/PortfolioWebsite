import React, { useState } from "react";
import "./project.css";
import lyrics from "./../assets/lyricf1.PNG";
import stopedia from "./../assets/stopedia.jpeg";
import FoodFlicks from "./../assets/FoodFlicks.PNG";
const Project = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const on = () => {
    if (open == false) setOpen(true);
    else setOpen(false);
  };

  const on2 = () => {
    if (open2 == false) setOpen2(true);
    else setOpen2(false);
  };

  const on3 = () => {
    if (open3 == false) setOpen3(true);
    else setOpen3(false);
  };
  return (
    <div className="container">
      <h1>My Projects</h1>
      <div className="proj-card upper-card" data-aos="zoom-in">
        <div
          className="overlay"
          style={{ display: open ? "block" : "none" }}
          onClick={on}
        >
          <p>
            Stopedia is a Digital Dairy System , in which a user can created
            Account and then can keep his daily dairy records or can write
            blogs.
            <br />
            The blogs created by user are displayed with the tags attched to
            them , so that it becomes easy for other users to pick among them .
            <br />
            A user can also serch the profiles of other users in the website
            using the serach facility embadded in the website.
            <br />
            The Website is created using MERN stack (MongoDB , ExpressJS ,
            Reactjs , Nodejs) And i have worked mainly on Frontend Aspects of
            the Project as well as some of the backend stuff.
            <br />
            <br />
            <span>Click anywhere in the area to close it!</span>
          </p>
        </div>

        <div className="img-cls">
          <img src={stopedia} />
        </div>

        <div className="info">
          <h2>Stopedia</h2>
          <p>A Digital Dairy system</p>
          <br />
          <br />
          <br />
          <span onClick={on}>
            <a>Read More</a>
          </span>
          <span>
            <a href="https://github.com/kartikeydixit/stoPedia" target="_blank">
              View Code
            </a>
          </span>
        </div>
      </div>

      <br />
      <br />

      <div className="proj-card" data-aos="zoom-in">
        <div
          className="overlay2"
          style={{ display: open2 ? "block" : "none" }}
          onClick={on2}
        >
          <p>
            Lyrics App is a Website in which a user can see the lyrics of
            Trending songs just by searching the name of the song in the Search
            Bar
            <br />
            The user can also see the lyrics of top songs in India as displayed
            by default in the website.
            <br />
            The lyrics and data in the website is fetched using the MUSIXMATCH
            API and then displayed to the end user.
            <br />
            The Website is created Using Reactjs.
            <br />
            <br />
            <span>Click anywhere in the area to close it!</span>
          </p>
        </div>

        <div className="img-cls">
          <img src={lyrics} />
        </div>

        <div className="info">
          <h2>Lyrics Search</h2>
          <p>Search Your Favorate Lyrics</p>
          <br />
          <br />
          <span onClick={on2}>
            <a>Read More</a>
          </span>
          <span>
            <a
              href="https://github.com/kartikeydixit/LyricsApp"
              target="_blank"
            >
              View Code
            </a>
          </span>
        </div>
      </div>

      <br />
      <br />

      <div className="proj-card" data-aos="zoom-in">
        <div
          className="overlay3"
          style={{ display: open3 ? "block" : "none" }}
          onClick={on3}
        >
          <p>
            A user can see The menu of various canteens and their location
            <br />
            A user can create an account to Order items from the website
            <br />
            Stripe API is integrated for Payment purpose
            <br />
            Teach Stack Used : (MongoDB, Express, Reactjs, Node) MERN
            <br />
            Redux is used for state management. user Authentication is Done
            using token(JWT)
            <br />
            <br />
            <span>Click anywhere in the area to close it!</span>
          </p>
        </div>

        <div className="img-cls">
          <img src={FoodFlicks} />
        </div>

        <div className="info">
          <h2>FoodFlicks</h2>
          <p>Order Food From any college Canteen</p>
          <br />
          <br />
          <span onClick={on3}>
            <a>Read More</a>
          </span>
          <span>
            <a
              href="https://github.com/kartikeydixit/FoodFlicks"
              target="_blank"
            >
              View Code
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
