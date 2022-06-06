import { useState, React } from "react";
import "./StockTable.css";

const StockTable = ({ results }) => {
  const volumes = results.map((d) => d.v);
  const maxVol = volumes.length ? Math.max(...volumes) : "";
  const minVol = volumes.length ? Math.min(...volumes) : "";

  // TODO convert these into smaller functions
  const count = results.length;
  const totalVolumes = volumes.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const avgVol = volumes.length ? Math.round(totalVolumes / count) : "";

  // figuring out prices
  const priceHighs = results.map((d) => d.h);
  const priceLows = results.map((d) => d.l);
  const avgPrices = results.map((d) => d.vw);
  const sumofAvgPrices = avgPrices.reduce((prev, curr) => prev + curr, 0);

  const maxPrice = volumes.length ? Math.max(...priceHighs) : ""; // TODO round to 2dp via toFixed
  const minPrice = volumes.length ? Math.min(...priceLows) : "";
  const avgPrice = volumes.length ? Math.round(sumofAvgPrices / count) : "";

  //   const p = `max volume: ${maxVol}, min volume: ${minVol}, avg vol: ${avgVol}, maxPrice: ${maxPrice}, minPrice: ${minPrice}, avgPrice: ${avgPrice}`;
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Maximum</th>
          <th>Minimum</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Price</td>
          <td>{maxPrice}</td>
          <td>{minPrice}</td>
          <td>{avgPrice}</td>
        </tr>
        <tr>
          <td>Volume</td>
          <td>{maxVol}</td>
          <td>{minVol}</td>
          <td>{avgVol}</td>
        </tr>
      </tbody>
    </table>
  );

  /*  in results, max is H  // well Math.max(...H)
                min is L  
                avg price is vw

  volume - max vol - Math.max of all V
           min vol - Math.min of all V
        avg vol - add all and divide by their number

*/
  //   console.log(results);
  //TODO processing
};

// price - maxium, minimum, average
// volume - max, min, average

/*  in results, max is H  // well Math.max(...H)
                min is L  
                avg price is vw

  volume - max vol - Math.max of all V
           min vol - Math.min of all V
        avg vol - add all and divide by their number


*/

// Results array
// ● O number: The open price for the symbol in the given time period.
// ● H number - The highest price for the symbol in the given time period.
// ● L number - The lowest price for the symbol in the given time period.
// ● C number - The close price for the symbol in the given time period.
// ● V number - The trading volume of the symbol in the given time period.
// ● VW number - The volume weighted average price.
// ● T integer - The Unix Msec timestamp for the start of the aggregate window.
// ● N number - The number of items in the aggregate window.

export default StockTable;
