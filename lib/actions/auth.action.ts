'use server'

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const FIVE_DAYS = 60 * 60 * 24 * 5 * 1000;

export async function signUp(params:SignUpParams){
const {uid,name,email} = params;
try {
  const userRecord = await db.collection('users').doc(uid).get();
  if(userRecord.exists){
    return {
      success:false,
      message:"User already exists"
    }
  }
  await db.collection('users').doc(uid).set({
    name,
    email
  })
  return {
    success:true,
    message:"User created successfully"
  }
} catch (error:unknown) {
  console.error('Error creating a user',error)
  if((error as { code?: string }).code === 'auth/email-already-exists'){
    return {
      success:false,
      message:"This email already exists"
    }
  }
  return{
    success:false,
    message:"Failed to create a user"
  }
}
}

export async function signIn(params:SignInParams){
  const {email,idToken} = params;
  try {
    const userRecord = await auth.getUserByEmail(email);
    if(!userRecord){
      return {
        success:false,
        message:"User does not exist"
      }
    }
    await setSessionCookie(idToken);
  } catch (error) {
    console.log(error)
    return{
      success:false,
      message:"Failed to sign in"
    }
  }
}


export async function setSessionCookie(idToken:string){
  const cookieStore = await cookies();
  const sessionCookie = await auth.createSessionCookie(idToken,{
    expiresIn: FIVE_DAYS

  });
  cookieStore.set('session',sessionCookie,{
    maxAge: FIVE_DAYS,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path:"/",
    sameSite:"lax"
  });
}

export async function getCurrentUser():Promise<User|null>{
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if(!sessionCookie){
    return null;
  }
  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie,true);
    const userRecord = await db.collection('users').doc(decodedClaims.uid).get();
    if(!userRecord.exists){
      return null;
    }
    return {
      ...userRecord.data(),
      id:userRecord.id
    } as User

  } catch (error) {
    console.log(error)
    return null
  }

}

export async function isAuthenticated(){
  const user = await getCurrentUser();
  return !!user
}



