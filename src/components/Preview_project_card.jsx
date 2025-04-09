import React, { useEffect } from "react";

const PreviewProjectCard = ({ project_name, made_by, tec_use }) => {
    useEffect(() => {
        const slider = document.getElementsByClassName("slider")[0];
        const nextBtn = document.getElementById("button_next");
        const prevBtn = document.getElementById("button_prev");

        const moveToNextSlide = () => {
            slider.append(slider.querySelector("img:first-child"));
        };

        const moveToPrevSlide = () => {
            slider.prepend(slider.querySelector("img:last-child"));
        };

        nextBtn.onclick = moveToNextSlide;
        prevBtn.onclick = moveToPrevSlide;

        const interval = setInterval(moveToNextSlide, 10000);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    return (
        <div className="min-w-min max-w-fit felx flex-col items-center bg-blue-400 border-2 rounded-lg relative">
            <div className="slider justify-self-center p-2 size-32">
                <img src="no_foto_user.PNG" className="acctive" alt="Slide 1" />
                <img src="data-migration.png" alt="Slide 2" />
            </div>

            <button id="button_prev" className="hidden absolute top-1/2 left-0">
                ⬅
            </button>

            <button id="button_next" className="hidden absolute top-1/2 right-0">
                ➡
            </button>

            <div className="place-items-start p-2">
                <h2>Project: {project_name}</h2>
                <p>By: {made_by}</p>
                <p>Tec invol: {tec_use}</p>
            </div>
        </div>
    );
};

export default PreviewProjectCard;