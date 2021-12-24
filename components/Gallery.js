import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// const images = [
//   "https://picsum.photos/id/1018/1000/600/",
//   "https://picsum.photos/id/1015/1000/600/",
//   "https://picsum.photos/id/1019/1000/600/",
// ];

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = ({ data }) => {
  // console.log(data);
  // data.map(({ url }) => console.log(url));

  const [photos, setPhotos] = useState([]);
  // const check = { base: false, md: true };
  // console.log(data);

  useEffect(() => {
    data.map(({ url }) => {
      setPhotos((prevArray) => [
        ...prevArray,
        { original: url, thumbnail: url },
      ]);
    });
  }, [data]);

  // console.log(photos);
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
