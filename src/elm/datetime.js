const {Expression} = require('./expression');
const {build} = require('./builder');
const {Literal} = require('./literal');
const DT = require('../datatypes/datatypes');

class DateTime extends Expression {
  static PROPERTIES = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset'];

  constructor(json) {
    super(json);
    this.json = json;
  }

  exec(ctx) {
    for (let property of DateTime.PROPERTIES) {
      // if json does not contain 'timezoneOffset' set it to the executionDateTime from the context
      if (this.json[property] != null) {
        this[property] = build(this.json[property]);
      } else if ((property === 'timezoneOffset') && (ctx.getTimezoneOffset() != null)) {
        this[property] = Literal.from({
          'type': 'Literal',
          'value': ctx.getTimezoneOffset(),
          'valueType': '{urn:hl7-org:elm-types:r1}Integer'
        });
      }
    }
    const args = ((() => {
      const result = [];
      for (let p of DateTime.PROPERTIES) {
        if (this[p] != null) {
          result.push(this[p].execute(ctx));
        } else {
          result.push(undefined);
        }
      }
      return result;
    })());
    return new DT.DateTime(...Array.from(args || []));
  }
}

class Date extends Expression {
  static PROPERTIES = ['year', 'month', 'day'];

  constructor(json) {
    super(json);
    this.json = json;
  }

  exec(ctx) {
    for (let property of Date.PROPERTIES) {
      if (this.json[property] != null) {
        this[property] = build(this.json[property]);
      }
    }
    const args = ((() => {
      const result = [];
      for (let p of Date.PROPERTIES) {
        if (this[p] != null) {
          result.push(this[p].execute(ctx));
        } else {
          result.push(undefined);
        }
      }
      return result;
    })());
    return new DT.Date(...Array.from(args || []));
  }
}

class Time extends Expression {
  static PROPERTIES = ['hour', 'minute', 'second', 'millisecond'];

  constructor(json) {
    super(...arguments);
    for (let property of Time.PROPERTIES) {
      if (json[property] != null) {
        this[property] = build(json[property]);
      }
    }
  }

  exec(ctx) {
    const args = ((() => {
      const result = [];
      for (let p of Time.PROPERTIES) {
        if (this[p] != null) {
          result.push(this[p].execute(ctx));
        } else {
          result.push(undefined);
        }
      }
      return result;
    })());
    return (new DT.DateTime(0, 1, 1, ...Array.from(args))).getTime();
  }
}

class Today extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ctx.getExecutionDateTime().getDate();
  }
}

class Now extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ctx.getExecutionDateTime();
  }
}

class TimeOfDay extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ctx.getExecutionDateTime().getTime();
  }
}

class DateTimeComponentFrom extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision;
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg[this.precision.toLowerCase()];
    } else {
      return null;
    }
  }
}

class DateFrom extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const date = this.execArgs(ctx);
    if (date != null) {
      return date.getDate();
    } else {
      return null;
    }
  }
}

class TimeFrom extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const date = this.execArgs(ctx);
    if (date != null) {
      return date.getTime();
    } else {
      return null;
    }
  }
}

class TimezoneOffsetFrom extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const date = this.execArgs(ctx);
    if (date != null) {
      return date.timezoneOffset;
    } else {
      return null;
    }
  }
}

// Delegated to by overloaded#After
const doAfter = (a, b, precision) => a.after(b, precision);

// Delegated to by overloaded#Before
const doBefore = (a, b, precision) => a.before(b, precision);

class DifferenceBetween extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision;
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    // Check to make sure args exist and that they have differenceBetween functions so that they can be compared to one another
    if ((args[0] == null) || (args[1] == null) || (typeof args[0].differenceBetween !== 'function') || (typeof args[1].differenceBetween !== 'function')) {
      return null;
    }
    const result = args[0].differenceBetween(args[1], this.precision != null ? this.precision.toLowerCase() : undefined);
    if ((result != null) && result.isPoint()) {
      return result.low;
    } else {
      return result;
    }
  }
}

class DurationBetween extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision;
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    // Check to make sure args exist and that they have durationBetween functions so that they can be compared to one another
    if ((args[0] == null) || (args[1] == null) || (typeof args[0].durationBetween !== 'function') || (typeof args[1].durationBetween !== 'function')) {
      return null;
    }
    const result = args[0].durationBetween(args[1], this.precision != null ? this.precision.toLowerCase() : undefined);
    if ((result != null) && result.isPoint()) {
      return result.low;
    } else {
      return result;
    }
  }
}

module.exports = {
  DateTime,
  Date,
  Time,
  Today,
  Now,
  TimeOfDay,
  DateTimeComponentFrom,
  DateFrom,
  TimeFrom,
  TimezoneOffsetFrom,
  doAfter,
  doBefore,
  DifferenceBetween,
  DurationBetween
};