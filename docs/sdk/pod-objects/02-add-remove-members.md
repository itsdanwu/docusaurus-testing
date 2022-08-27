---
id: add-remove-members  
title: Add and Remove Members
---
##### How to add and remove members from a pod via the Metropolis SDK.

---

Pod memberships can be minted or burned in two ways: either directly without requiring approval from a pod or through a proposal reaching approval threshold. 



If you are an of the initiating address in relation to the impacted pod will determine whether mint/burn actions occur directly or through proposal. 
Pod members are managed via the MemberToken contract. The Pod object provides several methods to interact with this contract.

## Add/remove members directly without proposal
### Mint and burn memberships as a manager EOA/contract of a pod
Only EOAs or contracts (e.g., a timelock contract) that have been assigned a manager role for a pod can mint or burn members directly (without proposal) via the mintMember() and burnMember() functions. These functions will call the MemberToken contract directly and create a transaction.

```js
const pod = await getPod(podAddress);

// This signer must be the manager of the pod.
await pod.mintMember(newMember, signer);
await pod.burnMember(memberToBurn, signer);
```

## Add/remove members through proposal

### Propose to mint and burn members as a member EOA of a pod

Unlike pod managers, regular pod members do not have privileges to directly mint or burn pod memberships. All mint/burn actions must be submitted as a proposal for the pod to approve. Once the proposal has reached quorum threshold, the mint or burn function will be called.

Only members on a given pod can propose to mint or burn members for the pod. 

As a member EOA of a pod, you can propose to mint or burn memberships with the following:

```js
const pod = await getPod(podAddress);

// Signer must be a member of the pod.
await pod.propose(await pod.mintMember(newMember), signer);
await pod.propose(await pod.burnMember(memberToBurn), signer);
```

### Propose to mint and burn members as a manager pod or member pod

#### Manager pods

Whole pods can be designated as managers of other pods.

However, unlike manager EOAs/contracts that can directly mint or burn memberships of a pod, manager pods require pod approval before they can mint or burn memberships of any pods they are a manager of. 

You can propose to mint or burn memberships as a manager pod with the following:

```js
// This will create a proposal on the manager pod to mint a new member to our pod.
// Signer must be a member of adminPod
await adminPod.propose(await pod.mintMember(newMember, signer);


// This will create a proposal on the manager pod to burn a member from our pod
// Signer must be a member of adminPod
await adminPod.propose(await pod.burnMember(memberToBurn, signer);
```

Once the proposal is created, users can approve or reject within the Metropolis web app or you can build an experience to approve, reject and execute proposals through the SDK. 


#### Member Pods

Any pod that is a member of another pod is a member pod. Our "Round Table" and "High Council" models on our Pod Configurations page show examples of member pods.

Member pods can submit a proposal to remove a member of the pod they are a member of (parent pod). In this scenario, a 1) super proposal is created for all parent pod members (including other member pods) to vote on.

You can propose to mint or burn memberships as a member pod with the following:

```js
await subPod.propose(
  // Create the super proposal from the member pod.
  await pod.propose(await pod.mintMember(newMember), subPod.safe),
  address, // Creating the sub proposal from the wallet address.
);

await subPod.propose(
  // Create the super proposal from the member pod.
  await pod.propose(await pod.burnMember(memberToBurn), subPod.safe),
  address, // Creating the sub proposal from the wallet address.
);
```

Once the proposal is created, users can approve or reject within the Metropolis web app or you can build an experience to approve, reject and execute proposals through the SDK. 
