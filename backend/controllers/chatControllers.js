import mongoose from "mongoose";
import { Chat } from "../models/chatModel.js";
import { Message } from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../SoketIo/socket.js";
export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id; // Assuming this comes from a JWT token or session
    const receiverId = req.params.id;
    const { message } = req.body;

    if (
      !mongoose.Types.ObjectId.isValid(senderId) ||
      !mongoose.Types.ObjectId.isValid(receiverId)
    ) {
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
      // await gotChat.save();
      // await newMessage.save();
      await Promise.all([gotChat.save(), newMessage.save()]);
    }
    //socket io
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessages", newMessage);
    }

    return res.status(201).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.id;

    if (
      !mongoose.Types.ObjectId.isValid(senderId) ||
      !mongoose.Types.ObjectId.isValid(receiverId)
    ) {
      return res.status(400).json({ message: "Invalid sender or receiver ID" });
    }

    const gotChat = await Chat.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    return res.status(200).json(gotChat?.messages || []);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
