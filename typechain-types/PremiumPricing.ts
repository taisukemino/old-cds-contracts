/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface PremiumPricingInterface extends utils.Interface {
  contractName: "PremiumPricing";
  functions: {
    "coveragePool()": FunctionFragment;
    "curvature()": FunctionFragment;
    "minimumCoverage()": FunctionFragment;
    "minimumRiskFactor()": FunctionFragment;
    "owner()": FunctionFragment;
    "referenceObligation()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setCurvature(uint256)": FunctionFragment;
    "setMinimumCoverage(uint256)": FunctionFragment;
    "setMinimumRiskFactor(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "coveragePool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "curvature", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minimumCoverage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumRiskFactor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "referenceObligation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCurvature",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumCoverage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumRiskFactor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "coveragePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "curvature", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumCoverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumRiskFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "referenceObligation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurvature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumCoverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumRiskFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PremiumPricingInitialized(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PremiumPricingInitialized"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PremiumPricingInitializedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  {
    _minimumCoverage: BigNumber;
    _curvature: BigNumber;
    _minimumRiskFactor: BigNumber;
  }
>;

export type PremiumPricingInitializedEventFilter =
  TypedEventFilter<PremiumPricingInitializedEvent>;

export interface PremiumPricing extends BaseContract {
  contractName: "PremiumPricing";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PremiumPricingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    coveragePool(overrides?: CallOverrides): Promise<[string]>;

    curvature(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumCoverage(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumRiskFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    referenceObligation(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCurvature(
      _curvature: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinimumCoverage(
      _minimumCoverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinimumRiskFactor(
      _minimumRiskFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  coveragePool(overrides?: CallOverrides): Promise<string>;

  curvature(overrides?: CallOverrides): Promise<BigNumber>;

  minimumCoverage(overrides?: CallOverrides): Promise<BigNumber>;

  minimumRiskFactor(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  referenceObligation(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCurvature(
    _curvature: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinimumCoverage(
    _minimumCoverage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinimumRiskFactor(
    _minimumRiskFactor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    coveragePool(overrides?: CallOverrides): Promise<string>;

    curvature(overrides?: CallOverrides): Promise<BigNumber>;

    minimumCoverage(overrides?: CallOverrides): Promise<BigNumber>;

    minimumRiskFactor(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    referenceObligation(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setCurvature(
      _curvature: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumCoverage(
      _minimumCoverage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumRiskFactor(
      _minimumRiskFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "PremiumPricingInitialized(uint256,uint256,uint256)"(
      _minimumCoverage?: null,
      _curvature?: null,
      _minimumRiskFactor?: null
    ): PremiumPricingInitializedEventFilter;
    PremiumPricingInitialized(
      _minimumCoverage?: null,
      _curvature?: null,
      _minimumRiskFactor?: null
    ): PremiumPricingInitializedEventFilter;
  };

  estimateGas: {
    coveragePool(overrides?: CallOverrides): Promise<BigNumber>;

    curvature(overrides?: CallOverrides): Promise<BigNumber>;

    minimumCoverage(overrides?: CallOverrides): Promise<BigNumber>;

    minimumRiskFactor(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    referenceObligation(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCurvature(
      _curvature: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinimumCoverage(
      _minimumCoverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinimumRiskFactor(
      _minimumRiskFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    coveragePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    curvature(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumCoverage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumRiskFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referenceObligation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCurvature(
      _curvature: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumCoverage(
      _minimumCoverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumRiskFactor(
      _minimumRiskFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
