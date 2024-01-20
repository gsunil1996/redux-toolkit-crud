import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      Home
      <button onClick={() => router.push("/crud-operations")}>
        Go to crud operations
      </button>
    </div>
  );
};

export default Home;
