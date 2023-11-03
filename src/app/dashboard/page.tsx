import { signOut } from '@/auth'

export default function Dashboard() {
  return (
    <div>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button>ログアウト</button>
      </form>
      dashboard
    </div>
  )
}
