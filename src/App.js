import { useEffect, useContext } from "react";
import './App.css';
import axios from "axios";
import { DataContext } from "./context";
import Header from "../src/components/Header";
import Main from "../src/components/Main";

function App() {
  const { dogData, catData, setDogData, setCatData } = useContext(DataContext);

  const apiURL = (animal) => { return `https://api.giphy.com/v1/gifs/search?api_key=7DM9gNdvgHHhpn9XMqo2T6g549STjz29&q=${animal}&limit=25&offset=0&rating=g&lang=en` }

  useEffect(() => {
    if (!dogData) {
      axios.get(apiURL('dog'))
      .then(({ data }) => {
        setDogData(data?.data);
      })
    }

    if (!catData) {
      axios.get(apiURL('cat'))
      .then(({ data }) => {
        setCatData(data?.data);
      })
    }
  }, []);

  return (
    <div className="App">
      <div style={{ position: 'absolute', left: '32vw', top: '20vh' }}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;