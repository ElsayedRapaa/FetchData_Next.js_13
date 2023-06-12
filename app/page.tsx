import Image from "next/image";

import Container from "./component/Container";

export default function Home() {
  return (
    <div
      className="
        py-4
      "
    >
      <Container>
        <h1
          className="
          text-2xl
          font-bold
        "
        >
          Home Page
        </h1>
        <div
          className="
            mx-auto
            py-20
            grid
            place-content-center
          "
        >
          <h1
            className="
              text-2xl
              font-bold
              my-8
              w-fit
              mx-auto
            "
          >
            Learn Next.js 13
          </h1>
          <Image
            src="https://i.pinimg.com/564x/32/59/60/325960868db70612ff307dd1b248bfc8.jpg"
            alt="Next.js 13"
            width={350}
            height={350}
            className="
              rounded-xl
            "
          />
        </div>
      </Container>
    </div>
  );
}
