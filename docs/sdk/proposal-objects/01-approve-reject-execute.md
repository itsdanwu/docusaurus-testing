---
id: approve-reject-execute
title: Approve Reject and Execute Proposals
---
##### How to approve, reject and execute proposals.

---

## Approving and rejecting proposals

Once proposals are created, eligible EOA pod members can either decide to approve or reject the proposal:

```js
// Fetches pod object with which you want to fetch, approve or reject proposals from
const pod = await getPod(podAddress);

//Returns an array of proposal objects in reverse chron order
const proposals = await pod.getProposals();

// Approves proposal. Signer must be a pod member
await proposals[0].approve(signer);

// Rejects proposal. Signer must be a pod member
await proposals[0].reject(signer);
```

### Approving and rejecting from member pods

Pods can also be members of other pods, referred to as member pods. Member pods can cast their decision to approve or reject a super proposal with the following:

```js
  // Fetches pod object with which you want to fetch, approve or reject proposals from
  const subPod = await getPod(podAddress);

  //Returns an array of proposal objects in reverse chron order
  const proposals = await pod.getProposals();
  const superProposal = proposals[0];

  // Approves proposal. Signer must be a sub pod member. Will create a sub proposal if one does not exist.
  await subPod.propose(superProposal, signer);

  // Rejects proposal. Signer must be a sub pod member. Will create a sub proposal if one does not exist.
  let rejection; 

  rejection = await subPod.propose(superProposal, signer);
  await rejection.reject(signer);
  ```

## Executing proposals

Once a given proposal has reached quorum threshold for either approval or rejection, the proposal must be executed. 

You can count the number of addresses that have either approved or rejected the proposal and compare to the threshold count. If it meets threshold, you can execute the proposal

```js
// Fetches pod object with which you want to fetch, approve or reject proposals from
const pod = await getPod(podAddress);

//Returns an array of proposal objects in reverse chron order
const proposals = await pod.getProposals();

// Execute approved proposal. Signer must be a pod member
await proposals[0].executeApprove(signer);

// Execute rejected proposal. Signer must be a pod member
await proposals[0].executeReject(signer);
```