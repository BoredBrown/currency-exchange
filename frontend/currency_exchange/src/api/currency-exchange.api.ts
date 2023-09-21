import axios from "axios";
export const getSymbols = () => {
    axios.get('http://localhost:3000/symbols', {
        
        // Add parameters here
      })
      .then((response) => {
        console.log(response.data);
          // Handle data
      })
      .catch((error) => {
        console.log(error);
      })
}