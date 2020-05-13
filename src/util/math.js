/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let isValidDecimal, isValidInteger, MAX_DATE_VALUE, MAX_DATETIME_VALUE, MAX_FLOAT_VALUE, MAX_INT_VALUE, MAX_TIME_VALUE, MIN_DATE_VALUE, MIN_DATETIME_VALUE, MIN_FLOAT_PRECISION_VALUE, MIN_FLOAT_VALUE, MIN_INT_VALUE, MIN_TIME_VALUE, OverFlowException, predecessor, successor;
const { Exception } = require('../datatypes/exception');
const { DateTime, Date } = require('../datatypes/datetime');
const { Uncertainty } = require('../datatypes/uncertainty');

module.exports.MAX_INT_VALUE = (MAX_INT_VALUE = Math.pow(2,31)-1);
module.exports.MIN_INT_VALUE = (MIN_INT_VALUE = Math.pow(-2,31));
module.exports.MAX_FLOAT_VALUE = (MAX_FLOAT_VALUE = 99999999999999999999999999999.99999999);
module.exports.MIN_FLOAT_VALUE = (MIN_FLOAT_VALUE = -99999999999999999999999999999.99999999);
module.exports.MIN_FLOAT_PRECISION_VALUE = (MIN_FLOAT_PRECISION_VALUE = Math.pow(10,-8));
module.exports.MIN_DATETIME_VALUE = (MIN_DATETIME_VALUE = DateTime.parse("0001-01-01T00:00:00.000"));
module.exports.MAX_DATETIME_VALUE = (MAX_DATETIME_VALUE = DateTime.parse("9999-12-31T23:59:59.999"));
module.exports.MIN_DATE_VALUE = (MIN_DATE_VALUE = Date.parse("0001-01-01"));
module.exports.MAX_DATE_VALUE = (MAX_DATE_VALUE = Date.parse("9999-12-31"));
module.exports.MIN_TIME_VALUE = (MIN_TIME_VALUE = DateTime.parse("0000-01-01T00:00:00.000"));
module.exports.MAX_TIME_VALUE = (MAX_TIME_VALUE = DateTime.parse("0000-01-01T23:59:59.999"));

module.exports.overflowsOrUnderflows = function(value) {
  if (value == null) { return false; }
  if (value.isQuantity) {
    if (!isValidDecimal(value.value)) { return true; }
  } else if ((value.isTime != null) && value.isTime()) {
    if (value.after(MAX_TIME_VALUE)) { return true; }
    if (value.before(MIN_TIME_VALUE)) { return true; }
  } else if (value.isDateTime) {
    if (value.after(MAX_DATETIME_VALUE)) { return true; }
    if (value.before(MIN_DATETIME_VALUE)) { return true; }
  } else if (value.isDate) {
    if (value.after(MAX_DATE_VALUE)) { return true; }
    if (value.before(MIN_DATE_VALUE)) { return true; }
  } else if (Number.isInteger(value)) {
    if (!isValidInteger(value)) { return true; }
  } else {
    if (!isValidDecimal(value)) { return true; }
  }
  return false;
};

module.exports.isValidInteger = (isValidInteger = function(integer) {
  if (isNaN(integer)) { return false; }
  if (integer > MAX_INT_VALUE) { return false; }
  if (integer < MIN_INT_VALUE) { return false; }
  return true;
});

module.exports.isValidDecimal = (isValidDecimal = function(decimal) {
  if (isNaN(decimal)) { return false; }
  if (decimal > MAX_FLOAT_VALUE) { return false; }
  if (decimal < MIN_FLOAT_VALUE) { return false; }
  return true;
});

module.exports.limitDecimalPrecision = function(decimal) {
  let decimalString = decimal.toString();
  // For decimals so large that they are represented in scientific notation, javascript has already limited
  // the decimal to its own constraints, so we can't determine the original precision.  Leave as-is unless
  // this becomes problematic, in which case we would need our own parseFloat.
  if (decimalString.indexOf('e') !== -1) {
    return decimal;
  }

  const splitDecimalString = decimalString.split('.');
  const decimalPoints = splitDecimalString[1];
  if ((decimalPoints != null) && (decimalPoints.length > 8)) {
    decimalString = splitDecimalString[0] + '.' + splitDecimalString[1].substring(0,8);
  }
  return parseFloat(decimalString);
};

module.exports.OverFlowException = (OverFlowException = (OverFlowException = class OverFlowException extends Exception {}));

module.exports.successor = (successor = function(val) {
  if (typeof val === "number") {
    if (parseInt(val) === val) {
      if (val === MAX_INT_VALUE) { throw  new OverFlowException(); } else { return val + 1; }
    } else {
      //not bothering with the max float test because javascript does not handle floats at the level
      //very well
      return val + MIN_FLOAT_PRECISION_VALUE;
    }
  } else if (val != null ? val.isDateTime : undefined) {
    if (val.sameAs(MAX_DATETIME_VALUE)) { throw new OverFlowException(); } else { return val.successor(); }
  } else if (val != null ? val.isDate : undefined) {
    if (val.sameAs(MAX_DATE_VALUE)) { throw new OverFlowException(); } else { return val.successor(); }
  } else if (val != null ? val.isTime : undefined) {
    if (val.sameAs(MAX_TIME_VALUE)) { throw new OverFlowException(); } else { return val.successor(); }
  } else if (val != null ? val.isUncertainty : undefined) {
    // For uncertainties, if the high is the max val, don't increment it
    const high = (() => { try { return successor(val.high); } catch (e) { return val.high; } })();
    return new Uncertainty(successor(val.low), high);
  } else if (val != null ? val.isQuantity : undefined) {
    const succ = val.clone();
    succ.value = successor(val.value);
    return succ;
  } else if ((val == null)) {
    return null;
  }
});

module.exports.predecessor = (predecessor = function(val) {
  if (typeof val === "number") {
    if (parseInt(val) === val) {
      if (val === MIN_INT_VALUE) { throw  new OverFlowException(); } else { return val - 1; }
    } else {
      //not bothering with the min float test because javascript does not handle floats at the level
      //very well
      return val - MIN_FLOAT_PRECISION_VALUE;
    }
  } else if (val != null ? val.isDateTime : undefined) {
    if (val.sameAs(MIN_DATETIME_VALUE)) { throw new OverFlowException(); } else { return val.predecessor(); }
  } else if (val != null ? val.isDate : undefined) {
    if (val.sameAs(MIN_DATE_VALUE)) { throw new OverFlowException(); } else { return val.predecessor(); }
  } else if (val != null ? val.isTime : undefined) {
    if (val.sameAs(MIN_TIME_VALUE)) { throw new OverFlowException(); } else { return val.predecessor(); }
  } else if (val != null ? val.isUncertainty : undefined) {
    // For uncertainties, if the low is the min val, don't decrement it
    const low = (() => { try { return predecessor(val.low); } catch (e) { return val.low; } })();
    return new Uncertainty(low, predecessor(val.high));
  } else if (val != null ? val.isQuantity : undefined) {
    const pred = val.clone();
    pred.value = predecessor(val.value);
    return pred;
  } else if ((val == null)) {
    return null;
  }
});

module.exports.maxValueForInstance = function(val) {
  if (typeof val === "number") {
    if (parseInt(val) === val) { return MAX_INT_VALUE; } else { return MAX_FLOAT_VALUE; }
  } else if (val != null ? val.isDateTime : undefined) {
    return MAX_DATETIME_VALUE.copy();
  } else if (val != null ? val.isDate : undefined) {
    return MAX_DATE_VALUE.copy();
  } else if (val != null ? val.isTime : undefined) {
    return MAX_TIME_VALUE.copy();
  } else if (val != null ? val.isQuantity : undefined) {
    const val2 = val.clone();
    val2.value = maxValueForInstance(val2.value);
    return val2;
  } else {
    return null;
  }
};

module.exports.minValueForInstance = function(val) {
  if (typeof val === "number") {
    if (parseInt(val) === val) { return MIN_INT_VALUE; } else { return MIN_FLOAT_VALUE; }
  } else if (val != null ? val.isDateTime : undefined) {
    return MIN_DATETIME_VALUE.copy();
  } else if (val != null ? val.isDate : undefined) {
    return MIN_DATE_VALUE.copy();
  } else if (val != null ? val.isTime : undefined) {
    return MIN_TIME_VALUE.copy();
  } else if (val != null ? val.isQuantity : undefined) {
    const val2 = val.clone();
    val2.value = minValueForInstance(val2.value);
    return val2;
  } else {
    return null;
  }
};


module.exports.decimalAdjust = function(type, value, exp) {
  //If the exp is undefined or zero...
  if ((typeof exp === 'undefined') || (+exp === 0)) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  //If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !((typeof exp === 'number') && ((exp % 1) === 0))) {
    return NaN;
  }
  //Shift
  value = value.toString().split('e');
  let v = value[1] ? (+value[1] - exp) : -exp;
  value = Math[type](+(value[0] + 'e' + v));
  //Shift back
  value = value.toString().split('e');
  v = value[1] ? (+value[1] + exp) : exp;
  return +(value[0] + 'e' + v );
};
