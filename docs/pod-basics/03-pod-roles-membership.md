---
id: pod-roles-and-memberhsip
title: Pod Roles and Membership
---
##### Defining roles and membership structures of pods.
---

Two of the most important concepts of Metropolis are:

* **Pod Roles** - the permissions that can be assigned to EOAs and pods leveraging Metropolis.
* **Admins** are the primary unique role that can be assigned to various actors within Metropolis.
* **Pod Memberships** - the entities that can become members of pods and resulting relationships.

## Pod Roles
### Admins
A **pod admin** is similar to a landlord in that they have executive power to change membership requirements and evict bad actors, but minimal power to control day-to-day actions. 

The pod that an Metropolis admin governs can be referred to as an **agent pod**.  

To summarize: 

* Pod admins have unilateral rights to add and remove members of an agent pod. 
* An admin can also be a member of an agent pod. In this situation, the admin is a member and can vote on membership/asset management proposals.
* Pods can only have (but do not need) an admin. In the case where no admin exists, all actions (membership management, etc) will be put up for approval by pod members. 
* Admins can be assigned during the creation of a pod or anytime afterwards.
* A pod can serve as the admin of another pod. 
* A smart contract can serve as the admin of a pod.

## Pod Membership

Pods consist of members, and every member of a pod has the same amount of power to enact change. While an infinite number of memberships is technically supported, pods are intended to be used in small working groups (5-10 people).

To summarize:

* Pod members must create proposals that meet an approval threshold in order to add/remove members, manage assets, etc.
* Pod memberships are represented as ERC-1155 tokens.
* Pod membership NFTs can be transferred.
* Pod members can be added during the creation of a pod or anytime afterwards.
* Pod members can be EOAs or other pods.

### Subpods

A pod can be a member of another pod - we refer to these as subpods. These pods have the same ability to create and approve proposals as other pod members. 

Key points:
* When a pod is a member of another pod it is referred to as a subpod. 
* The pod it is a member of is referred to as a superpod. 
* Subpods have the ability cast an approval/reject decision for proposals of their super pod, just as any normal member would. In order for a subpod to interact with super pod proposals it must create its own proposal, referred to as a sub proposal. Once approve or reject quorum is met for a sub proposal, the decision is relayed to the super proposal level.