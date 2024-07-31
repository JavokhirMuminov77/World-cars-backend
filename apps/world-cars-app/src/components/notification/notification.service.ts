import { Notification } from '../../libs/dto/notification/notification';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { NotificationInput } from '../../libs/dto/notification/notification.input';
import { NotificationStatus } from '../../libs/enums/notification.enum';
import { Message } from '../../libs/enums/common.enum';

@Injectable()
export class NotificationService {
	constructor(@InjectModel('Notification') private readonly notificationModel: Model<Notification>) {}

	public async createNotification(input: NotificationInput): Promise<Notification> {
		try {
			const createdNotification = await this.notificationModel.create({
				...input,
				notificationStatus: input.notificationStatus || NotificationStatus.WAIT, // Default status
			});
			return createdNotification;
		} catch (err) {
			console.log('Error, Service.model:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
	}

	public async getNotifications(): Promise<Notification[]> {
		return this.notificationModel.find().exec();
	}
}