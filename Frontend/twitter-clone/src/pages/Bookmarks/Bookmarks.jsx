import { useState } from "react";
import NoBookmark from "../Bookmarks/NoBookmark";
import MainPage from "..//../components/MainPage";
function Bookmarks() {

    const [isBookmarkHere,setBook] = useState();
    return (
         <div>
            {isBookmarkHere ? <MainPage/> : <NoBookmark/>}  
         </div>
    )
}


export default Bookmarks;