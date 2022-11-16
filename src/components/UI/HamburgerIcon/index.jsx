import styles from "./styles.module.css";

const HamburgerIcon = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <div class={styles.hamburger}>
        <div class={styles.hamburgerContainer}>
          <div class={styles.hamburgerInner}></div>
          <div class={styles.hamburgerHidden}></div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
