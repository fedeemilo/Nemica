// EmblaCarouselCards.jsx
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./Card"; // Asegúrate de que la ruta sea correcta
import { cardData } from "./cardData"; // Importa tus datos de cards

const EmblaCarouselCards = () => {
  // Inicializamos Embla con algunas opciones (por ejemplo, sin loop)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  // Funciones para navegar
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      {/* Contenedor del viewport */}
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {cardData.map((card, index) => (
            <div
              className="embla__slide flex-shrink-0 px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              key={index}
            >
              <Card
                title={card.title}
                imgSrc={card.imgSrc}
                h1={card.h1}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="embla__controls mt-4 flex justify-center space-x-4">
        <button
          onClick={scrollPrev}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Anterior
        </button>
        <button
          onClick={scrollNext}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default EmblaCarouselCards;