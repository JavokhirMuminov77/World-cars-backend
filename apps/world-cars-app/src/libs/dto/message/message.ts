import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { Member, TotalCounter } from '../member/member';
import { MessageGroup, MessageStatus, MessageType } from '../../enums/message.enum';

@ObjectType()
export class Message {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => MessageType)
	messageType: MessageType;

	@Field(() => MessageStatus)
	messageStatus: MessageStatus;

	@Field(() => MessageGroup)
	messageGroup: MessageGroup;

	@Field(() => String)
	messageTitle: string;

	@Field(() => String)
	messageDesc: ObjectId;

	@Field(() => String)
	authorId: string;

	@Field(() => String)
	receiverId: ObjectId;

	@Field(() => String, { nullable: true })
	propertyId: ObjectId;

	@Field(() => String, { nullable: true })
	articleId: ObjectId;

	@Field(() => Date)
	createdAt: Date;

	/** from aggregation **/

	@Field(() => Member, { nullable: true })
	memberData?: Member;
}

@ObjectType()
export class Messages {
	@Field(() => [Message])
	list: Message[];

	// @Field(() => [TotalCounter], { nullable: true })
	// metaCounter: TotalCounter[];
}