import Image from "next/image";
import { Header } from "semantic-ui-react";

export default function Top() {
  return (
    <div>
      <Image src={"/images/logo.png"} alt="logo" />
      <Header as="h1">Nextjs Practice</Header>
    </div>
  );
}
