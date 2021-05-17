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
import { StakeEntity } from "../generated/schema"

export function handlePaused(event: Paused): void {}

export function handlePoolCreated(event: PoolCreated): void {}

export function handleRewardAdded(event: RewardAdded): void {}

export function handleRewardPaid(event: RewardPaid): void {}

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

export function handleUnpaused(event: Unpaused): void {}

export function handleWithdrawn(event: Withdrawn): void {}
