# For backwards compatibility until FHIR models change references
DT = require "./datatypes/datatypes"

# FIXME this should be changed to use the export * from "./datatypes/datatypes" syntax
module.exports.logic = DT.logic
module.exports.clinical = DT.clinical
module.exports.uncertainty = DT.uncertainty
module.exports.datetime = DT.datetime
module.exports.interval = DT.interval
module.exports.quantity = DT.quantity
module.exports.ratio = DT.ratio
