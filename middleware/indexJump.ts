export default ({ route, redirect }: any) => {
  if (route.path === '/') {
    redirect('/home')
  }
}
