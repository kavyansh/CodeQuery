import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import ROUTES from "@/constants/routes";

export default async function Home() {

  const session = await auth();
  console.log("session", session);


  return (
    <>
      <h1 className="h1-bold">Welcome to nextjs</h1>
      <form className="px-10 pt-[100px]" action={async () => {
        "use server"
        await signOut({ redirectTo: ROUTES.SIGN_IN });
      }}>
        <Button type="submit">
          Log out
        </Button>
      </form>
    </>
  );
}
