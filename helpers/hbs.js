const moment = require('moment');

module.exports = {
  truncate: function(str, length) {
    if (str.length > length) {
      const newStr = str.substring(0, length - 3); // Cuts off three extra characters for "..."
      return `${newStr}...`;
    }
    return str;
  },
  stripTags: function(input) {
    return input.replace(/<(?:.|\n)*?>/gm, '');
  },
  formatDate: function(date, format) {
    return moment(date).format(format);
  },
  select: function(selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp('>' + selected + '</option>'),
        ' selected="selected"$&'
      );
  },
  editIcon: function(storyUser, loggedUser, storyId, floating = true) {
    if (storyUser == loggedUser) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab red"><i class="fa fa-pencil"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fa fa-pencil"></i></a>`;
      }
    } else {
      return '';
    }
  }
};
