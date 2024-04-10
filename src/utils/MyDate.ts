export default class MyDate {
  constructor() {}

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
}
