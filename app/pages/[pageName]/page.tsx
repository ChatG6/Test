import "@/app/main.css"
export default function Page({ params }: { params: { pageName: string } }) {
  return <main><h1>{params.pageName} Page</h1><h5>This is a dynamic route page</h5></main>
}