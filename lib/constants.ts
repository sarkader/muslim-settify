const DEFAULT_TYPEFORM_URL =
  "https://form.typeform.com/to/jR36nOwS";

export const TYPEFORM_URL =
  process.env.NEXT_PUBLIC_TYPEFORM_URL?.trim() || DEFAULT_TYPEFORM_URL;
