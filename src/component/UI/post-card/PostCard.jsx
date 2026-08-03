import './postCard.css'
import Button from '../button/button';
import { useState } from "react";
function PostCard({ postimg, postTitle, postDis, like, comments ,username ,created_at}) {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(like);

   function handleLike() {
    setLiked(prev => !prev);

    setLikes(prev =>
        liked ? prev - 1 : prev + 1
    );
} 
    return (
        <div className="post-card">
            
            <div className="post-header">
                <h3>{username}</h3>
            </div>
            <img src={postimg} alt={postTitle} />

            <h2>{postTitle}</h2>

            <p>{postDis}</p>
            <p>{created_at}</p>

            <div className="post-footer">
                 <Button
                 variant='like'
                    text={liked ? `❤️ ${likes}` : `🤍 ${likes}`}
                    onClick={handleLike}
                />
                <span>💬 {comments}</span>
            </div>
        </div>
    );
}

export default PostCard;
