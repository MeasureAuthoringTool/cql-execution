/* eslint-disable
    no-empty,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');
const validateQuantity = function(object,expectedValue,expectedUnit) {
  object.isQuantity.should.be.true();
  object.value.should.equal(expectedValue);
  return object.unit.should.equal(expectedUnit);
};


describe('Count', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be able to count lists without nulls', function() {
    return this.not_null.exec(this.ctx).should.equal(5);
  });
  it('should be able to count lists with nulls', function() {
    return this.has_null.exec(this.ctx).should.equal(2);
  });
  return it('should be able to count empty list', function() {
    return this.empty.exec(this.ctx).should.equal(0);
  });
});

describe('Sum', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be able to sum lists without nulls', function() {
    return this.not_null.exec(this.ctx).should.equal(15);
  });

  it('should be able to sum lists with nulls', function() {
    return this.has_null.exec(this.ctx).should.equal(3);
  });

  it('should be able to sum empty list', function() {
    return this.empty.exec(this.ctx) === null;
  });

  it('should be able to sum quantity lists without nulls', function() {
    const q = this.not_null_q.exec(this.ctx);
    return validateQuantity(q, 15, 'ml');
  });

  it('should be able to sum  quantity lists with nulls', function() {
    return validateQuantity(this.has_null_q.exec(this.ctx), 3, 'ml');
  });

  it('should return null for unmatched units in a list of quantiies', function() {
    return this.unmatched_units_q.exec(this.ctx) === null;
  });

  it('should be able to sum quantity lists with related units', function() {
    const q = this.q_diff_units.exec(this.ctx);
    return validateQuantity(q, 15, 'ml');
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('Min', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be able to find min in lists without nulls', function() {
    return this.not_null.exec(this.ctx).should.equal(0);
  });
  it('should be able to find min in lists with nulls', function() {
    return this.has_null.exec(this.ctx).should.equal(-1);
  });
  it('should be return null for empty list', function() {
    return this.empty.exec(this.ctx) === null;
  });
  it('should be able to find min in lists of quantiies without nulls', function() {
    return validateQuantity(this.not_null_q.exec(this.ctx), 0, 'ml');
  });
  it('should be able to find min in lists of quantiies with nulls', function() {
    return validateQuantity(this.has_null_q.exec(this.ctx), -1 , 'ml');
  });
  it('should be able to find min in lists of quantiies with related units', function() {
    return validateQuantity(this.q_diff_units.exec(this.ctx), 0, 'ml');
  });

  it('list of Integers', function() {
    return this.integerMin.exec(this.ctx).should.equal(2);
  });

  it('list of Decimals', function() {
    return this.decimalMin.exec(this.ctx).should.equal(-5);
  });

  it('list of DateTimes', function() {
    const dateTimeMin = this.dateTimeMin.exec(this.ctx);
    dateTimeMin.year.should.equal(2012);
    dateTimeMin.month.should.equal(9);
    return dateTimeMin.day.should.equal(5);
  });

  it('list of Dates', function() {
    const dateMin = this.dateMin.exec(this.ctx);
    dateMin.year.should.equal(2012);
    return dateMin.month.should.equal(1);
  });

  it('list of Times', function() {
    const timeMin = this.timeMin.exec(this.ctx);
    timeMin.hour.should.equal(12);
    timeMin.minute.should.equal(30);
    return timeMin.second.should.equal(3);
  });

  it('list of Nulls', function() {
    return should(this.minIsNull.exec(this.ctx)).be.null();
  });

  it('null list', function() {
    return should(this.minIsAlsoNull.exec(this.ctx)).be.null();
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});


describe('Max', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be able to find max in lists without nulls', function() {
    return this.not_null.exec(this.ctx).should.equal(10);
  });
  it('should be able to find max in lists with nulls', function() {
    return this.has_null.exec(this.ctx).should.equal(2);
  });
  it('should be return null for empty list', function() {
    return this.empty.exec(this.ctx) === null;
  });
  it('should be able to find max in lists of quantiies without nulls', function() {
    return validateQuantity(this.not_null_q.exec(this.ctx),  10, 'ml');
  });
  it('should be able to find max in lists of quantiies with nulls', function() {
    return validateQuantity(this.has_null_q.exec(this.ctx), 2, 'ml');
  });
  it('should be able to find max in lists of quantiies with related units', function() {
    return validateQuantity(this.q_diff_units.exec(this.ctx),  5, 'l');
  });

  it('list of Integers', function() {
    return this.integerMax.exec(this.ctx).should.equal(8);
  });

  it('list of Decimals', function() {
    return this.decimalMax.exec(this.ctx).should.equal(5.1);
  });

  it('list of DateTimes', function() {
    const dateTimeMax = this.dateTimeMax.exec(this.ctx);
    dateTimeMax.year.should.equal(2012);
    return dateTimeMax.month.should.equal(9);
  });

  it('list of Dates', function() {
    const dateMax = this.dateMax.exec(this.ctx);
    dateMax.year.should.equal(2013);
    return dateMax.month.should.equal(1);
  });

  it('list of Times', function() {
    const timeMax = this.timeMax.exec(this.ctx);
    timeMax.hour.should.equal(12);
    timeMax.minute.should.equal(30);
    return timeMax.second.should.equal(3);
  });

  it('list of Nulls', function() {
    return should(this.maxIsNull.exec(this.ctx)).be.null();
  });

  it('null list', function() {
    return should(this.maxIsAlsoNull.exec(this.ctx)).be.null();
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('Avg', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be able to find average for lists without nulls', function() {
    return this.not_null.exec(this.ctx).should.equal(3);
  });

  it('should be able to find average for lists with nulls', function() {
    return this.has_null.exec(this.ctx).should.equal(1.5);
  });

  it('should be return null for empty list', function() {
    return this.empty.exec(this.ctx) === null;
  });

  it('should be able to find average for lists of quantiies without nulls', function() {
    const q = this.not_null_q.exec(this.ctx);
    return validateQuantity(q, 3, 'ml');
  });

  it('should be able to find average for lists of quantiies with nulls', function() {
    const q = this.has_null_q.exec(this.ctx);
    return validateQuantity(q, 1.5 , 'ml');
  });

  it('should be able to find average for lists of quantiies with related units', function() {
    const q = this.q_diff_units.exec(this.ctx);
    return validateQuantity(q, 3, 'ml');
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('Median', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be able to find median of odd numbered list', function() {
    return this.odd.exec(this.ctx).should.equal(3);
  });

  it('should be able to find median of even numbered list', function() {
    return this.even.exec(this.ctx).should.equal(3.5);
  });

  it('should be able to find median of odd numbered list that contains duplicates', function() {
    return this.dup_vals_odd.exec(this.ctx).should.equal(3);
  });

  it('should be able to find median of even numbered list that contians duplicates', function() {
    return this.dup_vals_even.exec(this.ctx).should.equal(2.5);
  });

  it('should be return null for empty list', function() {
    return this.empty.exec(this.ctx) === null;
  });

  it('should be able to find median of odd numbered list', function() {
    const q = this.odd_q.exec(this.ctx);
    return validateQuantity(q, 3, 'ml');
  });

  it('should be able to find median of even numbered list', function() {
    const q = this.even_q.exec(this.ctx);
    return validateQuantity(q, 3.5, 'ml');
  });

  it('should be able to find median of odd numbered list that contains duplicates', function() {
    const q = this.dup_vals_odd_q.exec(this.ctx);
    return validateQuantity(q,3, 'ml');
  });

  it('should be able to find median of even numbered list that contians duplicates', function() {
    const q = this.dup_vals_even_q.exec(this.ctx);
    return validateQuantity(q, 2.5, 'ml');
  });

  it('should be able to find median of even numbered list of quantities with related units', function() {
    const q = this.q_diff_units.exec(this.ctx);
    return validateQuantity(q, 3.5, 'ml');
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('Mode', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });
  it('should be able to find mode of lists without nulls', function() {
    return this.not_null.exec(this.ctx).should.equal(2);
  });
  it('should be able to find Mode lists with nulls', function() {
    return this.has_null.exec(this.ctx).should.equal(2);
  });
  it('should be return null for empty list', function() {
    return this.empty.exec(this.ctx) === null;
  });
  it('should be able to find bimodal', function() {
    return this.bi_modal.exec(this.ctx).should.eql([2,3]);
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('PopulationVariance', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });
  it('should be able to find PopulationVariance of a list ', function() {
    return this.v.exec(this.ctx).should.equal(2.5);
  });
  it('should be able to find PopulationVariance of a list of like quantities', function() {
    return validateQuantity(this.v_q.exec(this.ctx), 2.5, 'ml');
  });
  it('should be able to find PopulationVariance of a list of related quantities', function() {
    return validateQuantity(this.q_diff_units.exec(this.ctx), 2.5, 'ml');
  });
  it('should throw an exception when quantities are not compatible ', function() {
    try {
      this.q_throw1.exec(this.ctx);
      return false.should.be.true('Incompatible Quantities should throw an error');
    } catch (error) {}
  });
  it('should throw an exception when quanties exist in a list but not all are quantities', function() {
    try {
      this.q_throw2.exec(this.ctx);
      return false.should.be.true('Incompatible Quantities should throw an error');
    } catch (error) {}
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('Variance', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });
  it('should be able to find Variance of a list ', function() {
    return this.v.exec(this.ctx).should.equal(2);
  });
  it('should be able to find Variance of a list of matched quantities', function() {
    return validateQuantity(this.v_q.exec(this.ctx), 2, 'ml');
  });
  it('should be able to find Variance of a list of related quantities', function() {
    return validateQuantity(this.q_diff_units.exec(this.ctx), 2, 'ml');
  });
  it('should throw an exception when quantities are not compatible ', function() {
    try {
      this.q_throw1.exec(this.ctx);
      return false.should.be.true('Incompatible Quantities should throw an error');
    } catch (error) {}
  });
  it('should throw an exception when quanties exist in a list but not all are quantities', function() {
    try {
      this.q_throw2.exec(this.ctx);
      return false.should.be.true('Incompatible Quantities should throw an error');
    } catch (error) {}
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('StdDev', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });
  it('should be able to find Standard Dev of a list ', function() {
    return this.std.exec(this.ctx).should.equal(1.4142135623730951);
  });
  it('should be able to find Standard Dev of a list of like quantities', function() {
    return validateQuantity(this.std_q.exec(this.ctx), 1.4142135623730951, 'ml');
  });
  it('should be able to find Standard Dev of a list of related quantities', function() {
    return validateQuantity(this.q_diff_units.exec(this.ctx), 1.4142135623730951, 'ml');
  });
  it('should throw an exception when quantities are not compatible ', function() {
    try {
      this.q_throw1.exec(this.ctx);
      return false.should.be.true('Incompatible Quantities should throw an error');
    } catch (error) {}
  });
  it('should throw an exception when quanties exist in a list but not all are quantities', function() {
    try {
      this.q_throw2.exec(this.ctx);
      return false.should.be.true('Incompatible Quantities should throw an error');
    } catch (error) {}
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('PopulationStdDev', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });
  it('should be able to find Population Standard Dev of a list ', function() {
    return this.dev.exec(this.ctx).should.equal(1.5811388300841898);
  });
  it('should be able to find Population Standard Dev of a list of quantities', function() {
    return validateQuantity(this.dev_q.exec(this.ctx), 1.5811388300841898, 'ml');
  });
  it('should be able to find Population Standard Dev of a list of related quantities', function() {
    return validateQuantity(this.q_diff_units.exec(this.ctx), 1.5811388300841898, 'ml');
  });
  it('should throw an exception when quantities are not compatible ', function() {
    try {
      this.q_throw1.exec(this.ctx);
      return false.should.be.true('Incompatible Quantities should throw an error');
    } catch (error) {}
  });
  it('should throw an exception when quanties exist in a list but not all are quantities', function() {
    try {
      this.q_throw2.exec(this.ctx);
      return false.should.be.true('Incompatible Quantities should throw an error');
    } catch (error) {}
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('Product', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should return a decimal product', function() {
    return this.decimal_product.exec(this.ctx).should.equal(24.0);
  });

  it('should return a integer product', function() {
    return this.integer_product.exec(this.ctx).should.equal(100);
  });

  it('should return 0', function() {
    return this.zero_product.exec(this.ctx).should.equal(0);
  });

  it('should return product of non-null items', function() {
    return this.product_with_null.exec(this.ctx).should.equal(20);
  });

  it('should return a quantity product', function() {
    return validateQuantity(this.quantity_product.exec(this.ctx), 24, 'g');
  });

  it('should return a 0 quantity product', function() {
    const q = this.quantity_zero_product.exec(this.ctx);
    return validateQuantity(q, 0, 'g');
  });

  it('should return null when null list is passed in', function() {
    return should(this.product_null.exec(this.ctx)).be.null();
  });

  it('should return null when passed in list of null quantities', function() {
    return should(this.product_quantity_null.exec(this.ctx)).be.null();
  });

  it('should return null when list is all null', function() {
    return should(this.product_of_nulls.exec(this.ctx)).be.null();
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('GeometricMean', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should return decimal geometric mean', function() {
    return this.decimal_geometric_mean.exec(this.ctx).should.equal(4.0);
  });

  it('should retun 0 as a geometric mean', function() {
    return this.zero_geometric_mean.exec(this.ctx).should.equal(0);
  });

  it('should return value when pass in list that contains nulls', function() {
    return this.null_geometric_mean.exec(this.ctx).should.equal(1.4142135623730951);
  });

  it('should return null when list is all null', function() {
    return should(this.all_nulls.exec(this.ctx)).be.null();
  });

  it('should return null when pass in list as null', function() {
    return should(this.also_null_geometric_mean.exec(this.ctx)).be.null();
  });

  return it('should be null if quantity units are not compatible', function() {
    return should(this.incompatibleUnitsNull.exec(this.ctx)).be.null();
  });
});

describe('AllTrue', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  return it('should be able to calculate all true', function() {
    this.at.exec(this.ctx).should.equal(true);
    this.atwn.exec(this.ctx).should.equal(false);
    this.atf.exec(this.ctx).should.equal(false);
    return this.atfwn.exec(this.ctx).should.equal(false);
  });
});

describe('AnyTrue', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  return it('should be able to calculate any true', function() {
    this.at.exec(this.ctx).should.equal(true);
    this.atwn.exec(this.ctx).should.equal(true);
    this.atf.exec(this.ctx).should.equal(false);
    return this.atfwn.exec(this.ctx).should.equal(false);
  });
});
