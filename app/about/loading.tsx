import Container from "../component/Container";

const Loading = () => {
  return (
    <Container>
      <div
        className="
          grid
          place-content-center
          w-screen
          h-screen
        "
      >
        <h1
          className="
        text-rose-500
        font-bold
        text-2xl
        uppercase
      "
        >
          Loading...
        </h1>
      </div>
    </Container>
  );
};

export default Loading;
