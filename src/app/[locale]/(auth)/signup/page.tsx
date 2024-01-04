import { NextPage } from 'next'
// import { getDictionary } from '@/containers/lang'

// containers
import { getPosts } from '@/containers/posts'

// Components

// MUI
import Container from '@mui/material/Container'

interface IProps {
  params: {
    locale: string
  }
}

const Signup: NextPage<IProps> = async ({ params: { locale } }) => {
  //   const dict = await getDictionary(locale)
  const data: any = await getPosts()

  return (
    <section>
      <Container maxWidth="xl">
        {data &&
          data.length > 0 &&
          data.map((item: any) => (
            <div>
              <p>{item.title}</p>
            </div>
          ))}
      </Container>
    </section>
  )
}

export default Signup
