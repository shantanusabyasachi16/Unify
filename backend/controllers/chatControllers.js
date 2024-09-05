import mongoose from "mongoose";
import { Chat } from '../models/chatModel.js'; 
import { Message } from '../models/messageModel.js'; 

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message } = req.body;

        // Validate senderId and receiverId
        if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(receiverId)) {
            return res.status(400).json({ message: "Invalid sender or receiver ID" });
        }

        let gotChat = await Chat.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!gotChat) {
            gotChat = await Chat.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            gotChat.messages.push(newMessage._id);
        }

        await gotChat.save();

        // SOCKET IO

        return res.status(201).json({
            message: "Message sent successfully",
        });
    } catch (error) {
        console.log(error);
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
