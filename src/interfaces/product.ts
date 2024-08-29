export interface IProduct {
	id: string;
	name: string;
	description: string | null;
	price: number;
	defaultPriceId: string;
	imageUrl: string;
}
