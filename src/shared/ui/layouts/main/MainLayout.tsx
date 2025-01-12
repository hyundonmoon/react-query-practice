import Header from "@/shared/ui/header/Header";
import { Outlet } from "react-router";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className={styles.mainSection}>
        <Outlet />
      </main>
    </>
  );
}
