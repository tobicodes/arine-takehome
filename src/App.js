import "./App.css";
import { useState } from "react";
import StockTable from "./StockTable";

const generateEndpoint = (stock) => {
  if (!stock) return null;
  const ticker = stock.toUpperCase();
  return `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2020-01-01/2020-12-31?apiKey=taIMgMrmnZ8SUZmdpq9_7ANRDxw3IPIx`;
};

async function fetchData(stock) {
  if (!stock) {
    console.error("won't fetch because no stock dey");
    return;
  }
  const resp = await fetch(generateEndpoint(stock));
  const data = await resp.json();

  console.log(data);
  return data;
}

function App() {
  const [stockTicker, setStockTicker] = useState("");
  const [results, setResults] = useState([]);

  const handleUserTypeStock = (e) => {
    const value = e?.target?.value;
    console.log(value);
    setStockTicker(value);
  };

  const handleSubmit = async (e) => {
    const data = await fetchData(stockTicker);
    setResults(data?.results ?? []);
  };

  return (
    <div style={{ height: "100vh", width: "100vw", margin: "10px 0" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          height: "2em",
        }}
      >
        <label style={{ lineHeight: "2em" }} htmlFor="stock">
          Enter a stock name{" "}
        </label>
        <input
          id="stock"
          type="search"
          placeholder="AAPL"
          minLength={1}
          maxLength={5}
          value={stockTicker}
          onChange={handleUserTypeStock}
        />

        <button
          style={{
            color: "white",
            textAlign: "center",
            border: "0",
            borderRadius: "5px",
            background: "#4676D7",
            fontWeight: "bolder",
            padding: "8px 16px",
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      <StockTable results={results} />
    </div>
  );
}

export default App;
