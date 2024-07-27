import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message,Messages } from '../../libs/dto/message/message';
import { Model } from 'mongoose';
import { messageInput } from '../../libs/dto/message/message.input';
@Injectable()
export class MessageService {
	@InjectModel('Message') private readonly messageModel: Model<Message>;

	public async createMessage(input: messageInput): Promise<Message> {
		const message = new this.messageModel(input);
		return await message.save();
	}

	public async getMessages(): Promise<Message[]> {
		return await this.messageModel.find().exec();
	}
}