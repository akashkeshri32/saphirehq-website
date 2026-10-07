const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/**
 * Verifies a Cloudflare Turnstile token server-side. The site key
 * (NEXT_PUBLIC_TURNSTILE_SITE_KEY) is public and lives in the widget on the
 * page; the secret key (TURNSTILE_SECRET_KEY) must never be exposed to the
 * client — this call is the only place it's used.
 */
export async function verifyTurnstileToken(
  token: string | null,
  remoteIp?: string,
): Promise<{ success: boolean; error: Error | null }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    return { success: false, error: new Error("TURNSTILE_SECRET_KEY is not configured") };
  }

  if (!token) {
    return { success: false, error: new Error("Missing CAPTCHA token") };
  }

  try {
    const body = new URLSearchParams({ secret: secretKey, response: token });
    if (remoteIp) body.set("remoteip", remoteIp);

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const data = await response.json();

    if (!data.success) {
      const codes = (data["error-codes"] as string[] | undefined)?.join(", ") || "unknown";
      return { success: false, error: new Error(`Turnstile verification failed: ${codes}`) };
    }

    return { success: true, error: null };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err : new Error(String(err)) };
  }
}
