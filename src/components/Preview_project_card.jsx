import React, { useState, useEffect } from "react";

const ProjectCard = ({ project_name, made_by, tec_use }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = ["no_foto_user.PNG", "data-migration.png"];

    // Función para mover al siguiente slide
    const moveToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Función para mover al slide anterior
    const moveToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Cambiar automáticamente cada 10 segundos
    useEffect(() => {
        const interval = setInterval(moveToNextSlide, 10000);
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    return (
        <div className="container min-w-min max-w-fit flex flex-col items-center bg-blue-400 border-2 rounded-lg relative">
            <div className="justify-self-center p-2">
                <div className="size-32 relative overflow-hidden">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${index === currentIndex
                                ? "translate-x-0"
                                : "translate-x-full"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <button
                onClick={moveToPrevSlide}
                className="hidden absolute top-1/2 left-0 transform -translate-y-1/2"
            >
                ⬅
            </button>

            <button
                onClick={moveToNextSlide}
                className="hidden absolute top-1/2 right-0 transform -translate-y-1/2"
            >
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

export default ProjectCard;