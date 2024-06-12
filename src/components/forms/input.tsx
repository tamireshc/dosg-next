import styles from "./input.module.css";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <p className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {label}
      </label>
      <input className={styles.input} type='text' id={props.name} {...props} />
    </p>
  );
}
