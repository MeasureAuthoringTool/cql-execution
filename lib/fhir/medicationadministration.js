// Generated by CoffeeScript 1.12.7
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, MedicationAdministration, MedicationAdministrationDosageComponent, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  DT = require('../cql-datatypes');

  CORE = require('./core');

  Element = CORE.Element;

  Resource = CORE.Resource;

  Timing = CORE.Timing;

  Period = CORE.Period;

  Parameters = CORE.Parameters;

  Coding = CORE.Coding;

  Resource = CORE.Resource;

  Range = CORE.Range;

  Quantity = CORE.Quantity;

  Attachment = CORE.Attachment;

  BackboneElement = CORE.BackboneElement;

  DomainResource = CORE.DomainResource;

  ContactPoint = CORE.ContactPoint;

  ElementDefinition = CORE.ElementDefinition;

  Extension = CORE.Extension;

  HumanName = CORE.HumanName;

  Address = CORE.Address;

  Ratio = CORE.Ratio;

  SampledData = CORE.SampledData;

  Reference = CORE.Reference;

  CodeableConcept = CORE.CodeableConcept;

  Identifier = CORE.Identifier;

  Narrative = CORE.Narrative;

  Element = CORE.Element;


  /** 
  Embedded class
  @class MedicationAdministrationDosageComponent
  @exports  MedicationAdministrationDosageComponent as MedicationAdministrationDosageComponent
   */

  MedicationAdministrationDosageComponent = (function(superClass) {
    extend(MedicationAdministrationDosageComponent, superClass);

    function MedicationAdministrationDosageComponent(json) {
      this.json = json;
      MedicationAdministrationDosageComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The timing schedule for giving the medication to the patient.  This may be a single time point (using dateTime) or it may be a start and end dateTime (Period).
    @returns {Array} an array of {@link Date} objects
     */

    MedicationAdministrationDosageComponent.prototype.timingDateTime = function() {
      if (this.json['timingDateTime']) {
        return DT.DateTime.parse(this.json['timingDateTime']);
      }
    };


    /**
    The timing schedule for giving the medication to the patient.  This may be a single time point (using dateTime) or it may be a start and end dateTime (Period).
    @returns {Period}
     */

    MedicationAdministrationDosageComponent.prototype.timingPeriod = function() {
      if (this.json['timingPeriod']) {
        return new Period(this.json['timingPeriod']);
      }
    };


    /**
    If set to true or if specified as a CodeableConcept, indicates that the medication is only taken when needed within the specified schedule rather than at every scheduled dose.  If a CodeableConcept is present, it indicates the pre-condition for taking the Medication.
    @returns {Array} an array of {@link boolean} objects
     */

    MedicationAdministrationDosageComponent.prototype.asNeededBoolean = function() {
      return this.json['asNeededBoolean'];
    };


    /**
    If set to true or if specified as a CodeableConcept, indicates that the medication is only taken when needed within the specified schedule rather than at every scheduled dose.  If a CodeableConcept is present, it indicates the pre-condition for taking the Medication.
    @returns {CodeableConcept}
     */

    MedicationAdministrationDosageComponent.prototype.asNeededCodeableConcept = function() {
      if (this.json['asNeededCodeableConcept']) {
        return new CodeableConcept(this.json['asNeededCodeableConcept']);
      }
    };


    /**
    A coded specification of the anatomic site where the medication first entered the body.  E.g. "left arm".
    @returns {CodeableConcept}
     */

    MedicationAdministrationDosageComponent.prototype.site = function() {
      if (this.json['site']) {
        return new CodeableConcept(this.json['site']);
      }
    };


    /**
    A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.   E.g. topical, intravenous, etc.
    @returns {CodeableConcept}
     */

    MedicationAdministrationDosageComponent.prototype.route = function() {
      if (this.json['route']) {
        return new CodeableConcept(this.json['route']);
      }
    };


    /**
    A coded value indicating the method by which the medication was introduced into or onto the body. Most commonly used for injections.  Examples:  Slow Push; Deep IV.
    
    Terminologies used often pre-coordinate this term with the route and or form of administration.
    @returns {CodeableConcept}
     */

    MedicationAdministrationDosageComponent.prototype.method = function() {
      if (this.json['method']) {
        return new CodeableConcept(this.json['method']);
      }
    };


    /**
    The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.
    @returns {Quantity}
     */

    MedicationAdministrationDosageComponent.prototype.quantity = function() {
      if (this.json['quantity']) {
        return new Quantity(this.json['quantity']);
      }
    };


    /**
    Identifies the speed with which the medication was introduced into the patient. Typically the rate for an infusion e.g. 200ml in 2 hours.  May also expressed as a rate per unit of time such as 100ml per hour - the duration is then not specified, or is specified in the quantity.
    @returns {Ratio}
     */

    MedicationAdministrationDosageComponent.prototype.rate = function() {
      if (this.json['rate']) {
        return new Ratio(this.json['rate']);
      }
    };


    /**
    The maximum total quantity of a therapeutic substance that was administered to the patient over the specified period of time. E.g. 1000mg in 24 hours.
    @returns {Ratio}
     */

    MedicationAdministrationDosageComponent.prototype.maxDosePerPeriod = function() {
      if (this.json['maxDosePerPeriod']) {
        return new Ratio(this.json['maxDosePerPeriod']);
      }
    };

    return MedicationAdministrationDosageComponent;

  })(BackboneElement);


  /**
  Describes the event of a patient being given a dose of a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.
  
  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
  @class MedicationAdministration
  @exports MedicationAdministration as MedicationAdministration
   */

  MedicationAdministration = (function(superClass) {
    extend(MedicationAdministration, superClass);

    function MedicationAdministration(json) {
      this.json = json;
      MedicationAdministration.__super__.constructor.call(this, this.json);
    }


    /**
    External identifier - FHIR will generate its own internal IDs (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
    @returns {Array} an array of {@link Identifier} objects
     */

    MedicationAdministration.prototype.identifier = function() {
      var i, item, len, ref, results;
      if (this.json['identifier']) {
        ref = this.json['identifier'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Identifier(item));
        }
        return results;
      }
    };


    /**
    Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
    @returns {Array} an array of {@link String} objects
     */

    MedicationAdministration.prototype.status = function() {
      return this.json['status'];
    };


    /**
    The person or animal to whom the medication was given.
    @returns {Reference}
     */

    MedicationAdministration.prototype.patient = function() {
      if (this.json['patient']) {
        return new Reference(this.json['patient']);
      }
    };


    /**
    The individual who was responsible for giving the medication to the patient.
    @returns {Reference}
     */

    MedicationAdministration.prototype.practitioner = function() {
      if (this.json['practitioner']) {
        return new Reference(this.json['practitioner']);
      }
    };


    /**
    The visit or admission the or other contact between patient and health care provider the medication administration was performed as part of.
    @returns {Reference}
     */

    MedicationAdministration.prototype.encounter = function() {
      if (this.json['encounter']) {
        return new Reference(this.json['encounter']);
      }
    };


    /**
    The original request, instruction or authority to perform the administration.
    @returns {Reference}
     */

    MedicationAdministration.prototype.prescription = function() {
      if (this.json['prescription']) {
        return new Reference(this.json['prescription']);
      }
    };


    /**
    Set this to true if the record is saying that the medication was NOT administered.
    @returns {Array} an array of {@link boolean} objects
     */

    MedicationAdministration.prototype.wasNotGiven = function() {
      return this.json['wasNotGiven'];
    };


    /**
    A code indicating why the administration was not performed.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    MedicationAdministration.prototype.reasonNotGiven = function() {
      var i, item, len, ref, results;
      if (this.json['reasonNotGiven']) {
        ref = this.json['reasonNotGiven'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    An interval of time during which the administration took place.  For many administrations, such as swallowing a tablet the lower and upper values of the interval will be the same.
    @returns {Array} an array of {@link Date} objects
     */

    MedicationAdministration.prototype.effectiveTimeDateTime = function() {
      if (this.json['effectiveTimeDateTime']) {
        return DT.DateTime.parse(this.json['effectiveTimeDateTime']);
      }
    };


    /**
    An interval of time during which the administration took place.  For many administrations, such as swallowing a tablet the lower and upper values of the interval will be the same.
    @returns {Period}
     */

    MedicationAdministration.prototype.effectiveTimePeriod = function() {
      if (this.json['effectiveTimePeriod']) {
        return new Period(this.json['effectiveTimePeriod']);
      }
    };


    /**
    Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
    @returns {Reference}
     */

    MedicationAdministration.prototype.medication = function() {
      if (this.json['medication']) {
        return new Reference(this.json['medication']);
      }
    };


    /**
    The device used in administering the medication to the patient.  E.g. a particular infusion pump.
    @returns {Array} an array of {@link Reference} objects
     */

    MedicationAdministration.prototype.device = function() {
      var i, item, len, ref, results;
      if (this.json['device']) {
        ref = this.json['device'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Reference(item));
        }
        return results;
      }
    };


    /**
    Provides details of how much of the medication was administered.
    @returns {Array} an array of {@link MedicationAdministrationDosageComponent} objects
     */

    MedicationAdministration.prototype.dosage = function() {
      var i, item, len, ref, results;
      if (this.json['dosage']) {
        ref = this.json['dosage'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new MedicationAdministrationDosageComponent(item));
        }
        return results;
      }
    };

    return MedicationAdministration;

  })(DomainResource);

  module.exports.MedicationAdministration = MedicationAdministration;

}).call(this);

//# sourceMappingURL=medicationadministration.js.map