import Input from "../InputGroup/Input/Input";
import InputGroup from "../InputGroup/InputGroup";

export default function UserInput({ ResultInput, setResult }) {
  function changeResultInput(newFirstRow) {
    setResult([newFirstRow]);
  }
  return (
    <div id="user-input">
      <InputGroup>
        <Input
          label="INITIAL INVESTMENT"
          value={ResultInput[0].initialInvestment}
          onChange={(event) =>
            changeResultInput({
              ...ResultInput[0],
              initialInvestment: parseInt(event.target.value),
            })
          }
        ></Input>
        <Input
          label="ANNUAL INVESTMENT"
          value={ResultInput[0].annualInvestment}
          onChange={(event) =>
            changeResultInput({
              ...ResultInput[0],
              annualInvestment: parseInt(event.target.value),
            })
          }
        ></Input>
      </InputGroup>
      <InputGroup>
        <Input
          label="EXPECTED RETURN"
          value={ResultInput[0].expectedReturn}
          onChange={(event) =>
            changeResultInput({
              ...ResultInput[0],
              expectedReturn: parseInt(event.target.value),
            })
          }
        ></Input>
        <Input
          label="DURATION"
          value={ResultInput[0].duration}
          onChange={(event) =>
            changeResultInput({
              ...ResultInput[0],
              duration: parseInt(event.target.value),
            })
          }
        ></Input>
      </InputGroup>
    </div>
  );
}
