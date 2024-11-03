import dayjs from "dayjs";
const convertDateToOurFormat = (date) => {
  /*
  d = day
  y = year
  m = month
  h = hours
  m = minutes
  s = seconds
  a = am,pm
  */
  return dayjs(date).format("MMMM D, [at] YYYY h:mm a");
};
export const HelperFunction = {
  convertDateToOurFormat,
};
