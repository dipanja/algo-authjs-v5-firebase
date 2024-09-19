import { doLogout } from "@/app/actions";
export default function LogOutButton() {
  return (
    <form action={doLogout}>
      <button
        className="bg-slate-700 my-2 text-white p-1 rounded"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
}
