---
id: pod-roles-and-memberhsip
title: Pod Roles and Membership
---
##### Defining roles and membership structures of pods.
---
Pod roles are one of the most important concepts of Metropolis. Managers are the primary unique role that can be assigned to various actors within Metropolis. Members are the entities that can make up pods.

## Managers

A pod **manager** is similar to a landlord in that they have executive power to change membership requirements and evict bad actors, but minimal power to control day-to-day actions. 

To summarize: 

* Pod managers have unilateral rights to add and remove members of an agent pod. 
* A manager can also be a member of a child pod. In this situation, the manager is a member and can vote on membership/asset management proposals.
* Pods can only have a single manager; this is also an optional role. In the case where no manager exists, all actions (membership management, etc) will be put up for approval by pod members. 
* Managers can be assigned during the creation of a pod or anytime afterwards.
* A pod can serve as the manager of another pod. 
* A smart contract can serve as the manager of a pod.

## Members

Pods consist of **members**, and every member of a pod has the same amount of power to enact change - one member equals one vote. While an infinite number of memberships is technically supported, pods are most effective when used with small working groups (5-10 people).

To summarize:

* Pod members must create proposals that meet an approval threshold in order to add/remove members, manage assets, etc.
* Pod memberships are represented as ERC-1155 tokens.
* Pod membership NFTs can be transferred by the holder.
* Pod members can be added during the creation of a pod or anytime afterwards.
* Pod members can be EOAs or other pods.

### Member Pods

A pod can be a member of another pod - we refer to these as member pods. These nested pods have the same ability to create and approve proposals as other pod members. 

Key points:
* When a pod is a member of another pod it is referred to as a member pod. 
* The pod it is a member of could be referred to as the parent pod.
* Member pods have the ability cast an approval/reject decision for proposals of their parent pod, just as any normal member would. In order for a member pod to interact with parent pod proposals it must create its own proposal, referred to as a member pod proposal. Once approve or reject quorum is met for a member pod proposal, the decision is relayed to the parent proposal level.