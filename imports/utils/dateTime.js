import moment from 'moment-timezone';

const parseFormats = [
  moment.ISO_8601,
  'Y M D H m'
];

const parse = string => moment(string, parseFormats);

const displayFormat = 'YYYY MM DD HH:mm';

const format = m => m.format(displayFormat);

export default {
  parse,
  format
};
