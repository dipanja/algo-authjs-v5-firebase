import SignInForm from "../../components/SignInForm";

export default async function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="bg-slate-500 text-3xl my-3">Hey, time to Sign up</h1>
      <SignInForm />
    </div>
  );
}
