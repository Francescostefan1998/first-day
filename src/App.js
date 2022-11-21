import logo from "./logo.svg";
import "./App.css";
import ButtonComponents from "./components/ButtonComponents";
import ImageComponent from "./components/ImageComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponents
          label="label received from the props"
          classimg="button-style"
        />
        <ImageComponent
          src="https://th.bing.com/th/id/OIP.6HrEu5kxLOezNRNZdfIbCgHaEG?pid=ImgDet&rs=1"
          classimage="class-image"
        />
      </header>
    </div>
  );
}

export default App;
