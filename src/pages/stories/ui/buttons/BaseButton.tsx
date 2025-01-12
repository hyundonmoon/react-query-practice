import styles from "./Button.module.css";

interface BaseButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
  handleMouseEnter: () => void;
  isCurrent?: boolean;
}

export default function BaseButton({
  children,
  handleClick,
  handleMouseEnter,
  isCurrent,
}: BaseButtonProps) {
  return (
    <button
      className={`${styles.button} ${!!isCurrent ? styles.current : ""}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </button>
  );
}
