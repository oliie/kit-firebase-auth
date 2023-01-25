import { auth } from '$lib/firebase/admin';
import type { Cookies } from '@sveltejs/kit';

export const getUserIdFromToken = async (cookies: Cookies): Promise<{ uid: string | null }> => {
  const token = cookies.get('token');
  const user = token ? await auth.verifyIdToken(token) : null;

  if (!user?.uid) {
    cookies.set('token', '', { maxAge: -1 });
  }

  return { uid: user?.uid };
};
