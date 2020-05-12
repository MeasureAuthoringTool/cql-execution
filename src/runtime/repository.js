const cql = require('../cql');

module.exports.Repository = class Repository {
  constructor(data) {
    this.data = data;
    this.libraries = Array.from(Object.values(data));
  }

  resolve(library, version) {
    for (const lib of this.libraries) {
      if (lib.library && lib.library.identifier) {
        const id = lib.library.identifier;
        if(id.id === library && id.version === version) {
          return new cql.Library(lib, this);
        }
      }
    }
  }
};
