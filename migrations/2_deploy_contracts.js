var patient = artifacts.require("./patient.sol");

module.exports = function(deployer) {
  deployer.deploy(patient);
};
