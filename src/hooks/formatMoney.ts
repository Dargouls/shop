export const useMoney = () => {
	const formatBRL = (amount: number) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(amount / 100);
	};

	return { formatBRL };
};
