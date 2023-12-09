/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

function isWeekend(day: DaysOfWeek): boolean {
  if (day !== DaysOfWeek.SUNDAY || DaysOfWeek.SATURDAY) {
    return false;
  }
  return true;
}
