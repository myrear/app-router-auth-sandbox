'use client'

import { authenticate } from '@/app/login/actions'
import { useFormState, useFormStatus } from 'react-dom'

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, true)

  return (
    <form action={formAction}>
      <label>
        メールアドレス:
        <input className="text-gray-900" type="email" name="email" />
      </label>
      <label>
        パスワード:
        <input className="text-gray-900" type="password" name="password" />
      </label>
      {!state && (
        <div className="text-red-500">
          メールアドレスかパスワードが違います。
        </div>
      )}
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button aria-disabled={pending}>
      {pending ? 'ログイン中' : 'ログインする'}
    </button>
  )
}
