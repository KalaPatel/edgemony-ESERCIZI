import { useState } from "react";
import "./index.css";
import Button from "../button";
import { galleryArray } from "../../mocks/galleryPickMock";
const Gallery = () => {
  const [count, setCount] = useState(0);

  // console.log(count);
  return (
    <div className="GallerySection">
      <Button
        styleType={"rightBtn"}
        text="<"
        clickFunction={() =>
          count === 0 ? setCount(count) : setCount(count - 1)
        }
      />
      <div className="container">
        <img src={galleryArray[count]} alt="product" />
      </div>
      <Button
        styleType={"rightBtn"}
        text=">"
        clickFunction={() =>
          count === galleryArray.length - 1
            ? setCount(count)
            : setCount(count + 1)
        }
      />
    </div>
  );
};

export default Gallery;
