import { GetServerSideProps } from 'next'

type dataAbout = {
  data: {
    title: string
  }
}

function AboutPage({ data }: dataAbout) {
  return <div dangerouslySetInnerHTML={{ __html: data.title }}></div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = await res.json()

  return { props: { data } }
}

export default AboutPage
