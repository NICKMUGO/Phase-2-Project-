import { useEffect, useState } from "react";
import Btc from "../images/CoinsHeader/bitcoin.png";
import Eth from "../images/CoinsHeader/ethereum.png";
import { Link } from "react-router-dom";

function CoinsHeader () {
    const [data, setData] = useState([]);
    const [coinsLoad, setCoinsLoad] = useState(true);

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
  `;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);