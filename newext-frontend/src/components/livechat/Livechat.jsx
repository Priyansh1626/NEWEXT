import React from 'react'
import './livechat.css'
import ChatInput from './ChatInput'
import 'font-awesome/css/font-awesome.min.css'


const username = 'manishmh'
const userchat = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur, in aliquid nulla architecto eum.'
const profilePicture =  'https://i.postimg.cc/gjrHFPn4/No-Picture-Logo.png'

const Chat = ({username, chat, profilePicture}) => {
    return (
        <>
            <div className="individual-chat">
                <div className="user-logo_wrapper">
                    <div className="user-logo">
                        <img src={ profilePicture } alt="user-profile_logo" />
                    </div>
                </div>
                <div className="username-chat_container">
                    <p className='user-chat'><span className='username'>{ username }</span>
                    { chat }</p>
                </div>
            </div>
        </>
    )
}

const Livechat = () => {
  return (
    <>
        <div className='chat-wrapper'>
            <h1 className="chat-wrapper_heading">Live Chat</h1>
            <hr />
            <div className="chats-container">
                <Chat username={ username } chat={ userchat } profilePicture={ profilePicture }/>
                <Chat username={ username } chat={ userchat } profilePicture={ profilePicture }/>
                <Chat username={ username } chat={ userchat } profilePicture={ profilePicture }/>
                <Chat username={ username } chat={ userchat } profilePicture={ profilePicture }/>
                <Chat username={ username } chat={ userchat } profilePicture={ profilePicture }/>
                <Chat username={ username } chat={ userchat } profilePicture={ profilePicture }/>
                <Chat username={ username } chat={ userchat } profilePicture={ profilePicture }/>
            </div>
            <div className="chat-input_wrapper">
                <ChatInput placeholder="Say something..."/>
            </div>
        </div>
    </>
  )
}

export default Livechat