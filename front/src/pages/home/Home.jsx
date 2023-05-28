
//import { redirect } from "react-router-dom"

export default function Home(){
    let redirectPage = '/shopers';
    redirectPage='';
    
    return redirectPage!== '' ? (
        <h2>Home {redirectPage}</h2>
    ):(
        <h2>Home</h2>
    )
}