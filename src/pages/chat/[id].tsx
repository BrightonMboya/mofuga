import { useRouter } from "next/router";


// export async function getStaticProps() {}
// export async function getStaticPaths(){}

export default function Page() {
    const router = useRouter()
    const chatId = router.query.id;
  return (
    <div>
      <h3>{`Hello World from room ${chatId}`}</h3>
    </div>
  );
}
