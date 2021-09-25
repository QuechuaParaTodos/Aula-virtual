import dayjs from 'dayjs';

export default {
  methods: {
    dateHourFormat(date) {
      return dayjs(date).format('YYYY-MM-DD HH:mm');
    },
  },
};