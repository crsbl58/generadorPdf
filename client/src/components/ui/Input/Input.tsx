import styles from "./Input.module.scss";

const Input = ({
  name,
  onChange,
  value,
  width = "9rem",
  type = "text",
}: any) => {
  return (
    <input
      type={type}
      name={name}
      style={{ width }}
      className={styles.inputText}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
