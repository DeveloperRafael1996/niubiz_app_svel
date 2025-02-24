import type { RequestEvent } from "../$types";

export async function POST({ url, request }: RequestEvent) {
  const amount = url.searchParams.get("amount");
  const purchaseNumber = url.searchParams.get("purchaseNumber");

  const response = await request.formData();
  const transactionToken = response.get("transactionToken") as string;
  const successUrl = `/success?amount=${encodeURIComponent(amount || "")}&purchaseNumber=${encodeURIComponent(purchaseNumber || "")}&transactionToken=${encodeURIComponent(transactionToken)}`;

  return new Response(null, {
    status: 303,
    headers: { Location: successUrl }
  });
}
