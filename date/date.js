function dateCounter(date1, date2) {
  if (date2 > date1) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  } else {
    throw new Error("date2 must be greater than date1");
  }
}

module.exports = { dateCounter };
