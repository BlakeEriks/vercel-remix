import type { VercelRequest, VercelResponse } from '@vercel/node'
// import type { VercelRequest, VercelResponse } from '@vercel/node'

export const loader = async (req: VercelRequest, res: VercelResponse) => {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}
// export default function handler(req: VercelRequest, res: VercelResponse) {
//   const { name = 'World' } = req.query
//   return res.json({
//     message: `Hello ${name}!`,
//   })
// }

// export const loader = async () => {
//   return json({ message: 'Hello from Remix API route!' })
// }
