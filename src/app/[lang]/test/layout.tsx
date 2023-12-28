import '@/assets/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>from child layout</h1>
      {children}
    </div>
  )
}
