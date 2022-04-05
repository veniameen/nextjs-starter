export async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const jsonData = await response.json()
  return jsonData
}

export default async function handler(req, res) {
  const jsonData = await getData()
  res.status(200).json(jsonData)
}
