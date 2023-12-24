import "../css/App.css";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import { ProjectSliderCard } from "./ProjectSliderCard.jsx";
import { ProjectDataProvider } from "../services/data";

export const ProjectSlider = () => {
  const initSlider = () => {
    const cardsList = document.querySelector(".whayuni-projects__container-cards");
    const slideButtons = document.querySelectorAll(".slide-button");
    const slideScrollbar = document.querySelector(".whayuni-projects__container-scrollbar");
    const slideScrollbarThumb = document.querySelector(".whayuni-projects__container-scrollbar-thumb");

    const maxScrollToLeft = cardsList.scrollWidth - cardsList.clientLeft;

    // Handle scrollbar thumb grab
    slideScrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPos = slideScrollbarThumb.offsetLeft;
      const maxThumbPos = slideScrollbar.getBoundingClientRect().width - slideScrollbarThumb.offsetWidth;
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPos = thumbPos + deltaX;
        // Ensure the scrollbar stays within bounds
        const boundPosition = Math.max(0, Math.min(maxThumbPos, newThumbPos));
        const scrollPosition = (boundPosition / maxThumbPos) * maxScrollToLeft;

        slideScrollbarThumb.style.left = `${boundPosition}px`;
        cardsList.scrollLeft = scrollPosition;
      };
      // Remove event listeners on mouse up
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "previous" ? -1 : 1;
        const scrollAmount = cardsList.clientWidth * direction;
        cardsList.scrollBy({left: scrollAmount, behavior: "smooth"});
      });
    });

    const handleSlideButtons = () => {
      slideButtons[0].style.display = cardsList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = cardsList.scrollLeft >= maxScrollToLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
      const scrollPosition = cardsList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollToLeft) * (slideScrollbar.clientWidth - slideScrollbarThumb.offsetWidth);
      slideScrollbarThumb.style.left = `${thumbPosition}px`;
    }

    cardsList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    })
  }

  window.addEventListener("resize", initSlider);
  window.addEventListener("load", initSlider);

  return (
    <div className={'whayuni-projects__container'}>
      <div className={'whayuni-projects__container-wrapper'}>
        <button type={'button'} id={'previous'} className={'slide-button material-symbols-rounded'}>
          <AiOutlineArrowLeft/>
        </button>
        <ul className={'whayuni-projects__container-cards'}>
          {
            ProjectDataProvider.map((project, index) => (
              <ProjectSliderCard key={index} imgIndex={index} name={project.name} description={project.desc} date={project.date} preview={project.preview}/>
            ))
          }
        </ul>
        <button type={'button'} id={'next'} className={'slide-button material-symbols-rounded'}>
          <AiOutlineArrowRight/>
        </button>
      </div>
      <div className={'whayuni-projects__container-scrollbar'}>
        <div className={'whayuni-projects__container-scrollbar-track'}>
          <div className={'whayuni-projects__container-scrollbar-thumb'}></div>
        </div>
      </div>
    </div>
  );
}
