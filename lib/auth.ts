import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

// Use this to get the role in server components
// the alternative in client component is the useCurrentRole hook
export const currentRole = async () => {
  const session = await auth();
  return session?.user?.role;
};
