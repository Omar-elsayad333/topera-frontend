import { getDictionary } from '@/containers/lang'

const Test = async ({ params: { lang } }: any) => {
  const dict = await getDictionary(lang)

  return (
    <div>
      <section>
        <h1>hello from omar</h1>
        <p>{dict.welcome}</p>
      </section>
    </div>
  )
}

export default Test
