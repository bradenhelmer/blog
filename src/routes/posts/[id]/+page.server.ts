// src/routes/posts/[id]/+page.server.ts
import { pb } from "$lib/pb"; // Your PocketBase or database connection
import type { Post } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const { id }: { id: string } = params;
  const post: Post = await pb.collection("posts").getOne(id);

  if (!post) {
    throw new Error("Post not found");
  }

  return { post };
};
