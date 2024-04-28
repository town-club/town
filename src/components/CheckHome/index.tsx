import {Suspense} from 'react'
import Loading from "@components/Loading/Loading"
import { Navigate } from "react-router-dom";
export default function index() {
  return (
    <Suspense fallback={
        <Loading/>
    }>
        <div>
            <Navigate to="/home/town"/>
        </div>
    </Suspense>
    
  )
}
