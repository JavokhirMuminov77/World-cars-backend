import { Resolver, Query, Args } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message, Messages } from '../../libs/dto/message/message';
import { Roles } from '../auth/decoratots/roles.decorator';
import { AuthMember } from '../auth/decoratots/authMember.decorator';
import { UseGuards } from '@nestjs/common';
import MessageSchema from '../../schemas/Message.model';
@Resolver(() => MessageSchema)
export class MessageResolver {
	constructor(private readonly messageService: MessageService) {}

	@UseGuards(AuthMember)
	@Query((returns) => [Message])
	public async getMessages() // @Args('auhtorId') input: string,
	// @AuthMember('_id') memberId: ObjectId,
	: Promise<Message[]> {
		return this.messageService.getMessages();
	}
}