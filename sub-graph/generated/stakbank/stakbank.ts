// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PoolCreated extends ethereum.Event {
  get params(): PoolCreated__Params {
    return new PoolCreated__Params(this);
  }
}

export class PoolCreated__Params {
  _event: PoolCreated;

  constructor(event: PoolCreated) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get lpToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get rewardToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RewardAdded extends ethereum.Event {
  get params(): RewardAdded__Params {
    return new RewardAdded__Params(this);
  }
}

export class RewardAdded__Params {
  _event: RewardAdded;

  constructor(event: RewardAdded) {
    this._event = event;
  }

  get reward(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RewardPaid extends ethereum.Event {
  get params(): RewardPaid__Params {
    return new RewardPaid__Params(this);
  }
}

export class RewardPaid__Params {
  _event: RewardPaid;

  constructor(event: RewardPaid) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get reward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Staked extends ethereum.Event {
  get params(): Staked__Params {
    return new Staked__Params(this);
  }
}

export class Staked__Params {
  _event: Staked;

  constructor(event: Staked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class stakbank__userInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class stakbank extends ethereum.SmartContract {
  static bind(address: Address): stakbank {
    return new stakbank("stakbank", address);
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  earned(account: Address): BigInt {
    let result = super.call("earned", "earned(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_earned(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("earned", "earned(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMultiplier(account: Address): BigInt {
    let result = super.call(
      "getMultiplier",
      "getMultiplier(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_getMultiplier(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMultiplier",
      "getMultiplier(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRemainingTotalReward(): BigInt {
    let result = super.call(
      "getRemainingTotalReward",
      "getRemainingTotalReward():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getRemainingTotalReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRemainingTotalReward",
      "getRemainingTotalReward():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastTimeRewardApplicable(): BigInt {
    let result = super.call(
      "lastTimeRewardApplicable",
      "lastTimeRewardApplicable():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastTimeRewardApplicable(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastTimeRewardApplicable",
      "lastTimeRewardApplicable():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastUpdateTime(): BigInt {
    let result = super.call("lastUpdateTime", "lastUpdateTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastUpdateTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastUpdateTime",
      "lastUpdateTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lpToken(): Address {
    let result = super.call("lpToken", "lpToken():(address)", []);

    return result[0].toAddress();
  }

  try_lpToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("lpToken", "lpToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  periodFinish(): BigInt {
    let result = super.call("periodFinish", "periodFinish():(uint256)", []);

    return result[0].toBigInt();
  }

  try_periodFinish(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("periodFinish", "periodFinish():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerToken(): BigInt {
    let result = super.call("rewardPerToken", "rewardPerToken():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardPerToken(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerToken",
      "rewardPerToken():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerTokenStored(): BigInt {
    let result = super.call(
      "rewardPerTokenStored",
      "rewardPerTokenStored():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_rewardPerTokenStored(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerTokenStored",
      "rewardPerTokenStored():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardRate(): BigInt {
    let result = super.call("rewardRate", "rewardRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rewardRate", "rewardRate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardToken(): Address {
    let result = super.call("rewardToken", "rewardToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardToken", "rewardToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalReward(): BigInt {
    let result = super.call("totalReward", "totalReward():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalReward", "totalReward():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userInfo(param0: Address): stakbank__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new stakbank__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_userInfo(param0: Address): ethereum.CallResult<stakbank__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new stakbank__userInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CollectRemainingRewardsCall extends ethereum.Call {
  get inputs(): CollectRemainingRewardsCall__Inputs {
    return new CollectRemainingRewardsCall__Inputs(this);
  }

  get outputs(): CollectRemainingRewardsCall__Outputs {
    return new CollectRemainingRewardsCall__Outputs(this);
  }
}

export class CollectRemainingRewardsCall__Inputs {
  _call: CollectRemainingRewardsCall;

  constructor(call: CollectRemainingRewardsCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CollectRemainingRewardsCall__Outputs {
  _call: CollectRemainingRewardsCall;

  constructor(call: CollectRemainingRewardsCall) {
    this._call = call;
  }
}

export class ExitCall extends ethereum.Call {
  get inputs(): ExitCall__Inputs {
    return new ExitCall__Inputs(this);
  }

  get outputs(): ExitCall__Outputs {
    return new ExitCall__Outputs(this);
  }
}

export class ExitCall__Inputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }
}

export class ExitCall__Outputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }
}

export class GetRewardCall extends ethereum.Call {
  get inputs(): GetRewardCall__Inputs {
    return new GetRewardCall__Inputs(this);
  }

  get outputs(): GetRewardCall__Outputs {
    return new GetRewardCall__Outputs(this);
  }
}

export class GetRewardCall__Inputs {
  _call: GetRewardCall;

  constructor(call: GetRewardCall) {
    this._call = call;
  }
}

export class GetRewardCall__Outputs {
  _call: GetRewardCall;

  constructor(call: GetRewardCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _lpToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _rewardToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class NotifyRewardAmountCall extends ethereum.Call {
  get inputs(): NotifyRewardAmountCall__Inputs {
    return new NotifyRewardAmountCall__Inputs(this);
  }

  get outputs(): NotifyRewardAmountCall__Outputs {
    return new NotifyRewardAmountCall__Outputs(this);
  }
}

export class NotifyRewardAmountCall__Inputs {
  _call: NotifyRewardAmountCall;

  constructor(call: NotifyRewardAmountCall) {
    this._call = call;
  }

  get reward(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get duration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class NotifyRewardAmountCall__Outputs {
  _call: NotifyRewardAmountCall;

  constructor(call: NotifyRewardAmountCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
