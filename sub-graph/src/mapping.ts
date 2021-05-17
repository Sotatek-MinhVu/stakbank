import { BigInt } from "@graphprotocol/graph-ts"
import {
  stakbank,
  OwnershipTransferred,
  Paused,
  PoolCreated,
  RewardAdded,
  RewardPaid,
  Staked,
  Unpaused,
  Withdrawn
} from "../generated/stakbank/stakbank"
import { StakeEntity, WithdrawnEntity, RewardPaidEntity, RewardAddedEntity, PoolCreatedEntity } from "../generated/schema"

export function handlePaused(event: Paused): void { }

export function handlePoolCreated(event: PoolCreated): void { 
  let id = event.transaction.hash.toHexString();
  let poolCreated = PoolCreatedEntity.load(id);
  if (poolCreated === null) {
    poolCreated = new PoolCreatedEntity(id);
  }
  poolCreated.lpToken = event.params.lpToken;
  poolCreated.name = event.params.name;
  poolCreated.rewardToken = event.params.rewardToken;

  poolCreated.save();
}

export function handleRewardAdded(event: RewardAdded): void { 
  let id = event.transaction.hash.toHexString();
  let rewardAdded = RewardAddedEntity.load(id);
  if (rewardAdded === null) {
    rewardAdded = new RewardAddedEntity(id);
  }
  rewardAdded.reward = event.params.reward;

  rewardAdded.save();
}

export function handleRewardPaid(event: RewardPaid): void { 
  let id = event.transaction.hash.toHexString();
  let rewardPaid = RewardPaidEntity.load(id);
  if (rewardPaid === null) {
    rewardPaid = new RewardPaidEntity(id);
  }
  rewardPaid.reward = event.params.reward;
  rewardPaid.user = event.params.user;

  rewardPaid.save();
}

export function handleStaked(event: Staked): void {
  let id = event.transaction.hash.toHexString();
  let stake = StakeEntity.load(id);
  if (stake === null) {
    stake = new StakeEntity(id);
  }
  stake.amount = event.params.amount;
  stake.user = event.params.user;

  stake.save();
}

export function handleUnpaused(event: Unpaused): void { }

export function handleWithdrawn(event: Withdrawn): void {
  let id = event.transaction.hash.toHexString();
  let withdrawn = WithdrawnEntity.load(id);
  if (withdrawn === null) {
    withdrawn = new WithdrawnEntity(id);
  }
  withdrawn.amount = event.params.amount;
  withdrawn.user = event.params.user;

  withdrawn.save();
 }
