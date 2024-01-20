import { Conversations, Navbar, Message } from "@/components"
import "./messenger.scss"

export const Messenger = () => {
    return (
        <>
            <Navbar />
            <div className="messenger">

                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text" placeholder="searh for friends" className="chatMenuInput" />

                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                    </div>
                </div>

                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <input className="chatMessageInput" placeholder="write something..." />
                            <button className="chatSubmitBtn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
