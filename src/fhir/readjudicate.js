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
@class ItemsComponent
@exports  ItemsComponent as ItemsComponent
*/
class ItemsComponent extends BackboneElement {
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
  A service line number.
  @returns {Array} an array of {@link Number} objects
  */
  sequenceLinkId() { return this.json['sequenceLinkId']; }
}
  
/**
This resource provides the request and line items details for the claim which is to be readjudicated.
@class Readjudicate
@exports Readjudicate as Readjudicate
*/
class Readjudicate extends DomainResource {
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
  The Response Business Identifier.
  @returns {Array} an array of {@link Identifier} objects
  */
  identifier() {
    if (this.json['identifier']) {
      return this.json['identifier'].map((item) =>
        new Identifier(item));
    }
  }
  
  /**
  The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
  @returns {Coding}
  */
  ruleset() { if (this.json['ruleset']) { return new Coding(this.json['ruleset']); } }
  
  /**
  The style (standard) and version of the original material which was converted into this resource.
  @returns {Coding}
  */
  originalRuleset() { if (this.json['originalRuleset']) { return new Coding(this.json['originalRuleset']); } }
  
  /**
  The date when this resource was created.
  @returns {Array} an array of {@link Date} objects
  */
  date() { if (this.json['date']) { return DT.DateTime.parse(this.json['date']); } }
  
  /**
  The Insurer who is target  of the request.
  @returns {Reference}
  */
  target() { if (this.json['target']) { return new Reference(this.json['target']); } }
  
  /**
  The practitioner who is responsible for the services rendered to the patient.
  @returns {Reference}
  */
  provider() { if (this.json['provider']) { return new Reference(this.json['provider']); } }
  
  /**
  The organization which is responsible for the services rendered to the patient.
  @returns {Reference}
  */
  organization() { if (this.json['organization']) { return new Reference(this.json['organization']); } }
  
  /**
  Reference of resource to reverse.
  @returns {Reference}
  */
  request() { if (this.json['request']) { return new Reference(this.json['request']); } }
  
  /**
  Reference of response to resource to reverse.
  @returns {Reference}
  */
  response() { if (this.json['response']) { return new Reference(this.json['response']); } }
  
  /**
  A reference to supply which authenticated the process.
  @returns {Array} an array of {@link String} objects
  */
  reference() { return this.json['reference']; }
  
  /**
  List of top level items to be readjudicated, if none specified then the entire submission is readjudicated.
  @returns {Array} an array of {@link ItemsComponent} objects
  */
  item() {
    if (this.json['item']) {
      return this.json['item'].map((item) =>
        new ItemsComponent(item));
    }
  }
}
  



module.exports.Readjudicate = Readjudicate;
