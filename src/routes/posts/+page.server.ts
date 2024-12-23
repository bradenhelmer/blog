import { pb } from "$lib/pb";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  let postList = await pb.collection("posts").getList();
  return {
    posts: postList.items,
  };
};
