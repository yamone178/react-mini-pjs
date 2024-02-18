
// import Accordion from './components/accordion/Accordion';

import ImageSlider from "./components/image-slider/ImageSlider";

function App() {
  return (
    <div className="App">
     {/* <Accordion /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={4} />
    </div>
  );
}

export default App;
