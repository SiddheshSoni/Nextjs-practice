import { signToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";


export async function POST(request){
    const {email, password } = await request.json();

    if(email != 'sid@mail.com' || password !='qwertywasd'){
        return NextResponse.json({error:"Invalid Creadentials!"}, {status:401});
    }

    const token = await signToken({email, role:'user'});
    const res = NextResponse.json({message:'Login Successful'});

    res.cookies.set('token',token, {
        httpOnly:true,
        maxAge:3600,
        path:'/'
    });

    return res;
}