import { useState } from "react";

import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface props {
  images: any[];
  imageWidth?: string;
  imageHeight?: string;
  imageStyle?: object;
}

const ImageCarousel = ({
  images,
  imageHeight,
  imageWidth,
  imageStyle,
}: props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const [direction, setDirection] = useState("");

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
    setDirection("prev");
  };

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
    setDirection("next");
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100%"}
      h={"100%"}
      overflow={"hidden"}
    >
      <motion.div
        key={currentImage}
        initial={direction === "prev" ? { x: "-100%" } : { x: "100%" }}
        animate={{ x: "0%" }}
        exit={direction === "prev" ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 1.3 }}
      >
        <Image
          src={images[currentImage]}
          alt="Carousel Image"
          w={imageWidth ? imageWidth : "100%"}
          h={imageHeight ? imageHeight : "100%"}
          objectFit="cover"
          // @ts-ignore
          style={imageStyle}
        />
      </motion.div>
      <Box
        position="absolute"
        top={"25%"}
        left="0"
        transform="translateY(-50%)"
        cursor="pointer"
        width={"20%"}
        h={"50%"}
        bgColor={"rgba(0,0,0,0.01)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={handlePrev}
        _hover={{
          bgColor: "rgba(0,0,0,0.3)",
        }}
      >
        <FaChevronLeft size={20} />
      </Box>

      <Box
        position="absolute"
        top={"25%"}
        right="0"
        transform="translateY(-50%)"
        cursor="pointer"
        width={"20%"}
        h={"50%"}
        bgColor={"rgba(0,0,0,0.01)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={handleNext}
        _hover={{
          bgColor: "rgba(0,0,0,0.3)",
        }}
      >
        <FaChevronRight size={20} onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default ImageCarousel;
