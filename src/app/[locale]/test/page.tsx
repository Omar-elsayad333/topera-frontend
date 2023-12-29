import { getDictionary } from '@/containers/lang'
import TestComponent from '@/components/TestComponent'

const Test = async ({ params: { locale } }: any) => {
  const dict = await getDictionary(locale)

  return (
    <div style={{ background: '#fff' }}>
      <section>
        <h1>hello from omar</h1>
        <p>{dict.welcome}</p>
      </section>
      <TestComponent dict={dict} />
    </div>
  )
}

export default Test
