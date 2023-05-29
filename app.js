const COUNT_UP_ITEM_LABELS = ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds'];

/**
 *
 * @param dateTimeItems {object}
 * @param label {string}
 */
function updateCountupItem(label, dateTimeItems) {
  const element = document.getElementsByClassName(`countup-item-${label}`)[0];
  const valueElement = element.getElementsByClassName('countup-item-value')[0];

  valueElement.innerText = dateTimeItems[label];
}

function dateDifference() {
  const startDate = new Date("1991-10-27T23:03:00");
  const endDate = new Date(); // Today's date
  let totalSeconds = (endDate.getTime() - startDate.getTime()) / 1000;

  const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
  totalSeconds %= 365 * 24 * 60 * 60;

  const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
  totalSeconds %= 30 * 24 * 60 * 60;

  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  totalSeconds %= 24 * 60 * 60;

  const hours = Math.floor(totalSeconds / (60 * 60));
  totalSeconds %= 60 * 60;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const dateTimeItems = {
    years: years,
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }

  // TODO: move this to a collection with models but don't overdue it
  COUNT_UP_ITEM_LABELS.map((label) => updateCountupItem(label.toLowerCase(), dateTimeItems));
}

(() => {
  // Calculate the date difference once
  dateDifference();

  setInterval(dateDifference, 1000);
})();
