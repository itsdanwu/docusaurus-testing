---
id: pod-roles-and-memberhsip
title: Pod Roles and Membership
---

Two of the most important concepts of Orca Protocol are:

* **Pod Roles** - the permissions that can be assigned to EOAs and pods leveraging Orca Protocol. The two primary roles are admins and agents.
* **Pod Membership** - the entities that can become members of pods and resulting relationships.

## Pod Roles
### Admins and agents
A **pod admin** is similar to a landlord in that they have executive power to change membership requirements and evict bad actors, but minimal power to control day-to-day actions. 

The pod that an Orca Protocol admin governs is referred to as an **agent pod**.  

To summarize: 

* Pod admins have unilateral rights to add/remove members and update membership requirements of an agent pod. 
* An admin can also be a member of an agent pod. In this situation, the admin is a member and can vote on membership/asset management proposals.
* Pods can only have (but do not need) an admin. In the case where no admin exists, all actions (membership management, etc) will be put up for vote by pod members. 
* Admins can be assigned during the creation of a pod or anytime afterwards.
* A pod can serve as the admin of another pod. 
* A smart contract can serve as the admin of a pod.

## Pod Membership

Pods consist of members, and every member of a pod has the same amount of power to enact change. While an infinite number of memberships is technically supported, pods are intended to be used in small working groups (5-10 people).

To summarize:

* Pod members must create proposals that meet quorum in order to add/remove members, manage assets and update membership requirements of a pod.
* Pod memberships are represented as ERC-1155 tokens.
* Pod membership NFTs can be transferred as long as the recipient meets membership requirements of pod.
* Pod members can be added during the creation of a pod or anytime afterwards.
* Pod members can be EOAs or other pods.

### Pods as members

A pod can be a member of another pod. These pods have the same ability to create and approve proposals as other pod members. 

Key points:
* When a pod is a member of another pod it is referred to as a sub pod. 
* The pod it is a member of is referred to as a super pod. 
* Sub pods have the ability cast an approval/reject decision for proposals of their super pod, just as any normal member would. In order for a sub pod to interact with super pod proposals it must create its own proposal, referred to as a sub proposal. Once approve or reject quorum is met for a sub proposal, the decision is relayed to the super proposal level.