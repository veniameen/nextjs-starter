import { GetServerSideProps } from 'next'
import { getData } from './api/data'

type dataHome = {
  data: {
    title: string
  }
}

function HomePage({ data }: dataHome) {
  return <div className="app">Hello World {data.title}</div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getData()

  return { props: { data } }
}

export default HomePage
