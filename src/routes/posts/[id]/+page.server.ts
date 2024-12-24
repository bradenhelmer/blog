// src/routes/posts/[id]/+page.server.ts
import { pb } from '$lib/pb'; // Your PocketBase or database connection
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;
	const post = await pb.collection('posts').getOne(id);

	if (!post) {
		throw new Error('Post not found');
	}

	return { post };
};

