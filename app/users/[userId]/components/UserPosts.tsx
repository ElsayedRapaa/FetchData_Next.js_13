interface UserPostsProps {
  posts: Post[];
}

const UserPosts: React.FC<UserPostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="
            flex
            flex-col
            gap-4
            border-b-2
            py-4
          "
        >
          <h2
            className="
          text-2xl
          font-semibold
        "
          >
            {post.title}
          </h2>
          <p
            className="
              font-light
            "
          >
            {post.body}
          </p>
        </div>
      ))}
    </>
  );
};

export default UserPosts;
