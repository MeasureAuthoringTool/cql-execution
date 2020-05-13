/* eslint-disable
    constructor-super,
    no-constant-condition,
    no-this-before-super,
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS001: Remove Babel/TypeScript constructor workaround
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

// Copyright (c) 2014 The MITRE Corporation
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without modification, 
// are permitted provided that the following conditions are met:
// 
//     * Redistributions of source code must retain the above copyright notice, this 
//       list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright notice, 
//       this list of conditions and the following disclaimer in the documentation 
//       and/or other materials provided with the distribution.
//     * Neither the name of HL7 nor the names of its contributors may be used to 
//       endorse or promote products derived from this software without specific 
//       prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND 
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT 
// NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR 
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, 
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
// POSSIBILITY OF SUCH DAMAGE.
const DT = require('../cql-datatypes');
const CORE = require('./core');
let {
  Element
} = CORE;
let {
  Resource
} = CORE;
const {
  Timing
} = CORE;
const {
  Period
} = CORE;
const {
  Parameters
} = CORE;
const {
  Coding
} = CORE;
({
  Resource
} = CORE);
const {
  Range
} = CORE;
const {
  Quantity
} = CORE;
const {
  Attachment
} = CORE;
const {
  BackboneElement
} = CORE;
const {
  DomainResource
} = CORE;
const {
  ContactPoint
} = CORE;
const {
  ElementDefinition
} = CORE;
const {
  Extension
} = CORE;
const {
  HumanName
} = CORE;
const {
  Address
} = CORE;
const {
  Ratio
} = CORE;
const {
  SampledData
} = CORE;
const {
  Reference
} = CORE;
const {
  CodeableConcept
} = CORE;
const {
  Identifier
} = CORE;
const {
  Narrative
} = CORE;
({
  Element
} = CORE);

/** 
Embedded class
@class QueryResponseComponent
@exports  QueryResponseComponent as QueryResponseComponent
*/
class QueryResponseComponent extends BackboneElement {
  constructor(json) {
    {
      // Hack: trick Babel/TypeScript into allowing this before super.
      if (false) { super(); }
      let thisFn = (() => { return this; }).toString();
      let thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;/)[1];
      eval(`${thisName} = this;`);
    }
    this.json = json;
    super(this.json);
  }
  /**
  Links response to source query.
  @returns {Array} an array of {@link String} objects
  */
  identifier() { return this.json['identifier']; }
  
  /**
  Outcome of processing the query.
  @returns {Array} an array of {@link String} objects
  */
  outcome() { return this.json['outcome']; }
  
  /**
  Total number of matching records.
  @returns {Array} an array of {@link Number} objects
  */
  total() { return this.json['total']; }
  
  /**
  Parameters server used.
  @returns {Array} an array of {@link Extension} objects
  */
  parameter() {
    if (this.json['parameter']) {
      return this.json['parameter'].map((item) =>
        new Extension(item));
    }
  }
  
  /**
  To get first page (if paged).
  @returns {Array} an array of {@link Extension} objects
  */
  first() {
    if (this.json['first']) {
      return this.json['first'].map((item) =>
        new Extension(item));
    }
  }
  
  /**
  To get previous page (if paged).
  @returns {Array} an array of {@link Extension} objects
  */
  previous() {
    if (this.json['previous']) {
      return this.json['previous'].map((item) =>
        new Extension(item));
    }
  }
  
  /**
  To get next page (if paged).
  @returns {Array} an array of {@link Extension} objects
  */
  next() {
    if (this.json['next']) {
      return this.json['next'].map((item) =>
        new Extension(item));
    }
  }
  
  /**
  To get last page (if paged).
  @returns {Array} an array of {@link Extension} objects
  */
  last() {
    if (this.json['last']) {
      return this.json['last'].map((item) =>
        new Extension(item));
    }
  }
  
  /**
  Resources that are the results of the search.
  @returns {Array} an array of {@link Reference} objects
  */
  reference() {
    if (this.json['reference']) {
      return this.json['reference'].map((item) =>
        new Reference(item));
    }
  }
}
  
/**
A description of a query with a set of parameters.
@class Query
@exports Query as Query
*/
class Query extends DomainResource {
  constructor(json) {
    {
      // Hack: trick Babel/TypeScript into allowing this before super.
      if (false) { super(); }
      let thisFn = (() => { return this; }).toString();
      let thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;/)[1];
      eval(`${thisName} = this;`);
    }
    this.json = json;
    super(this.json);
  }
  /**
  Links query and its response(s).
  @returns {Array} an array of {@link String} objects
  */
  identifier() { return this.json['identifier']; }
  
  /**
  Set of query parameters with values.
  @returns {Array} an array of {@link Extension} objects
  */
  parameter() {
    if (this.json['parameter']) {
      return this.json['parameter'].map((item) =>
        new Extension(item));
    }
  }
  
  /**
  If this is a response to a query.
  @returns {QueryResponseComponent}
  */
  response() { if (this.json['response']) { return new QueryResponseComponent(this.json['response']); } }
}
  



module.exports.Query = Query;
