import { Metadata } from "next";

import { Suspense } from "react";

import getUser from "@/app/lib/getUser";
import getUserPosts from "@/app/lib/getUserPosts";

import Container from "@/app/component/Container";
import UserPosts from "./components/UserPosts";

interface UserPageProps {
  params: {
    userId: string;
  };
}

export async function generateMetadata({
  params: { userId },
}: UserPageProps): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);

  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage: React.FC<UserPageProps> = async ({ params: { userId } }) => {
  const userData: Promise<User> = getUser(userId);
  const postData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;
  const post = await postData;

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
          font-semibold
          pb-4
          border-b-2
        "
        >
          {user.name}
        </h1>
        <h3
          className="
            text-xl
            font-bold
            my-4
            border-b-2
            border-black
            w-fit
          "
        >
          Posts List
        </h3>
        <Suspense
          fallback={
            <div
              className="
                  grid
                  place-content-center
                  w-screen
                  h-screen
                "
            >
              <h2
                className="
                    text-2xl
                    font-bold
                    text-rose-500
                  "
              >
                Loading...
              </h2>
            </div>
          }
        >
          <UserPosts posts={post} />
        </Suspense>
      </Container>
    </div>
  );
};

export default UserPage;
