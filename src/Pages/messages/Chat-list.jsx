import "./chatlist.css";
import Input from "../../component/UI/input/Input";
import Button from "../../component/UI/button/Button";
import { useState, useEffect } from "react";

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
    const [selectedChat, setSelectedChat] = useState(null);
    const [message, setMessage] = useState("");

    function handleSendMessage() {
        if (selectedChat && message.trim() !== "") {
            console.log(`Sending message: ${message} to ${selectedChat.name}`);
            setMessage("");
        }
    }


    return (
        
<div className={`chatlist ${selectedChat ? "show-chat" : ""}`}>
            <div className="list">

                <h1>Chat List</h1>
                <ul>
                    {chatlist.map((chat) => (
                        <li
    key={chat.id}
    className={selectedChat?.id === chat.id ? "active" : ""}
    onClick={() => {
        setSelectedChat(prev =>
            prev?.id === chat.id ? null : chat
        );
        setMessage("");
    }}
>

                            <img className="profile" src={chat.profile} alt={chat.name} />
                            <span>{chat.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chat">
                {selectedChat ? (
                    <div>
                        <div className="chatnav">
                        <img
                            className="profile"
                            src={selectedChat.profile}
                            alt={selectedChat.name}
                        />

                        <h2>{selectedChat.name}</h2>
                        </div>
                        <div className="messages">
                            <p>Messages will appear here...</p>
                        </div>
                        <div className="input-container">

                        <Input
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <Button

                            onClick={handleSendMessage}
                        >
                            Send</Button>
                        </div>

                            
                    </div>
                ) : (
                    <p>Select a chat to view its messages.</p>
                )}
            </div>


        </div>
    );
}
export default ChatList;
