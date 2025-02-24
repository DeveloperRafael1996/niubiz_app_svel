import type { PageServerLoad } from "./$types";
import axios from "axios";

export const load: PageServerLoad = async ({ url }) => {
  const dataParam = url.searchParams.get("data");
  const ivParam = url.searchParams.get("iv");

  if (!dataParam || !ivParam) {
    return { sessionKey: null, error: "Faltan Url" };
  }
  
  const payload = {
    data: dataParam,
    iv: ivParam,
  };

  const response = await axios.post(
    "https://ms-pay-dev-700901035298.us-central1.run.app/encrypt/v1/decrypt-url-seccion",
    payload,
    { headers: { "Content-Type": "application/json" } }
  );

  const { data: bodyPay, session } = response.data;

  return {
    bodyPay,
    sessionKey: session.sessionKey,
  };
};
