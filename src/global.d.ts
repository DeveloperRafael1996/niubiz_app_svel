declare global {
  interface Window {
    VisanetCheckout?: {
      configure: (config: {
        sessiontoken: string;
        channel: string;
        merchantid: string;
        purchasenumber: number;
        amount: number;
        expirationminutes: string;
        timeouturl: string;
        merchantlogo: string;
        action: string;
        formbuttoncolor: string;
        buttonsize: string;
        hidexbutton: string;
        usertoken: string;
      }) => void;
      open: () => void;
    };
  }
}
export {};
