import type { Metadata } from "next";

import Container from "../component/Container";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
};

const About = () => {
  // {Make The Error}
  // throw new Error("Not Today!");
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
          About Page
        </h1>
        <p
          className="
            font-light
            uppercase
            text-center
            py-8
          "
        >
          A simple website that knows how to fetch data using Next.js 13
          <br />
          Fetch data & dynamic Routes & metadata & Loading & Error
          <br />
          Professional use of Typescript & Tailwind CSS & JSON Placeholder
        </p>
      </Container>
    </div>
  );
};

export default About;
