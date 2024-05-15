import { db } from "@/lib/db"
import {hash} from "bcryptjs"
async function handler(req:Request){
  const {username,password} = await req.json()
  if(!username || !password){
    return Response.json({msg:"Invalid Parameters"},{status:400})
  }
  const hashPwd = await hash(password,10)
  const now = new Date()
  const newEntry = await db.users.create({
  data:{
    username:username,
    password:hashPwd,
    CreatedAt:now
  }
  })
  if(!newEntry){
    return Response.json({msg:"Database error"},{status:200})
  }
  return Response.json({msg:"Entry Created Successfully!"},{status:201})
}
export {handler as GET, handler as POST}