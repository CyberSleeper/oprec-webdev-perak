interface IGame {
    id: string;
    name: string;
    registerationFee: number;
    paymentInfos: PaymentType[];
    key: number;
}