---
id: transfer-membership
title: Transfer Membership or Manager Keys
---
##### How to transfer pod membership or manager privileges via the Metropolis SDK

---

## Transfer pod membership

Individual users and member pods can transfer their pod memberships.

An EOA can transfer their membership with the following function:

```js
const pod = await getPod('0x123...456');

// This signer is the address giving up membership
await pod.transferMembership(
    fromAddress, // Address to transfer from
    toAddress, // Address to transfer to
    signer
);
```

If a member pod wants to transfer their membership you can call the below function. It will create a proposal that the member pod members must approve:

```js
const subPod = await getPod('0x123...456');

// The signer is a member pod member of the member pod transferring its membership
await subPod.propose(await subPod.transferMembership(fromAddress, toAddress), signer)
```

## Transfer manager privileges

Individual users managers or manager pods can transfer their manager privileges.

An EOA manager can transfer their manager role with the following function:

```js
const pod = await getPod('0x123...456');

// This signer must be a manager of a given pod
await pod.transferAdmin(toAddress, signer);
```

If a pod is a manager of another pod and wants to transfer their manager privileges, they must create a proposal that requires approval from said pod:

```js
const adminPod = await getPod('0x123...456');
const agentPod = await getPod('0x123...789');

// This signer must be a member of the manager pod
await adminPod.propose(await agentPod.transferAdmin(toAddress), signer); 
```

Once the proposal is created, users can approve or reject within the Metropolis web app or you can build an experience to approve, reject and execute proposals through the SDK.