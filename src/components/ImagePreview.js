import React from "react";
import "./../components/ImagePreview.css";

export default function ImagePreview({ src, alt, author }) {
  return (
    <div className="imageContainer">
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
