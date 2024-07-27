import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import MessageSchema from '../../schemas/Message.model';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';
import { PropertyModule } from '../property/property.module';
import { BoardArticleModule } from '../board-article/board-article.module';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';





@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
		AuthModule,
		MemberModule,
		PropertyModule,
		BoardArticleModule,
	],
	providers: [MessageResolver, MessageService],
})
export class MessageModule {}