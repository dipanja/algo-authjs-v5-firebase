import Link from "next/link";

Link;
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1>Home Page</h1>
      <Link href="/login">login</Link>
      <Link href="/signin">signup </Link>
    </div>
  );
}
