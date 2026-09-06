const IST_TIME_ZONE = "Asia/Kolkata";

/** Webinars aren't run in the morning, so registrations taken before this
 * hour (IST, 24h) are for today's session; after it, they roll to tomorrow. */
const WEBINAR_CUTOFF_HOUR = 16;

function nowInIST(): Date {
  return new Date(new Date().toLocaleString("en-US", { timeZone: IST_TIME_ZONE }));
}

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return {
    isoDate: `${year}-${month}-${day}`,
    label: date.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

/** Returns the date webinar registrations should be booked for: today
 * (IST) before the cutoff hour, tomorrow (IST) from the cutoff onward. */
export function getNextWebinarDateInIST() {
  const nowIST = nowInIST();
  const target = new Date(nowIST);

  if (nowIST.getHours() >= WEBINAR_CUTOFF_HOUR) {
    target.setDate(target.getDate() + 1);
  }

  return formatDate(target);
}

/** Milliseconds from now until the next cutoff-hour boundary — used to
 * schedule a one-shot timer that flips a displayed webinar date exactly
 * when it changes, instead of polling. */
export function msUntilNextWebinarCutoff() {
  const nowIST = nowInIST();
  const nextCutoff = new Date(nowIST);
  nextCutoff.setHours(WEBINAR_CUTOFF_HOUR, 0, 0, 0);

  if (nextCutoff.getTime() <= nowIST.getTime()) {
    nextCutoff.setDate(nextCutoff.getDate() + 1);
  }

  return nextCutoff.getTime() - nowIST.getTime();
}
