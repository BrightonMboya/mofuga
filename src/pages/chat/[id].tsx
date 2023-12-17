import { useRouter } from "next/router";
import CustomerAvatar from "~/components/home/CustomerAvatar";
import Input from "~/components/ui/Input";

// export async function getStaticProps() {}
// export async function getStaticPaths(){}

export default function Page() {
  const router = useRouter();
  const chatId = router.query.id;
  return (
    <div className="relative h-screen w-[500px] bg-gray-100">
      <CustomerAvatar />
      <h3>{`Hello World from room ${chatId}`}</h3>
      <div className="absolute bottom-0 w-full">
        <Input placeholder="Type Message .." />
      </div>
    </div>
  );
}
