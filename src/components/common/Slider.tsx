import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import hoopers from '../../assets/images/hoopers.png';

const CardsSlider = () => {
  const [current, setCurrent] = useState(0);

  const data = [
    {
      header: 'Previous match: ',
      firstTeam: 'Team Hoopers',
      secondTeam: 'Katzav Butchers',
      firstScore: 117,
      secondScore: 105,
      firstImage: <img src={hoopers} alt="logo" />,
      secondImage: <img src={hoopers} alt="logo" />,
    },
    {
      header: 'Current match: ',
      firstTeam: 'Carmon’s Interns',
      secondTeam: 'Team Hoopers',
      firstScore: 117,
      secondScore: 105,
      firstImage: <img src={hoopers} alt="logo" />,
      secondImage: <img src={hoopers} alt="logo" />,
    },
    {
      header: 'Next match: ',
      firstTeam: 'Team Netanel',
      secondTeam: 'Team Hoopers',
      firstScore: 117,
      secondScore: 105,
      firstImage: <img src={hoopers} alt="logo" />,
      secondImage: <img src={hoopers} alt="logo" />,
    },
  ];

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === data.length ? -1 : current - 1);
  };
  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <ArrowForwardIosIcon className="forward" onClick={nextSlide} />
      <ArrowBackIosIcon className="back" onClick={prevSlide} />

      {data.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            <div className="card">
              <p className="card-title">{slide.header}</p>
              <div className="card-team">
                <p>{slide.firstImage}</p>
                <p>{slide.firstTeam}</p>
                <p>{slide.firstScore}</p>
              </div>
              <div className="card-team">
                <p>{slide.secondImage}</p>
                <p>{slide.secondTeam}</p>
                <p>{slide.secondScore}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CardsSlider;
