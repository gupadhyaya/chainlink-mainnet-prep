const EACAggregatorProxy = artifacts.require("EACAggregatorProxy");
const DeployedAddresses = require("./" + "address.txt");
module.exports = function (deployer) {
  deployer.deploy(
    EACAggregatorProxy,
    DeployedAddresses.Aggregator,
    DeployedAddresses.Aggregator
  );
};
