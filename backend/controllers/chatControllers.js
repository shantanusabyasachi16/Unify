import { Chat} from "../Models/chatmodel.js";
import { Message } from "../models/messageModel.js";


export const sendMessage = async (req,res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const {message} = req.body;

        let gotchat = await Chat.findOne({
            participants:{$all : [senderId, receiverId]},
        });

        if(!gotchat){
            gotchat = await Chat.create({
                participants:[senderId, receiverId]
            })
        };
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            gotchat.messages.push(newMessage._id);
        };
        

        await gotchat.save()
         
        // SOCKET IO
       
        return res.status(201).json({
            message:"meassage send sucessfully"
        })
    } catch (error) {
        console.log(error);
    }
}
//receive message
export const getMessage = async (req,res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const Chat = await Chat.findOne({
            participants:{$all : [senderId, receiverId]}
        }).populate("messages"); 
        return res.status(200).json(Chat?.messages);
    } catch (error) {
        console.log(error);
    }
}