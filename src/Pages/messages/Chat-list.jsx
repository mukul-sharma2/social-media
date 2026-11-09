import "./chatlist.css";

function ChatList() {
    const chatlist = [
        {
            id: 1, 
            name: "Chat 1",
            profile: "/img/profile.webp"
        },
        {
            id: 2,
            name: "Chat 2",
            profile: "/img/profile.webp"
        },
        {
            id: 3,
            name: "Chat 3",
            profile: "/img/profile.webp"
        } 
    ]
    return (
        <div className="chatlist">
            <div className="list">

            <h1>Chat List</h1>
            <ul>
                {chatlist.map((chat) => (
                    <li key={chat.id}>
                        <img className="profile" src={chat.profile} alt={chat.name} />
                        <span>{chat.name}</span>
                    </li>
                ))}
            </ul>
            </div>
            <div className="chat">
                sdfas
            </div>
        </div>
    );
}
export default ChatList;
              