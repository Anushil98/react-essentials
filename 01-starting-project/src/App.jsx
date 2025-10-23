import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import UserInput from "./components/UserInput/UserInput";
import { calculateInvestmentResults } from "./util/investment";

const INIT_VALUE = [
  {
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  },
];
function App() {
  const updatedResults = calculateUpdatedResult(INIT_VALUE);
  const [result, setResult] = useState(updatedResults);

  function calculateUpdatedResult(newResult) {
    const initialInvestment = newResult[0].initialInvestment;
    const calculatedResults = calculateInvestmentResults({
      initialInvestment: newResult[0].initialInvestment,
      annualInvestment: newResult[0].annualInvestment,
      expectedReturn: newResult[0].expectedReturn,
      duration: newResult[0].duration,
    });
    console.log({ calculatedResults });
    const updatedResult = calculatedResults.map((x, index) => {
      const { annualInvestment, interest, valueEndOfYear, year } = x;
      return {
        ...newResult[0],
        year: { displayName: "Year", value: year },
        investValue: { displayName: "Investment Value", value: valueEndOfYear },
        currentYearInterest: { displayName: "Interest(Year)", value: interest },
        totalInterest: {
          displayName: "TotalInterest",
          value:
            index > 0 ? calculatedResults[index - 1].interest : 0 + interest,
        },
        investedCapital: {
          displayName: "Invested Capital",
          value: initialInvestment + annualInvestment * year,
        },
      };
    });
    console.log(updatedResult);
    return updatedResult;
  }
  function handleInputChange(newResult) {
    const updatedResult = calculateUpdatedResult(newResult);
    setResult(updatedResult);
  }

  return (
    <>
      <Header></Header>
      <UserInput ResultInput={result} setResult={handleInputChange}></UserInput>
      <Result
        result={result.map((x) => {
          return {
            year: x.year,
            investValue: x.investValue,
            currentYearInterest: x.currentYearInterest,
            totalInterest: x.totalInterest,
            investedCapital: x.investedCapital,
          };
        })}
      ></Result>
    </>
  );
}

export default App;
