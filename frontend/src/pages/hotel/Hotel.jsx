import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(0);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    },
  ];
  const handelOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}{" "}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 new york</span>
          </div>
          <span className="hotelDistance">500 m from center</span>
          <span className="hotelPriceHighlight">book a stay over 114$</span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => {
                    handelOpen(i);
                  }}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">asdasdas asda sefe fse fs efsd</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur enim quasi inventore id expedita praesentium. Dicta,
                tenetur est! Officiis, fugiat sapiente sed rerum eaque pariatur
                doloribus neque quos ad, ipsum incidunt iure sequi omnis quis
                est? Ullam ipsam quo adipisci, consequatur possimus ab ipsum
                maiores placeat minima, nam impedit necessitatibus? Tempora,
                provident. Voluptatum nesciunt hic quam praesentium. Quo
                officiis quaerat amet consectetur quibusdam asperiores cum optio
                eos provident tenetur ipsum at sequi, beatae illo qui velit
                minus, sit, vel expedita! Dolores laboriosam amet expedita
                atque, omnis excepturi magnam quidem voluptas, doloremque
                quisquam fuga voluptatum in! Quaerat alias veniam dolor,
                reiciendis commodi, sit quos, enim excepturi aperiam quo et!
                Saepe, non. Repellat, ipsam hic nobis ipsa delectus sit nostrum
                cum soluta molestias sapiente quaerat ullam, voluptatibus optio
                dignissimos labore necessitatibus? Eos nostrum dolorem repellat
                aliquid magni expedita earum?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>asdasd</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                dolorum accusamus vel consequatur tenetur tempore error
                laudantium unde nesciunt ipsum beatae minima commodi ratione
                hic, debitis reprehenderit odio recusandae ex!
              </span>
              <h2>
                <b>945$</b>(9nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
