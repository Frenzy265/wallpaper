import React from "react";
import FavoriteImage from "./FavoriteImage";

export default function FavoriteImageList({ photoIds }) {
  return (
    <div>
      {photoIds.map((photoId) => (
        <FavoriteImage key={photoIds} photoId={photoId} />
      ))}
    </div>
  );
}
