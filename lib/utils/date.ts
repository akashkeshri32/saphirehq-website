const IST_TIME_ZONE = "Asia/Kolkata";

/** Returns tomorrow's date relative to India time, both as a DB-ready
 * "YYYY-MM-DD" string and as a human-readable label. */
export function getTomorrowInIST() {
  const nowIST = new Date(new Date().toLocaleString("en-US", { timeZone: IST_TIME_ZONE }));
  nowIST.setDate(nowIST.getDate() + 1);

  const year = nowIST.getFullYear();
  const month = String(nowIST.getMonth() + 1).padStart(2, "0");
  const day = String(nowIST.getDate()).padStart(2, "0");

  return {
    isoDate: `${year}-${month}-${day}`,
    label: nowIST.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

/** Milliseconds from now until the next IST midnight — used to schedule a
 * one-shot timer that flips a displayed "tomorrow" date exactly when it
 * changes, instead of polling. */
export function msUntilNextISTMidnight() {
  const nowIST = new Date(new Date().toLocaleString("en-US", { timeZone: IST_TIME_ZONE }));
  const nextMidnightIST = new Date(nowIST);
  nextMidnightIST.setHours(24, 0, 0, 0);

  return nextMidnightIST.getTime() - nowIST.getTime();
}
