import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return <div onClick={() => router.push("/")}>About</div>;
}
