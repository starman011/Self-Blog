import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import WriteForm from "./WriteForm";

export default async function WritePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return <WriteForm />;
}
