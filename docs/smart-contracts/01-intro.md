---
id: metropolis-contracts
title: Introduction
---

##### An introduction to the Metropolis smart contracts.

---

Metropolis is a lightweight permissions and membership management protocol that can be connected to Gnosis Safe through the `SafeTeller.sol` safe module.

Each membership group within Metropolis is referred to as a pod and pod memberships are represented by ERC1155 membership tokens.

## Core Addresses

Source code for all Metropolis contracts can be found in this [GitHub repository](https://github.com/orcaprotocol/contracts).


### Mainnet Deployments

##### Ethereum - 1
| **Contract**            | **Address**                                |
| ------------            | ------------------------------------------ |
| MemberToken              | 0x0762aa185b6ed2dca77945ebe92de705e0c37ae3 |
| ControllerV1.4            | 0x4C98aF741e352C6551BfF9509b3f8ca9Dd4E6397  |

### Testnet Deployments
##### Rinkeby - 4
| **Contract**            | **Address**                                |
| ------------            | ------------------------------------------ |
| MemberToken              | 0x8DC995523c9c1C6180c50d0CE0733621E63ef8E1  |
| ControllerV1.4             | 0x0C34378834653Be07746BC568b330FbEC2E08a68  |

## Getting Started

### Library Usage
The NPM package includes some convenience functions for fetching deployments:

```js
import { getDeployment, getControllerByAddress } from "@orcaprotocol/contracts";

// Fetches the latest Controller from the mainnet
const controller = getDeployment("ControllerLatest", 1);
// Fetching and instantiating the MemberToken contract
const memberTokenDeployment = getDeployment("MemberToken", network);
const MemberToken = new ethers.Contract(memberTokenDeployment.address, memberTokenDeployment.abi, provider);

// You can also fetch the Controller version by the address of the deployment.
// This is useful for fetching Controllers from Pods, as different Pod versions
// have different Controllers

// The Controller address tracked on the MemberToken
const controllerAddress = await MemberToken.memberController(id);
if (controllerAddress === ethers.constants.AddressZero) {
  throw new Error("Pod ID was not registered on Controller");
}

const controllerDeployment = getControllerByAddress(controllerAddress, network);
const Controller = new ethers.Contract(controllerDeployment.address, controllerDeployment.abi, provider);
```

###

## Development

### Getting Started

Run `npm install`.

Install [Foundry](https://github.com/foundry-rs/foundry/blob/master/README.md#installation), then run `forge install`.

### Testing

Run `npm run test` to run the test suite

Run `forge test` to run the test suite

Run `npm run coverage` to print a coverage report

## Deployment

### Pre-Reqs

You must create `.env` in the product root, and it should look like this:

```
// This should be your private key
PRIVATE_KEY = ""

COINMARKETCAP_KEY= ""

INFURA_API_KEY= ""
```

### Deploying

You can run `npx hardhat --network rinkeby deploy` to deploy contracts to the testnet. This will deploy all our contracts and connect them to the official Gnosis Safe contracts.

Run `npx hardhat etherscan-verify` to verify contracts on etherscan

Run `npx hardhat tenderly-verify` to verify contracts on tenderly

## Architecture

The high level architecture of Metropolis is a permission wrapper around a gnosis safe that uses 1155 NFT membership to manage access.

A Gnosis Safe wrapped by Metropolis is referred to as a pod.

### Member Token

The `MemberToken` is an 1155 token contract that represents manages the memberships of all pods.

Each pod is represented by a unique 1155 token `id`, which correspond to its set of member NFTs.

Each pod also is tied to a version of the `Controller`, for future upgradeability.

On any token event the `_beforeTokenTransfer` hook will call the `beforeTokenTransfer` function of the pod's version of `Controller` to perform validation and manage side effects before the token is allowed to transfer.

### Controller

The `Controller` manages the creation of pods as well as managing their membership validation and side effects.

When the `MemberToken` calls the `beforeTokenTransfer` function, the `Controller` will validate the action with the `RuleManager` to verify the membership change is permissible.

If the event is permissible the `Controller` will call the `SafeTeller` to handle the side effects of the membership change.

<!---  Commenting out as these are not accessible by public

### RuleManager

The `RuleManager` manages the rules for multiple pods, each rule is an arbitrary transaction that returns `true` or `false` based on a member's compliance at transfer time

### SafeTeller

The `SafeTeller` manages the side effects for multiple pods, before a valid token transfer the `SafeTeller` will perform owner updates to the pod's safe 
-->