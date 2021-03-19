import { DateTime } from 'luxon';

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        [secondDate, firstDate] = [firstDate, secondDate];
    }

    return secondDate.diff(firstDate, ['year', 'months', 'days']).toObject();
}

export const diffToHtml = diff => `
    <span>
        ${diff.years ? 'Лет: ' + diff.years + ', ' : ' '}
        ${diff.months ? 'Месяцев: ' + diff.months + ', ' : ''}
        ${diff.days ? 'Дней: ' + diff.days : ' '}
    </span>
`