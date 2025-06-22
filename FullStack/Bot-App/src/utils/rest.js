import moment from "moment";

export default async function (wakeTimeMs,workTimeMs) {
    const now=moment();
    const start=moment().startOf('day').add(wakeTimeMs,'ms');
    const end=moment(start).add(wakeTimeMs,'ms');

    if(now.isBefore(start)) return start.diff(now);
    if(now.isAfter(end)){
        const midmight=moment(start).add(1,'day').startOf('day');
        const next=moment(midmight).add(wakeTimeMs,'ms');
        return next.diff(now);
    }
    return 0;
}