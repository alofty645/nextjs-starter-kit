"server only";

import { clerkClient } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export const isAuthorized = async (
  userId: string
): Promise<{ authorized: boolean; message: string }> => {
  try {
    const user = await clerkClient.users.getUser(userId);

    if (!user) {
      return {
        authorized: false,
        message: "User not found",
      };
    }

    const cookieStore = cookies();

    const supabase = createServerClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
        },
      }
    );

    const { data, error } = await supabase
      .from("subscriptions")
      .select("status")
      .eq("user_id", userId)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return {
          authorized: false,
          message: "User has no subscription",
        };
      }
      throw error;
    }

    return {
      authorized: data.status === "active",
      message:
        data.status === "active"
          ? "User is subscribed"
          : "User is not subscribed",
    };
  } catch (error: any) {
    console.error("Error checking authorization:", error);
    return {
      authorized: false,
      message: "Error checking authorization status",
    };
  }
};
