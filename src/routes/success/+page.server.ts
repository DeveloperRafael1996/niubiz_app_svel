import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const amount = url.searchParams.get("amount");
  const purchaseNumber = url.searchParams.get("purchaseNumber");
  const transactionToken = url.searchParams.get("transactionToken");

  return {
    amount,
    purchaseNumber,
    transactionToken
  };
};