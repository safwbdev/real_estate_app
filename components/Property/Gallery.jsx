import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = ({ data }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    data.map(({ url }) => {
      setPhotos((prevArray) => [
        ...prevArray,
        { original: url, thumbnail: url },
      ]);
    });
  }, [data]);

  return (
    <ImageGallery
      items={photos}
      showThumbnails={false}
      lazyLoad={true}
      showPlayButton={false}
    />
  );
};

export default Gallery;
