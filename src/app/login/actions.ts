'use server'

import { signIn } from '@/auth'

export async function authenticate(prevState: boolean, formData: FormData) {
  try {
    await signIn('credentials', Object.fromEntries(formData))
    return true
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return false
    }
    throw error
  }
}
