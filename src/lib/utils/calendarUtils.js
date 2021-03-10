export const calendarUtils = {
  getFormattedDate: function (year, month, date = undefined) {
    if (date) {
      return new Date(year, month - 1, date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }

    return new Date(year, month - 1).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    });
  },
  getDateListForTheMonth: function (selectedYear, selectedMonth) {
    const startDate = new Date(selectedYear, selectedMonth - 1, 1);
    const endDate = new Date(selectedYear, selectedMonth, 0);

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
