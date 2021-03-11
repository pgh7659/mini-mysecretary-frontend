export const calendarUtils = {
  getDateObject: function (year, month, date) {
    return new Date(year, month - 1, date);
  },
  getFormattedDateForFrca: function (date) {
    return date.toLocaleDateString('fr-ca');
  },
  getFormattedDateForKokr: function (date) {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },
  getFormattedYearMonthKokr: function (year, month) {
    return new Date(year, month).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    });
  },
  getDateListForTheMonth: function (selectedYear, selectedMonth) {
    const startDate = new Date(selectedYear, selectedMonth, 1);
    const endDate = new Date(selectedYear, selectedMonth + 1, 0);

    const dateArray = [
      ...new Array(startDate.getDay()).fill(-1),
      ...Array.from(new Array(endDate.getDate()), (item, index) => index + 1),
      ...new Array(7 - (endDate.getDay() + 1)).fill(-1),
    ];

    return Array.from(new Array(dateArray.length / 7), (item, index) =>
      dateArray.slice(index * 7, (index + 1) * 7)
    );
  },
};
