import axios from "axios";


export const getSymbols = () => {
    axios.get('http://localhost:3000/symbols', {
              })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
}