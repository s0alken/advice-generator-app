import { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

/* axios.defaults.headers = {
  'Cache-Control': 'no-cache',
  'Pragma': 'no-cache',
  'Expires': '0',
}; */

const App = () => {

  const [slip, setSlip] = useState(null);

  useEffect(() => {
    fetchSlip();
  }, []);

  const fetchSlip = async () => {
    setSlip(null);

    const response = await axios.get('https://api.adviceslip.com/advice',
      {
        params: {
          t: new Date().getTime()
        }
      });

    setSlip(response.data.slip);
  }

  return <Card slip={slip} fetchSlip={fetchSlip} />;

}

export default App;
