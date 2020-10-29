import "./App.css";
import { useState } from "react";
import React from "react";
import Button from "./components/Button";
import ImagePreview from "./components/ImagePreview";
import { getRandomImage } from "./../src/api/getRandomImage";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <Button onClick={() => handleClick()} buttonText={"Get random image"} />
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          id={randomImage.id}
        />
      )}
    </main>
  );
}

export default App;
