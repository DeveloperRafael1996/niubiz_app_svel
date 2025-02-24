<script lang="ts">
  import { onMount } from "svelte";

  interface DecryptUrlResponse {
    amount: number;
    purchaseNumber: number;
    clientMail: string;
    customerId: number;
    name: string;
  }

  export let bodyPay: DecryptUrlResponse | null;
  export let sessionKey: string;

  const checkoutScript = import.meta.env.VITE_NEXT_PUBLIC_CHECKOUT_SCRIPT;
  const merchantId = import.meta.env.VITE_NEXT_PUBLIC_MERCHANT_ID;
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  const openForm = () => {
    if (!window.VisanetCheckout || !bodyPay || !sessionKey) {
      console.error("VisanetCheckout Script Not Loaded Properly");
      return;
    }

    const apiUrl = `/api/payment?amount=${bodyPay.amount}&purchaseNumber=${bodyPay.purchaseNumber}`;
    const logo = `${origin}/belity-app.png`;

    window.VisanetCheckout.configure({
      sessiontoken: sessionKey,
      channel: "web",
      merchantid: merchantId,
      purchasenumber: bodyPay.purchaseNumber,
      amount: bodyPay.amount,
      expirationminutes: "20",
      timeouturl: "/",
      merchantlogo: logo,
      action: apiUrl,
      formbuttoncolor: "#3900AC",
      buttonsize: "LARGE",
      hidexbutton: "true",
      usertoken: bodyPay.clientMail,
    });

    window.VisanetCheckout.open();
  };

  onMount(() => {
    const script = document.createElement("script");
    script.src = checkoutScript;
    script.async = true;
    script.onload = () => {
      console.log("Checkout Script Loaded Successfully");
      if (bodyPay) {
        openForm();
      }
    };

    document.body.appendChild(script);
  });
</script>
