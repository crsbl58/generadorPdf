import styles from "./Input.module.scss";

const Input = ({
  name,
  onChange,
  value,
  width = "9rem",
  type = "text",
  Only = "all",
}: any) => {
  const expression = {
    number: /^[0-9]+$/,
    text: /^[a-zA-Z\s]*$/,
  };

  let stateValue = false;

  switch (Only) {
    case "all":
      stateValue = true;
      break;
    case "text":
      if (expression.text.test(value)) {
        stateValue = true;
      }
      break;
    case "number":
      if (expression.number.test(value)) {
        stateValue = true;
      }
      break;
    default:
      break;
  }
/* 

console.log(expression.text.test(value),value) */

  return (
    <input
      type={type}
      name={name}
      style={{ width }}
      className={styles.inputText}
      value={value}
      onChange={(e) => {
        onChange(e, stateValue);
      }}
    ></input>
  );
};

export default Input;
