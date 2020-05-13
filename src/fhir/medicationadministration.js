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
@class MedicationAdministrationDosageComponent
@exports  MedicationAdministrationDosageComponent as MedicationAdministrationDosageComponent
*/
class MedicationAdministrationDosageComponent extends BackboneElement {
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
  The timing schedule for giving the medication to the patient.  This may be a single time point (using dateTime) or it may be a start and end dateTime (Period).
  @returns {Array} an array of {@link Date} objects
  */
  timingDateTime() { if (this.json['timingDateTime']) { return DT.DateTime.parse(this.json['timingDateTime']); } }
  /**
  The timing schedule for giving the medication to the patient.  This may be a single time point (using dateTime) or it may be a start and end dateTime (Period).
  @returns {Period}
  */
  timingPeriod() { if (this.json['timingPeriod']) { return new Period(this.json['timingPeriod']); } }
  
  /**
  If set to true or if specified as a CodeableConcept, indicates that the medication is only taken when needed within the specified schedule rather than at every scheduled dose.  If a CodeableConcept is present, it indicates the pre-condition for taking the Medication.
  @returns {Array} an array of {@link boolean} objects
  */
  asNeededBoolean() { return this.json['asNeededBoolean']; }
  /**
  If set to true or if specified as a CodeableConcept, indicates that the medication is only taken when needed within the specified schedule rather than at every scheduled dose.  If a CodeableConcept is present, it indicates the pre-condition for taking the Medication.
  @returns {CodeableConcept}
  */
  asNeededCodeableConcept() { if (this.json['asNeededCodeableConcept']) { return new CodeableConcept(this.json['asNeededCodeableConcept']); } }
  
  /**
  A coded specification of the anatomic site where the medication first entered the body.  E.g. "left arm".
  @returns {CodeableConcept}
  */
  site() { if (this.json['site']) { return new CodeableConcept(this.json['site']); } }
  
  /**
  A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.   E.g. topical, intravenous, etc.
  @returns {CodeableConcept}
  */
  route() { if (this.json['route']) { return new CodeableConcept(this.json['route']); } }
  
  /**
  A coded value indicating the method by which the medication was introduced into or onto the body. Most commonly used for injections.  Examples:  Slow Push; Deep IV.

Terminologies used often pre-coordinate this term with the route and or form of administration.
  @returns {CodeableConcept}
  */
  method() { if (this.json['method']) { return new CodeableConcept(this.json['method']); } }
  
  /**
  The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.
  @returns {Quantity}
  */
  quantity() { if (this.json['quantity']) { return new Quantity(this.json['quantity']); } }
  
  /**
  Identifies the speed with which the medication was introduced into the patient. Typically the rate for an infusion e.g. 200ml in 2 hours.  May also expressed as a rate per unit of time such as 100ml per hour - the duration is then not specified, or is specified in the quantity.
  @returns {Ratio}
  */
  rate() { if (this.json['rate']) { return new Ratio(this.json['rate']); } }
  
  /**
  The maximum total quantity of a therapeutic substance that was administered to the patient over the specified period of time. E.g. 1000mg in 24 hours.
  @returns {Ratio}
  */
  maxDosePerPeriod() { if (this.json['maxDosePerPeriod']) { return new Ratio(this.json['maxDosePerPeriod']); } }
}
  
/**
Describes the event of a patient being given a dose of a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.

Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
@class MedicationAdministration
@exports MedicationAdministration as MedicationAdministration
*/
class MedicationAdministration extends DomainResource {
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
  External identifier - FHIR will generate its own internal IDs (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
  @returns {Array} an array of {@link Identifier} objects
  */
  identifier() {
    if (this.json['identifier']) {
      return this.json['identifier'].map((item) =>
        new Identifier(item));
    }
  }
  
  /**
  Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
  @returns {Array} an array of {@link String} objects
  */
  status() { return this.json['status']; }
  
  /**
  The person or animal to whom the medication was given.
  @returns {Reference}
  */
  patient() { if (this.json['patient']) { return new Reference(this.json['patient']); } }
  
  /**
  The individual who was responsible for giving the medication to the patient.
  @returns {Reference}
  */
  practitioner() { if (this.json['practitioner']) { return new Reference(this.json['practitioner']); } }
  
  /**
  The visit or admission the or other contact between patient and health care provider the medication administration was performed as part of.
  @returns {Reference}
  */
  encounter() { if (this.json['encounter']) { return new Reference(this.json['encounter']); } }
  
  /**
  The original request, instruction or authority to perform the administration.
  @returns {Reference}
  */
  prescription() { if (this.json['prescription']) { return new Reference(this.json['prescription']); } }
  
  /**
  Set this to true if the record is saying that the medication was NOT administered.
  @returns {Array} an array of {@link boolean} objects
  */
  wasNotGiven() { return this.json['wasNotGiven']; }
  
  /**
  A code indicating why the administration was not performed.
  @returns {Array} an array of {@link CodeableConcept} objects
  */
  reasonNotGiven() {
    if (this.json['reasonNotGiven']) {
      return this.json['reasonNotGiven'].map((item) =>
        new CodeableConcept(item));
    }
  }
  
  /**
  An interval of time during which the administration took place.  For many administrations, such as swallowing a tablet the lower and upper values of the interval will be the same.
  @returns {Array} an array of {@link Date} objects
  */
  effectiveTimeDateTime() { if (this.json['effectiveTimeDateTime']) { return DT.DateTime.parse(this.json['effectiveTimeDateTime']); } }
  /**
  An interval of time during which the administration took place.  For many administrations, such as swallowing a tablet the lower and upper values of the interval will be the same.
  @returns {Period}
  */
  effectiveTimePeriod() { if (this.json['effectiveTimePeriod']) { return new Period(this.json['effectiveTimePeriod']); } }
  
  /**
  Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
  @returns {Reference}
  */
  medication() { if (this.json['medication']) { return new Reference(this.json['medication']); } }
  
  /**
  The device used in administering the medication to the patient.  E.g. a particular infusion pump.
  @returns {Array} an array of {@link Reference} objects
  */
  device() {
    if (this.json['device']) {
      return this.json['device'].map((item) =>
        new Reference(item));
    }
  }
  
  /**
  Provides details of how much of the medication was administered.
  @returns {Array} an array of {@link MedicationAdministrationDosageComponent} objects
  */
  dosage() {
    if (this.json['dosage']) {
      return this.json['dosage'].map((item) =>
        new MedicationAdministrationDosageComponent(item));
    }
  }
}
  



module.exports.MedicationAdministration = MedicationAdministration;
