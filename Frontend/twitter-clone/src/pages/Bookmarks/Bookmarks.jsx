import { useState } from "react";
import NoBookmark from "../Bookmarks/NoBookmark";
import MainPage from "..//../components/MainPage";
function Bookmarks() {

    const [isBookmarkHere,setBook] = useState(false);
    return (
         <div>
            {isBookmarkHere ? <MainPage/> : <NoBookmark/>}  
         </div>
    )
}


export default Bookmarks;