import "./main.css";
import { useEffect, useState } from "react";

import PostCard from "../post-card/PostCard";
import Button from "../button/button";
import { apiRequest } from "../../js_functions/api";

function Main() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        try {
            const data = await apiRequest("/feed", "GET");
            console.log(data);
            setPosts(data.posts);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <main>
            {posts.map((post) => (
                <PostCard
                    key={post._id}
                    postTitle={post.title}
                    postDis={post.description}
                    like={post.likes}
                    comments={post.comments}
                    postimg={post.image ? post.image : "https://via.placeholder.com/150"}
                    username={post.username ? post.username : "Unknown User"}
                    created_at={post.created_at ? new Date(post.created_at).toLocaleString() : "Unknown Date"}
                />
            ))}


        </main>
    );
}

export default Main;