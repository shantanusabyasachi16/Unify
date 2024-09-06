import mongoose from "mongoose";
import { Chat } from '../models/chatModel.js'; 
import { Message } from '../models/messageModel.js'; 

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.id; // Assuming this is coming from a JWT token or session
        const receiverId = req.params.id;
        const { message } = req.body;

        // Validate senderId and receiverId
        if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(receiverId)) {
            return res.status(400).json({ message: "Invalid sender or receiver ID" });
        }

        // Find the chat between the two users
        let gotChat = await Chat.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        // Create a new chat if it doesn't exist
        if (!gotChat) {
            gotChat = await Chat.create({
                participants: [senderId, receiverId],
            });
        }

        // Create a new message
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        // Add the message to the chat's messages array
        if (newMessage) {
            gotChat.messages.push(newMessage._id);
            await gotChat.save();
        }

        // SOCKET IO: Emit the message to connected users (if Socket.IO is set up)
        // io.to(receiverId).emit('newMessage', newMessage); // Example

        // Return a successful response
        return res.status(201).json({
            message: "Message sent successfully",
            newMessage,  // Optionally return the message
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Receive message
export const getMessage = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;

        // Validate senderId and receiverId
        if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(receiverId)) {
            return res.status(400).json({ message: "Invalid sender or receiver ID" });
        }

        const gotChat = await Chat.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate("messages");

        return res.status(200).json(gotChat?.messages);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
