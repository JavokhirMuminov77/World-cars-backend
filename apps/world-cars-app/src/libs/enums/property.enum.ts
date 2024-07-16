import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	HYUNDAI = 'HYUNDAI',
	GENESIS = 'GENESIS',
	BMW = 'BMW',
	KIA = 'KIA',
	MERCDES = 'MERCDES',
	TOYOTA = 'TOYOTA',
	AUDI = 'AUDI',
	VPLKSWAGEN = 'VPLKSWAGEN',
	LEXUS = 'LEXUS',
	MOTORCYCLE = 'MOTORCYCLE',
	OTHERS = 'OTHERS',
  CADILLAC = 'CADILLAC'

}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHONJU = 'CHONJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});