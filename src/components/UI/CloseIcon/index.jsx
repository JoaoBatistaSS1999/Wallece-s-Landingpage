import styles from "./Styles.module.css";

const CloseIcon = () => {
  return (
    <div>
      <a href="#" class={styles.closeButton}>
        <div class={styles.in}>
          <div class={styles.closeButtonBlock}></div>
          <div class={styles.closeButtonBlock}></div>
        </div>
        <div class={styles.out}>
          <div class={styles.closeButtonBlock}></div>
          <div class={styles.closeButtonBlock}></div>
        </div>
      </a>
    </div>
  );
};

export default CloseIcon;
