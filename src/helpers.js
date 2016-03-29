const options = {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
};

export default {
  getDate(dateString) {
    const dateArray = dateString.split('-');
    const day = dateArray[2].split('T')[0]
    return {
      year: dateArray[0],
      month: dateArray[1],
      day: day
    }
  },

  getDateTime(dateTimeString) {
    const utcString=dateTimeString+" UTC"
    return new Date(utcString).toLocaleTimeString("en-us", options)
  },

  formatPrice(cents) {
    return '$' + ( (cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  },

  roundPrice(price) {
    return Math.ceil(price * 100) / 100
  },

  getPaymentDate(dueDate) {
    const date = this.getDate(dueDate)
    return `${date.month}/${date.day}/${date.year}`
  }
}