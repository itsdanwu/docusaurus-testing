---
id: pod-basics
title: What Are Pods?
---

##### Description of Metropolis's pods.

---


## Overview

Conceptually, a pod formalizes the individual identities and relationships between small groups of people into a distinct group or committee, often-times based on expertise or project.

## Gnosis Safe
Underneath the lightweight permissions layer of an Metropolis pod lives a [Gnosis Safe multi-sig wallet](https://gnosis-safe.io/). The Gnosis Safe can be leveraged by the pod to store and manage all of the digital assets they may need to payout service providers, contributors, grants, etc. 

When pod members are added to or removed from the pod, they are also being added and removed from the underlying Gnosis Safe.

## Pod Membership NFTs
A traditional multi-sig wallet is like the lock to your house; it is cut to specific keys that control access. In order to change the keys, you need to change the lock. 

In the case of pods, access to a pod is authorized through membership NFTs. These NFTs act like an office keycard. When you swipe into your office, your keycard is validated against a set of permissions to see whether or not you have access. Changing key cards is as simple as updating office access permissions. 

If you want to add a new pod member, you print them a new key card. If you want to revoke access, you burn their key card. As a member of a pod, your membership NFT is completely public for others to identify your relative access. 

## Pod ENS
When you create a pod, you determine its name (e.g., metropolis-builders). This will be appended with ".pod.xyz" and registered with the [Ethereum Name Service](https://ens.domains). As your pod interacts with various web3 apps, you will be the beneficiary of seeing the human-readable pod name instead of a wallet address.

## Pod URL
Your full pod ENS name (e.g., metropolis-builders.pod.xyz) will also serve as your pod URL. This can serve as the "home page" for your pod and provide community members and partners visibility into who the pod members are. See the [Metropolis Core pod page](https://orca-core.pod.xyz) as an example.