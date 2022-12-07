import Image from "next/image";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import styles from "../styles/Top.module.scss";

export default function Top() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src={"/vercel.svg"}
          alt="logo"
          width={100}
          height={100}
          priority={true}
        />
        <Header as="h1">Nextjs Practice</Header>
      </div>
      <Gnb />
    </div>
  );
}
