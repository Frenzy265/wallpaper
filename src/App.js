import "./App.css";
import ImagePreview from "./components/imagePrevies";

function App() {
  return (
    <main>
      <button>Get random image</button>
      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
        }
        alt={"Leaves"}
        author={"Leon"}
      />
    </main>
  );
}

export default App;
