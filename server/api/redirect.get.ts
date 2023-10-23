export default eventHandler(
  async (event) => {
    try {
      const res = await $fetch('https://jsonplaceholder.typicode.com/todos/fff')

      return res
    } catch (err) {
      console.log('send redirect')

      await sendRedirect(event, '/redirect-outside', 301)
    }
  }
)
