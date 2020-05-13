/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');
const vsets = require('./valuesets');
const { p1 } = require('./patients');

describe('DateRangeOptimizedQuery', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ], vsets);
  });

  it('should find encounters performed during the MP', function() {
    const e = this.encountersDuringMP.exec(this.ctx);
    e.should.have.length(1);
    return e[0].id().should.equal('http://cqframework.org/3/5');
  });

  it('should find ambulatory encounters performed during the MP', function() {
    const e = this.ambulatoryEncountersDuringMP.exec(this.ctx);
    e.should.have.length(1);
    return e[0].id().should.equal('http://cqframework.org/3/5');
  });

  return it('should find ambulatory encounter performances included in the MP', function() {
    const e = this.ambulatoryEncountersIncludedInMP.exec(this.ctx);
    e.should.have.length(1);
    return e[0].id().should.equal('http://cqframework.org/3/5');
  });
});

describe('FunctionQuery', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ], vsets);
  });

  return it('function with this' , function() {
    const functionReturnsDates = this.queryWithThis.exec(this.ctx);
    return functionReturnsDates.should.eql(true);
  });
});

describe.skip('IncludesQuery', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ], vsets);
  });

  return it('should find ambulatory encounter performances included in the MP', function() {
    const e = this.mPIncludedAmbulatoryEncounters.exec(this.ctx);
    e.should.have.length(1);
    return e[0].id().should.equal('http://cqframework.org/3/5');
  });
});

describe('MultiSourceQuery', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ], vsets);
  });

  it('should find all Encounters performed and Conditions', function() {
    const e = this.msQuery.exec(this.ctx);
    return e.should.have.length(6);
  });

  it.skip('should find encounters performed during the MP and All conditions', function() {
    const e = this.msQueryWhere.exec(this.ctx);
    return e.should.have.length(2);
  });

  return it.skip('should be able to filter items in the where clause', function() {
    const e = this.msQueryWhere2.exec(this.ctx);
    return e.should.have.length(1);
  });
});

describe.skip('QueryRelationship', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ]);});

  it('should be able to filter items with a with clause', function() {
    const e = this.withQuery.exec(this.ctx);
    return e.should.have.length(3);
  });

  it('with clause should filter out items not available', function() {
    const e = this.withQuery2.exec(this.ctx);
    return e.should.have.length(0);
  });

  it('should be able to filter items with a without clause', function() {
    const e = this.withOutQuery.exec(this.ctx);
    return e.should.have.length(3);
  });

  return it('without clause should be able to filter items with a without clause', function() {
    const e = this.withOutQuery2.exec(this.ctx);
    return e.should.have.length(0);
  });
});

describe('QueryLet', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ]);});

  return it('should be able to define a variable in a query and use it', function() {
    const e = this.query.exec(this.ctx);
    e.should.have.length(3);
    e[0]["a"].should.equal(e[0]["E"]);
    e[1]["a"].should.equal(e[1]["E"]);
    return e[2]["a"].should.equal(e[2]["E"]);
});
});

describe('Tuple', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ]);});

  return it('should be able to return tuple from a query', function() {
    const e = this.query.exec(this.ctx);
    return e.should.have.length(3);
  });
});

describe('QueryFilterNulls', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ]);});

  return it('should properly handle querying over nulls', function() {
    const e = this.query.exec(this.ctx);
    e.should.have.length(2);
    return e.should.eql(['One', 'Two']);
  });
});

describe('Sorting', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ]);});

  it('should be able to sort by a tuple field asc' , function() {
    let e = this.tupleAsc.exec(this.ctx);
    e.should.have.length(3);
    e[0].id().should.equal("http://cqframework.org/3/1");
    e[1].id().should.equal("http://cqframework.org/3/3");
    e[2].id().should.equal("http://cqframework.org/3/5");

    e = this.tupleReturnAsc.exec(this.ctx);
    e.should.have.length(3);
    e[0].id().should.equal("http://cqframework.org/3/1");
    e[1].id().should.equal("http://cqframework.org/3/3");
    e[2].id().should.equal("http://cqframework.org/3/5");

    e = this.tupleReturnTupleAsc.exec(this.ctx);
    e.should.have.length(3);
    e[0].E.id().should.equal("http://cqframework.org/3/1");
    e[1].E.id().should.equal("http://cqframework.org/3/3");
    return e[2].E.id().should.equal("http://cqframework.org/3/5");
  });

  it('should be able to sort by a tuple field desc', function() {
    let e = this.tupleDesc.exec(this.ctx);
    e.should.have.length(3);
    e[2].id().should.equal("http://cqframework.org/3/1");
    e[1].id().should.equal("http://cqframework.org/3/3");
    e[0].id().should.equal("http://cqframework.org/3/5");

    e = this.tupleReturnDesc.exec(this.ctx);
    e.should.have.length(3);
    e[2].id().should.equal("http://cqframework.org/3/1");
    e[1].id().should.equal("http://cqframework.org/3/3");
    e[0].id().should.equal("http://cqframework.org/3/5");

    e = this.tupleReturnTupleDesc.exec(this.ctx);
    e.should.have.length(3);
    e[2].E.id().should.equal("http://cqframework.org/3/1");
    e[1].E.id().should.equal("http://cqframework.org/3/3");
    return e[0].E.id().should.equal("http://cqframework.org/3/5");
  });

  it('should be able to sort dates by this' , function() {
    const unsortedDate = this.lastDateUnsorted.exec(this.ctx);
    unsortedDate.year.should.eql(1982);
    const sortedDate = this.lastDateByThis.exec(this.ctx);
    return sortedDate.year.should.eql(2010);
  });

  it('should be able to sort by number asc' , function() {
    const e = this.numberAsc.exec(this.ctx);
    return e.should.eql([0, 3, 5, 6, 7, 8, 9]);
});

  it('should be able to sort by number desc' , function() {
    const e = this.numberDesc.exec(this.ctx);
    return e.should.eql([9, 8, 7, 6, 5, 3, 0]);
});

  it('should be able to sort by string asc' , function() {
    this.stringAsc.exec(this.ctx).should.eql(['change', 'dont', 'jenny', 'number', 'your']);
    return this.stringReturnAsc.exec(this.ctx).should.eql(['change', 'dont', 'jenny', 'number', 'your']);
});

  it('should be able to sort by string desc' , function() {
    this.stringDesc.exec(this.ctx).should.eql(['your', 'number', 'jenny', 'dont', 'change']);
    return this.stringReturnDesc.exec(this.ctx).should.eql(['your', 'number', 'jenny', 'dont', 'change']);
});

  return it('should be able to sort by an expression that uses another expression in the library', function() {
    return this.sortByExpression.exec(this.ctx).should.eql([{N: 0}, {N: 3}, {N: 5}, {N: 6}, {N: 7}, {N: 8}, {N: 9}]);
});
});

describe('Distinct', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should return distinct by default' , function() {
    this.defaultNumbers.exec(this.ctx).should.eql([1, 2, 3, 4]);
    this.defaultStrings.exec(this.ctx).should.eql(['foo', 'bar', 'baz']);
    return this.defaultTuples.exec(this.ctx).should.eql([{a: 1, b:2}, {a: 2, b:3}]);
});

  it('should eliminate duplicates when returning distinct' , function() {
    this.distinctNumbers.exec(this.ctx).should.eql([1, 2, 3, 4]);
    this.distinctStrings.exec(this.ctx).should.eql(['foo', 'bar', 'baz']);
    return this.distinctTuples.exec(this.ctx).should.eql([{a: 1, b:2}, {a: 2, b:3}]);
});

  return it('should not eliminate duplicates when returning all' , function() {
    this.allNumbers.exec(this.ctx).should.eql([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]);
    this.allStrings.exec(this.ctx).should.eql(['foo', 'bar', 'baz', 'bar']);
    return this.allTuples.exec(this.ctx).should.eql([{a: 1, b:2}, {a: 2, b:3}, {a: 1, b:2}]);
});
});

describe('SingleObjectAlias', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ]);});

  it('should return object for single object alias' , function() {
    const firstEncounter = this.firstEncounter.exec(this.ctx);
    return this.singleAlias.exec(this.ctx).should.eql(firstEncounter);
  });

  it('should return object for single object alias with a where clause' , function() {
    const firstEncounter = this.firstEncounter.exec(this.ctx);
    return this.singleAliasWhere.exec(this.ctx).should.eql(firstEncounter);
  });

  it('should return single object when multisource query is based on single alias queries' , function() {
    const firstEncounter = this.firstEncounter.exec(this.ctx);
    const firstConditon = this.firstCondition.exec(this.ctx);
    return this.singleAliases.exec(this.ctx).should.eql({E: firstEncounter, C: firstConditon});
});

  it('should return list for multisource query that contains and single alias and list sources' , function() {
    const conditions = this.conditions.exec(this.ctx);
    const firstEncounter = this.firstEncounter.exec(this.ctx);
    const firstCondition = this.firstCondition.exec(this.ctx);
    const expt = conditions.map((con) => (
             {Con: con, E: firstEncounter, C: firstCondition}));
    const q = this.singleAliasesAndList.exec(this.ctx);
    q.should.have.length(conditions.length);
    return q.should.eql(expt);
  });

  it('should be able to filter to null with where clause ' , function() {
    return should.not.exist(this.singleAliasWhereToNull.exec(this.ctx));
  });

  it('should be able to return different object ' , function() {
    return this.singleAliasReturnTuple.exec(this.ctx).should.eql({a:1});
});

  it('should be able to return different object that is a list' , function() {
    return this.singleAliasReturnList.exec(this.ctx).should.eql(['foo', 'bar', 'baz', 'bar']);
});

  it('should be able to use a single object alias in a with clause', function() {
     const encounters = this.encounters.exec(this.ctx);
     const aw = this.singleAliasWith.exec(this.ctx);
     aw.should.eql(encounters);
     const awe = this.singleAliasWithEmpty.exec(this.ctx);
     return awe.should.have.length(0);
  });

  it('should be able to use a single object alias in a withOut clause', function() {
     const encounters = this.encounters.exec(this.ctx);
     this.singleAliasWithOut.exec(this.ctx).should.eql(encounters);
     return this.singleAliasWithOutEmpty.exec(this.ctx).should.have.length(0);
  });

  return it('should allow single source queries to be null and return null' , function() {
     return should.not.exist(this.nullQuery.exec(this.ctx));
  });
});
