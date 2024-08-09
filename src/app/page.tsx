// "use client";
// import { Button } from "@/components/ui/button";
// import { ToastAction } from "@/components/ui/toast";
// import { useToast } from "@/components/ui/use-toast";
//
// export default function Home() {
//   const { toast } = useToast();
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <Button
//         variant="custom"
//         onClick={() => {
//           toast({
//             variant: "destructive",
//             title: "Pornika",
//             description: `${process.env.NEXT_PUBLIC_MESSAGE}`,
//             // action: <ToastAction altText="T">Okey</ToastAction>,
//           });
//         }}
//       >
//         Pornika
//       </Button>
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="flex justify-between p-24">
//       <h1>Home</h1>
//       <div className="flex item-centre justify-between m-1">
//         <h1 className="mx-2">Home</h1>
//         <h1>Home</h1>
//       </div>
//     </main>
//   );
// }
//

import LoginForm from "../components/LoginForn";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3xl my-3">Hey, time to Sign In</h1>
      <LoginForm />
    </div>
  );
}
