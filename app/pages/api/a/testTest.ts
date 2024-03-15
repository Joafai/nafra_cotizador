// const handler = async(req, res) => {
// 
//     const headers = new Headers();
//     headers.append( "Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMDUzNjQzNiwianRpIjoiMWQxYTA1MjctMjY0NC00MjY4LTljYjYtZTE3ZGMwNmNmZjk0IiwidHlwZSI6InJlZnJlc2giLCJpZGVudGl0eSI6Mzg5LCJuYmYiOjE3MTA1MzY0MzYsImNzcmYiOiI0OWY0YWJjZS1iNDBkLTQwYTgtYmU2Ni1kNWY0YjdjNGUwZjYiLCJleHAiOjE3MTA2MjI4MzYsInJvbGVzIjpbeyJpZCI6MTksIm5hbWUiOiJEZXNhcnJvbGxvIn0seyJpZCI6MTAsIm5hbWUiOiJFeHRyYXMifSx7ImlkIjo5LCJuYW1lIjoiTW9kZWxvcyJ9XX0.fgi630gZgISUkMu6OjLj2NA_k9HCqaR6xYdRvE8Csqg`);
// 
//     const response = await fetch(`https://api.infoauto.com.ar/cars/auth/refresh`,
//     {
//         headers: headers,
//         method: "POST",
//     });
// 
//     let responseBody;
// 
//     // Prevent parsing errors when the response body is empty
//     try {
//         responseBody = await response.json()
//     } catch (error) {
//         responseBody = {};
//     }
// 
//     console.log(responseBody);
// }
// 
// export default handler;

import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
