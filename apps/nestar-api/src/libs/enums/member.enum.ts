import {registerEnumType} from "@nestjs/graphql";


export enum MemberType {
  USER = "USER",
  AGENT = "AGENT",
  ADMIN = 'ADMIN',
}

registerEnumType(MemberType, {
 name: 'MemberType',
});

export enum MemberStatus {
  ACTIVE ='ACTIVE',
  BLOCK = 'BLOCK',
  DELETE = 'DELETE',
}
registerEnumType(MemberStatus, {
  name: 'MemberType',
 });

export enum MembrAuthType {
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  TRLRGRAM = 'TELEGRAM',
}
registerEnumType(MembrAuthType, {
  name: 'MemberType',
 });
