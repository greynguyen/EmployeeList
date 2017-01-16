// Only executed on server
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees'
import _ from 'lodash';
import { image, helpers } from 'faker'

Meteor.startup(() => {
  // Check to see if data exists already
  const numberRecords = Employees.find({}).count();

  if (!numberRecords) {
    // Generate data
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      })
    });
  }

  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page });
  });
});
