interface IPaymentAdapter {
    proceedPaymentLogic(): boolean
}

class SamsungPayPaymentAdapter implements IPaymentAdapter {
    proceedPaymentLogic(): boolean {
        //* TODO: Samsung Pay
        return true;
    }
}

class ApplePayPaymentAdapter implements IPaymentAdapter{
    proceedPaymentLogic(): boolean {
        //* Apple Pay
        return true;
    }
}


class PaymentService{
    constructor(readonly paymentAdapter: IPaymentAdapter) {
        
    }

    public proceedPaymentLogic(){
        //* Samsung Pay
        this.paymentAdapter.proceedPaymentLogic();
    }

}

///*
const paymentService = new PaymentService(new ApplePayPaymentAdapter())


//* Employee <-- 
//* Developer, Administrator, Designer, PM...
//* (NEW)


//* Database
//* MySQL, Cassandra, PostgreSQL...
//* MariaDB