import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/firebase/admin';
import type { LayoutServerLoadEvent } from './$types';

export async function load({ cookies }: LayoutServerLoadEvent) {
  try {
    const token = cookies.get('token');
    const user = token ? await auth.verifyIdToken(token) : null;

    return {
      uid: user?.uid
    };
  } catch {
    // The token is set but invalid or expired
    cookies.set('token', '', { maxAge: -1 });
    throw redirect(307, '/');
  }
}
