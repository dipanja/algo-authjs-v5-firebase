import { redirect } from "next/navigation";
import { auth } from "../../auth";
import LogOutButton from "../../components/Logout";

export default async function Home() {
  // export default function Home() {
  const session = await auth();
  // console.log(session);
  if (!session?.user) {
    redirect("/login");
  }
  // console.log(session);
  return (
    <div>
      <h1>Welcome {session?.user.email}</h1>
      <LogOutButton />
    </div>
  );
}
