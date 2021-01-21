const fs = require('fs');
const Oracle = artifacts.require("Oracle");
const FluxAggregator = artifacts.require("FluxAggregator");
const EACAggregatorProxy = artifacts.require("EACAggregatorProxy");
const AccessControlledAggregator = artifacts.require(
  "AccessControlledAggregator"
);
const deployed_addresses_filename = "address.txt";
const DeployedAddresses = require("./" + deployed_addresses_filename);
module.exports = function (deployer) {
  let link = process.env.LINK_TESTNET;
  let paymentAmount = 1;
  let timeout = 100;
  let validator = process.env.VALIDATOR;
  let min = 0;
  let max = 1000;
  let decimals = 4;
  let desc = "some desc";
//   deployer.deploy(Oracle, link);
//   deployer.deploy(
//     FluxAggregator,
//     link,
//     paymentAmount,
//     timeout,
//     validator,
//     min,
//     max,
//     decimals,
//     desc
//   );
  deployer
    .deploy(
      AccessControlledAggregator,
      link,
      paymentAmount,
      timeout,
      validator,
      min,
      max,
      decimals,
      desc
    )
    .then(async function() {
        DeployedAddresses.Aggregator = (await AccessControlledAggregator.deployed()).address;
      });
    fs.writeFileSync("./migrations/" + deployed_addresses_filename, JSON.stringify(DeployedAddresses, null, 2));
};
