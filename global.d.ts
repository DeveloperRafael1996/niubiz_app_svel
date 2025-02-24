declare global {
    interface Window {
      VisanetCheckout: {
        configure: (options: any) => void;
        open: () => void;
      };
    }
  }
  export {};
  