import './message.scss'

export const Message = ({ own }) => {
    return (
        <div className={own ? "message own" : " message"}>
            <div className="messageTop">
                <img
                    className='messageImage'
                    src="https://pbs.twimg.com/profile_images/1740476733659254785/S3chCct-_400x400.jpg"
                    alt=""
                />
                <p className='messageText'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas commodi ipsum repellendus harum amet optio vitae exercitationem ex voluptas autem?
                </p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}
