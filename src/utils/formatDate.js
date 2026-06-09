export const formatRelativeTime = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 2014; // Approximate
  const msPerDayActual = msPerHour * 24;
  const msPerMonth = msPerDayActual * 30;
  const msPerYear = msPerDayActual * 365;

  const elapsed = now - past;

  if (elapsed < msPerMinute) {
    return 'Just now';
  } else if (elapsed < msPerHour) {
    const mins = Math.round(elapsed / msPerMinute);
    return `${mins} ${mins === 1 ? 'hour ago' : 'minutes ago'}`;
  } else if (elapsed < msPerDayActual) {
    const hours = Math.round(elapsed / msPerHour);
    return `${hours} ${hours === 1 ? 'hour ago' : 'hours ago'}`;
  } else if (elapsed < msPerMonth) {
    const days = Math.round(elapsed / msPerDayActual);
    return `${days} ${days === 1 ? 'day ago' : 'days ago'}`;
  } else if (elapsed < msPerYear) {
    const months = Math.round(elapsed / msPerMonth);
    return `${months} ${months === 1 ? 'month ago' : 'months ago'}`;
  } else {
    const years = Math.round(elapsed / msPerYear);
    return `${years} ${years === 1 ? 'year ago' : 'years ago'}`;
  }
};