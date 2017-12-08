import moment from 'moment-timezone';

const displayFormat = 'YYYY MM DD HH:mm';

const parseFormats = [
  displayFormat,
  moment.ISO_8601,
  'Y M D H m'
];

const format = m => m.format(displayFormat);
const parse = string => moment(string, parseFormats, true);

export default {
  format,
  parse
};
