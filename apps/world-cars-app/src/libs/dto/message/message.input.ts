import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { Member, TotalCounter } from '../member/member';
import { MessageGroup, MessageStatus, MessageType } from '../../enums/message.enum';
import { IsNotEmpty,  IsOptional } from 'class-validator';
import { NotificationType } from '../../enums/notification.enum';

@InputType()
export class messageInput {
	@IsNotEmpty()
	@Field(() => MessageType)
	messageType: NotificationType;

	@IsNotEmpty()
	@Field(() => MessageStatus, { defaultValue: MessageStatus.WAIT })
	messageStatus: MessageStatus;

	@IsNotEmpty()
	@Field(() => MessageGroup)
	messageGroup: MessageGroup;

	@IsNotEmpty()
	@Field(() => String)
	messageTitle: string;

	@IsOptional()
	@Field(() => String)
	messageDesc: string;

	@IsNotEmpty()
	@Field(() => String)
	authorId: ObjectId;

	@IsNotEmpty()
	@Field(() => String)
	receiverId: ObjectId;

	@IsNotEmpty()
	@Field(() => String, { nullable: true })
	propertyId?: ObjectId;

	@IsNotEmpty()
	@Field(() => String, { nullable: true })
	articleId?: ObjectId;

	/** from aggregation **/
}