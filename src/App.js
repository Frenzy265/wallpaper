import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import ImagePreview from "./components/ImagePreview";
import { getRandomImage } from "./../src/api/getRandomImage";
import FavoriteImage from "./components/FavoriteImage";

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
      <FavoriteImage
        src="https://images.unsplash.com/photo-1603321647183-619ca1e1d110?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Nzk4NX0"
        alt="description"
      />
    </main>
  );
}

export default App;
