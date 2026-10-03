import "./profile.css";
import Edit_profile from "../edit_profile/edit";
import { apiRequest } from "../../component/js_functions/api";
import { useEffect, useState } from "react";



function Profile() {
  const [posts, setPosts] = useState([]);
  const[user,setUser]=useState({});
  const[showEdit, setShowedit] = useState(false)
  useEffect(() => {
    apiRequest("/my_posts", "GET" )
      .then((data) => {
        console.log(data.posts);
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    apiRequest("/get_user", "GET")
      .then((data) => {
        console.log(data);
        setUser(data);
      }
)      .catch((error) => {
        console.error(error.message);
      });
}, []);



  return (
    <div className="profile_page">
      <div className="profile_container">
        <div className="banner"></div>

        <img
          className="profile_page_img"
          src="https://imgs.search.brave.com/VsuqRd_o88Dv4i3ledX3CEuVmhw19LX3D8GstXpw0Q0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8xNy82MS9t/YWxlLWF2YXRhci1w/cm9maWxlLXBpY3R1/cmUtdmVjdG9yLTEw/MjExNzYxLmpwZw"
          alt="Profile"
        />

        <div className="profile_info">
          <h1 className="user_name">{user.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : "User"}</h1>
          <p className="user_bio">Frontend Developer</p>

          <div className="profile_stats">
            <div>
              <h3>{posts.length}</h3>
              <span>Posts</span>
            </div>

            <div>
              <h3>560</h3>
              <span>Followers</span>
            </div>

            <div>
              <h3>210</h3>
              <span>Following</span>
            </div>
          </div>

          <button className="edit_btn" onClick={() => setShowedit(true)}>
            Edit Profile
          </button>
          {showEdit && <Edit_profile onClose={() => setShowedit(false)} />}
        </div>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
