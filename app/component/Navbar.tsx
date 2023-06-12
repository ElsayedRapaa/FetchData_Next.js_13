import Container from "./Container";

import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className="
        sticky
        top-0
        left-0
        w-full
        py-4
        bg-neutral-900
        text-white
      "
    >
      <Container>
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <Link
            href="/"
            className="
            font-semibold
            hover:text-neutral-200
            transition
          "
          >
            Home
          </Link>
          <Link
            href="/about"
            className="
            font-semibold
            hover:text-neutral-200
            transition
          "
          >
            About
          </Link>
          <Link
            href="/users"
            className="
            font-semibold
            hover:text-neutral-200
            transition
          "
          >
            Users
          </Link>
        </div>
      </Container>
    </div>
  );
}
