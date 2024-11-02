import dayjs from "dayjs";
const convertDateToOurFormat = (date) => {
  return dayjs(date).format("MMMM D, [at] YYYY h:mm a");
};
export const HelperFunction = {
  convertDateToOurFormat,
};
