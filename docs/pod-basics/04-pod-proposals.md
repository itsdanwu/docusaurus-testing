---
id: pod-transactions
title: Pod Transactions
---
##### Information on Metropolis transactions.
---

## Overview

Transactions are the fundamental objects that drive productive activity for pods. Pod transactions can include anything from adding pod members, removing pod members, managing Gnosis Safe assets or conducting any other on-chain action as a pod.

Technically, all pod transactions are managed by Gnosis Safe's transaction service.

## Approvals, rejections and execution
For many transactions, approvals and rejections are collected as [gasless off-chain signatures](https://help.gnosis-safe.io/en/articles/3940875-gas-less-signatures) and stored in Gnosis Safe's transaction service. Once the number of approvals/rejections collected meets the [confirmation threshold](#confirmation-threshold), any pod member can execute the transaction and send it on-chain.

## Viewing proposals
All pod proposals can be viewed, approved, rejected and executed within the Metropolis UI. This includes any transaction that is initiated from outside the Metropolis UI (e.g., Snapshot vote as a pod).

In addition, the Gnosis Safe UI can be used to sign and execute any pod transactions, but does not offer as intuitive support for member pod proposal approval/rejection. 

## Confirmation threshold
The confirmation threshold is the number of signatures required to execute a transaction and send it on-chain. 

## Proposals vs. direct execution

For any Metropolis pod management related action, it's important to understand when a proposal is needed versus when a transaction can be executed directly.

In general, if you are a manager EOA or manager contract (e.g., not an pod manager) you can execute any pod management activity directly without requiring a proposal.

| Persona in relation to pod being managed      | Direct execution? | 
|-----------------------------------------------|-------------------|
| Individual user manager                         |     Yes           |
| Contract manager (e.g., Governor Bravo)         |     Yes           |
| Manager pod                                     |     No            |
| Regular pod member                            |     No            |
| Member pod member                                 |     No            |