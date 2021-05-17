console.log("Tutorial 24: Date object- Date & Time");

let today = new Date();
// console.log(typeof (today));
// console.log(today.getDay());
// console.log(today.getDate());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getTime());
// console.log(today.getMilliseconds());
// console.log(today.getMonth());

let otherDate = new Date('12-12-12 12:12:12');
otherDate = new Date('June 26 1977');
otherDate = new Date('08/26/1992');
// console.log(otherDate);

otherDate.setDate(29);
otherDate.setMonth(10);
otherDate.setFullYear(1995);
otherDate.setHours(04);
otherDate.setMinutes(03);
otherDate.setSeconds(02);
console.log(otherDate);