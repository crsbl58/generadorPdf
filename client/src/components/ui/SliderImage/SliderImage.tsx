import styles from "./SliderImage.module.scss";

import { useEffect } from "react";

const SliderImage = ({ arrayImage, state }: any) => {
  const combinedClasses = `${styles.divContainerImgSlider01} classAnimationSliderImage`;

  useEffect(() => {
    if (state[0]) {
      setTimeout(() => {
        state[1](false);
      }, arrayImage.length * 1 * 1000);
    }
  }, [state[0]]);

  return (
    <div className={styles.divContainerImgSlider00}>
      <style jsx>{`
        .classAnimationSliderImage {
          animation-name: ${state[0] === true ? "animationSliderImage" : ""};
          animation-duration: ${arrayImage.length * 1}s;
        }
        @keyframes animationSliderImage {
          100% {
            transform: translate(-${arrayImage.length * 100 - 100}%, 0);
          }
        }
      `}</style>
      <div className={combinedClasses}>
        {arrayImage.map((item: any, index: number) => {
          return (
            <div key={index}>
              <img
                src={item.imgUrl + `?timestamp=${new Date().getTime()}`}
                alt="Imagen"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderImage;
