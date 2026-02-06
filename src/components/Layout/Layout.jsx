import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book Library App</h1>
        <p>React project</p>
      </header>

      {children}

      <footer className={styles.footer}>
        Developed By Ashkan Teimouri Gharb
      </footer>
    </>
  );
}

export default Layout;
