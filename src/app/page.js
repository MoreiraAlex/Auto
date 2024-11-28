import AppPathList from '@/components/customize/app-pathlist'

export default function Home() {
  const paths = [{ href: '/', label: 'Home' }]
  return (
    <>
      <AppPathList paths={paths} />
      <h1>Dashboad</h1>
    </>
  )
}
