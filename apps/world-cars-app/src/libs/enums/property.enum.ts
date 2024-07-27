import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	HYUNDAI = 'HYUNDAI',
	GENESIS = 'GENESIS',
	BMW = 'BMW',
	KIA = 'KIA',
	MERCEDES = 'MERCEDES',
	TOYOTA = 'TOYOTA',
	AUDI = 'AUDI',
	VOLKSWAGEN = 'VOLKSWAGEN',
	LEXUS = 'LEXUS',
	MOTORCYCLE = 'MOTORCYCLE',
  CADILLAC = 'CADILLAC',
	OTHERS = 'OTHERS',

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

export enum PropertyTypes {
	ECONOM = 'ECONOM',
	COMPACT = 'COMPACT',
	MIDSIZE = 'MIDSIZE',
	STANDARD = 'STANDARD',
	FULLSIZE = 'FULLSIZE',
	REMUMP = 'REMUMP ',
	LUXURY = 'LUXURY',
	VAN = 'VAN',
	SPORTURILITY = 'SPORTURILITY',
	CONVERTIBLE = 'CONVERTIBLE',
}
registerEnumType(PropertyTypes, {
	name: 'PropertyTypes',
});