export default eventHandler((event) => {
  console.log({ event });
  return {
    'msg': 'hello'
  }
})