import * as bcrypt from 'bcrypt';
import { UserRole } from '../../../../generated/prisma';
import prisma from '../../../shared/prisma';

const registerUser = async(req:any)=>{
    console.log(req.body)
    
    const hashedPassword: string = await bcrypt.hash(req.body.password, 12)
    const userData ={
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        role: UserRole.USER,
    }
   
    const result = await prisma.user.create({
        data: userData,
    });

    const { password, ...safeUser } = result;
    return safeUser;
}


const getAllUserFromDB = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return users;
};

export const userService ={
    registerUser,
    getAllUserFromDB
}