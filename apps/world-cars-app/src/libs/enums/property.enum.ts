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