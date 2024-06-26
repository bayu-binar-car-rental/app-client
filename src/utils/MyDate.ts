import days from "../data/days";

export default class MyDate {
  constructor() {}

  now() {
    return new Date();
  }

  today() {
    const date = new Date();
    const year = date.getFullYear();

    let month = (date.getMonth() + 1).toString();
    if (month.length === 1) {
      month = "0" + month;
    }

    const day = date.getDate();

    return year + "-" + month + "-" + day;
  }

  tomorrow() {
    return new Date(new Date().getTime() + 86400000);
  }

  addMinutes(minute: number) {
    return new Date(new Date().getTime() + minute * 60_000);
  }

  getFullTime(deadline: string) {
    const dateFn = new Date(deadline);

    const day = days[dateFn.getDay()];
    const date = dateFn.toUTCString().slice(5, 16);
    const time = dateFn.toLocaleTimeString();

    return { day, date, time };
  }
}
