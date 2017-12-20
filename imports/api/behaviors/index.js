import { Behavior } from 'meteor/jagi:astronomy';

// TODO move behaviors to individual files

const crudExtensions = {
  meteorMethods: {
    crudSave() {
      return this.save();
    },
    crudRemove() {
      return this.remove();
    }
  }
};

Behavior.create({
  name: 'crud',
  apply(Class) {
    Class.extend(crudExtensions);
  }
});
