export function getCurrentDate() {
  const currentDate = new Date();
  return currentDate;
}

export function getWeekAgoDate() {
  const weekAgoDate = new Date();
  weekAgoDate.setDate(getCurrentDate().getDate() - 7);
  return weekAgoDate;
}
