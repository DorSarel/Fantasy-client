import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import hoopers from "../../assets/images/hoopers.png";


const CardsSlider = () => {

    const [current, setCurrent] = useState(0);


    const data = [
        {
            header: "Previous match: ",
            firstTeam: "worriers",
            secondTeam: "hoopers",
            firstScore: 117,
            secondScore: 105,
            firstImage: <img src={hoopers} />,
            secondImage: <img src={hoopers} />,
        },
        {
            header: "Current match: ",
            firstTeam: "worriers",
            secondTeam: "hoopers",
            firstScore: 117,
            secondScore: 105,
            firstImage: <img src={hoopers} />,
            secondImage: <img src={hoopers} />,
        },
        {
            header: "Next match: ",
            firstTeam: "worriers",
            secondTeam: "hoopers",
            firstScore: "",
            secondScore: "",
            firstImage: <img src={hoopers} />,
            secondImage: <img src={hoopers} />,
        },

    ];

    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === data.length ? -1 : current - 1)
    }
    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }



    return (
        <section className="slider">
            <ArrowForwardIosIcon className="forward" onClick={nextSlide} />
            <ArrowBackIosIcon className="back" onClick={prevSlide} />

            {data.map((slide, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        <div className="card">
                            <p>{slide.header}</p>
                            <div className="firstTeam">
                                <p>{slide.firstImage}</p>
                                <p>{slide.firstTeam}</p>
                                <p style={{ marginLeft: "4rem" }}>{slide.firstScore}</p>
                            </div>
                            <div className="secondTeam">
                                <p>{slide.secondImage}</p>
                                <p>{slide.secondTeam}</p>
                                <p style={{ marginLeft: "4rem" }}>{slide.secondScore}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    );
};

export default CardsSlider;
