import { writable } from "svelte/store";
import type { DecryptUrlResponse } from "./types";

export const bodyPayStore = writable<DecryptUrlResponse | null>();
