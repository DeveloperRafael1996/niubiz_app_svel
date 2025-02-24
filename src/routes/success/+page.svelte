<script lang="ts">
  export let data;
  // import { bodyPayStore } from "$lib/stores.js";
  //import type { DecryptUrlResponse } from "$lib/types";
  
  console.log(`Information `, { data });
  //onDestroy(unsubscribe);
</script>

<h1>¡Pago Exitoso!</h1>
<p>Amount: {data.amount}</p>
<p>Purchase Number: {data.purchaseNumber}</p>
<p>Transaction Token: {data.transactionToken}</p>

