import Marquee from "react-fast-marquee";

const images = [
  { src: `${import.meta.env.BASE_URL}IMAGES/img1.png`, alt: "Gallery image 1" },
  { src: `${import.meta.env.BASE_URL}IMAGES/img2.png`, alt: "Gallery image 2" },
  { src: `${import.meta.env.BASE_URL}IMAGES/img3.png`, alt: "Gallery image 3" },
  { src: `${import.meta.env.BASE_URL}IMAGES/img4.png`, alt: "Gallery image 4" },
  { src: `${import.meta.env.BASE_URL}IMAGES/img5.png`, alt: "Gallery image 5" },
  { src: `${import.meta.env.BASE_URL}IMAGES/img6.png`, alt: "Gallery image 6" },
  { src: `${import.meta.env.BASE_URL}IMAGES/img7.png`, alt: "Gallery image 7" },
  { src: `${import.meta.env.BASE_URL}IMAGES/img8.png`, alt: "Gallery image 8" },
  { src: `${import.meta.env.BASE_URL}IMAGES/img9.png`, alt: "Gallery image 9" },
];
function MarqueeImages() {
  return (
    <Marquee
    className="border-4 border-sky-400"
      gradient={false}
      speed={120}
      pauseOnHover={true}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-95 h-60 mx-4 object-cover rounded-lg border-4 border-sky-200"
        />
      ))}
    </Marquee>
  );
}

export default MarqueeImages;