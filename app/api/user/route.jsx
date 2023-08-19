import { NextResponse} from 'next/server'
import {userdata} from './db'
export async function GET(){

    return NextResponse.json({
        data:userdata,
        status:true
    })
}