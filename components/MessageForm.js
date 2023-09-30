import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import { useRouter } from 'next/router'
import { useAppContext } from '../pages/_app.js';


const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;
    const router = useRouter();
    const { data } = useAppContext();


    const handleTransferClick = () => {
        router.push('/transferFund'); // Navigate to TransferFund page when the button is clicked
    };

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // stop the page from refreshing

        // Concatenate the value with data when sending the message
        const text = `${value.trim()} ${data.tokenSymbol} ${data.walletAddress} ${data.tokenAmount}`.trim();

        if (text.length > 0) {
        sendMessage(creds, chatId, { text });
        }
        setValue('');
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload.bind(this)}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
            <button type="button" className="funds-button" onClick={handleTransferClick}>Transfer Money</button>
        </form>
    );
    };

export default MessageForm;