import { registerEnumType } from '@nestjs/graphql';

export enum MessageType {
	LIKE = 'LIKE',
	COMMENT = 'COMMENT',
}
registerEnumType(MessageType, {
	name: 'NotificationType',
});

export enum MessageStatus {
	WAIT = 'WAIT',
	READ = 'READ',
}
registerEnumType(MessageStatus, {
	name: 'NotificationStatus',
});

export enum MessageGroup {
	MEMBER = 'MEMBER',
	ARTICLE = 'ARTICLE',
	PROPERTY = 'PROPERTY',
}
registerEnumType(MessageGroup, {
	name: 'NotificationGroup',
});