<script lang="ts">
  export let data;
  import CheckoutFormNiubiz from "$lib/components/checkout.svelte";
  import { bodyPayStore } from "$lib/stores.js";

  const { bodyPay, sessionKey } = data;
  bodyPayStore.set(bodyPay);
</script>

<CheckoutFormNiubiz {bodyPay} {sessionKey} />
