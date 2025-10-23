import { formatter } from "../../util/investment";

export default function Result({ result }) {
  const headers =
    result && result.length > 0
      ? [
          result[0].year.displayName,
          result[0].investValue.displayName,
          result[0].currentYearInterest.displayName,
          result[0].totalInterest.displayName,
          result[0].investedCapital.displayName,
        ]
      : [];
  return (
    <table id="result" className="center">
      <thead>
        <tr>
          {headers.map((x) => (
            <td>{x}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {(result || []).map((x) => {
          return (
            <tr>
              <td>{x.year.value}</td>
              <td>{formatter.format(x.investValue.value)}</td>
              <td>{formatter.format(x.currentYearInterest.value)}</td>
              <td>{formatter.format(x.totalInterest.value)}</td>
              <td>{formatter.format(x.investedCapital.value)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
