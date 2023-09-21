import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDrag, useDrop } from "react-dnd";
import galleryList from "../dummy_data.js";
import classes from './list.module.css';
import Spinner from './loading-spinner.js'

const Card = ({ id, tag, image, index, moveImage }) => {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      };
    }
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div>
      <div ref={ref} style={{ opacity }} className={classes.container}>
        <div className={classes.item}>
          <img src={image} alt={tag}/>
          <div className={classes.overlay}>
            <div className={classes.text}>SHOE GALLERY</div>
          </div>
        </div>
      </div>
      <p className={classes.tag}>{tag}</p>
    </div>
  );
};
const ImageList = () => {
  const { isAuthenticated } = useAuth0();
  const [images, setImages] = React.useState(galleryList);
  const [loading, setLoading] = useState(true);
  const moveImage = React.useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];
      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);
  useEffect(() => {
    // Simulate image loading with a delay (e.g., 2 seconds)
    setTimeout(() => {
      setImages(galleryList);
      setLoading(false); // Set loading to false when images are loaded
    }, 2000); // Adjust the delay as needed
  }, []);
  return (
    isAuthenticated && (
      <main className={classes.main}>
        {loading ? ( // Conditionally render the loading spinner
          <Spinner />
        ) : (
          <ul className={classes.list}>
            {React.Children.toArray(
              images.map((image, index) => (
                <Card
                  key={image.id}
                  id={image.id}
                  image={image.image}
                  tag={image.tag}
                  index={index}
                  moveImage={moveImage}
                />
              ))
            )}
          </ul>
        )}
      </main>
    )
  );
};
export default ImageList;
