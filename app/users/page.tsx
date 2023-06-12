import type { Metadata } from "next";

import Container from "../component/Container";
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users Page",
  description: "Fetching users in  this page",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  return (
    <div
      className="
        py-4
      "
    >
      <Container>
        <h1
          className="
            font-bold
            text-2xl
          "
        >
          Users Page
        </h1>

        <div
          className="
            flex
            flex-col
            gap-8
            py-8
          "
        >
          {users.map((user) => (
            <div
              key={user.id}
              className="
                flex
                flex-col
                gap-4
                border-b-2
                pb-4
              "
            >
              <h3
                className="
                  font-semiibold
                  text-lg
                "
              >
                {user.name}
              </h3>
              <Link
                href={`/users/${user.id}`}
                className="
                  bg-neutral-200
                  text-sm
                  px-4
                  py-1
                  cursor-pointer
                  rounded-lg
                  hover:opacity-80
                  transition
                  w-fit
                "
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default UsersPage;
