import { getUserIdFromToken } from '$lib/server/check-token';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoadEvent } from '../$types';

export async function load({ cookies }: LayoutServerLoadEvent) {
  const { uid } = await getUserIdFromToken(cookies);

  if (uid) {
    return { uid };
  }

  throw redirect(307, '/');
}
