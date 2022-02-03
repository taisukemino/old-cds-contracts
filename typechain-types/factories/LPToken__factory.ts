/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LPToken, LPTokenInterface } from "../LPToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "LPTokenInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c5838038062000c588339810160408190526200003491620001e6565b8151829082906200004d906003906020850190620000b7565b50805162000063906004906020840190620000b7565b50506005805460ff19166012179055506040517f173f43cc5ceabd08f60e00cb67c52f87a33ba8ebe1b8dc75471f876b8c16e3c790620000a790849084906200027b565b60405180910390a150506200032a565b828054620000c590620002d7565b90600052602060002090601f016020900481019282620000e9576000855562000134565b82601f106200010457805160ff191683800117855562000134565b8280016001018555821562000134579182015b828111156200013457825182559160200191906001019062000117565b506200014292915062000146565b5090565b5b8082111562000142576000815560010162000147565b600082601f8301126200016e578081fd5b81516001600160401b03808211156200018b576200018b62000314565b604051601f8301601f191681016020018281118282101715620001b257620001b262000314565b604052828152848301602001861015620001ca578384fd5b620001dd836020830160208801620002a4565b95945050505050565b60008060408385031215620001f9578182fd5b82516001600160401b038082111562000210578384fd5b6200021e868387016200015d565b9350602085015191508082111562000234578283fd5b5062000243858286016200015d565b9150509250929050565b6000815180845262000267816020860160208601620002a4565b601f01601f19169290920160200192915050565b6000604082526200029060408301856200024d565b8281036020840152620001dd81856200024d565b60005b83811015620002c1578181015183820152602001620002a7565b83811115620002d1576000848401525b50505050565b600281046001821680620002ec57607f821691505b602082108114156200030e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61091e806200033a6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610177578063a9059cbb1461018a578063dd62ed3e1461019d576100c9565b8063395093511461014957806370a082311461015c57806395d89b411461016f576100c9565b806318160ddd116100b257806318160ddd1461010c57806323b872dd14610121578063313ce56714610134576100c9565b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101b0565b6040516100e3919061068a565b60405180910390f35b6100ff6100fa366004610656565b610242565b6040516100e3919061067f565b61011461025f565b6040516100e39190610851565b6100ff61012f36600461061b565b610265565b61013c6102da565b6040516100e3919061085a565b6100ff610157366004610656565b6102e3565b61011461016a3660046105c8565b610332565b6100d6610351565b6100ff610185366004610656565b610360565b6100ff610198366004610656565b6103af565b6101146101ab3660046105e9565b6103c3565b6060600380546101bf90610897565b80601f01602080910402602001604051908101604052809291908181526020018280546101eb90610897565b80156102385780601f1061020d57610100808354040283529160200191610238565b820191906000526020600020905b81548152906001019060200180831161021b57829003601f168201915b5050505050905090565b600061025661024f6103ee565b84846103f2565b50600192915050565b60025490565b60006102728484846104af565b6102d08461027e6103ee565b6001600160a01b038716600090815260016020526040812086916102a06103ee565b6001600160a01b03166001600160a01b03168152602001908152602001600020546102cb9190610880565b6103f2565b5060019392505050565b60055460ff1690565b60006102566102f06103ee565b8484600160006102fe6103ee565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546102cb9190610868565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101bf90610897565b600061025661036d6103ee565b84846001600061037b6103ee565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546102cb9190610880565b60006102566103bc6103ee565b84846104af565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104215760405162461bcd60e51b8152600401610418906107f4565b60405180910390fd5b6001600160a01b0382166104475760405162461bcd60e51b81526004016104189061073a565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104a2908590610851565b60405180910390a3505050565b6001600160a01b0383166104d55760405162461bcd60e51b815260040161041890610797565b6001600160a01b0382166104fb5760405162461bcd60e51b8152600401610418906106dd565b6105068383836105ac565b6001600160a01b03831660009081526020819052604090205461052a908290610880565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461055a908290610868565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104a2908590610851565b505050565b80356001600160a01b038116811461034c57600080fd5b6000602082840312156105d9578081fd5b6105e2826105b1565b9392505050565b600080604083850312156105fb578081fd5b610604836105b1565b9150610612602084016105b1565b90509250929050565b60008060006060848603121561062f578081fd5b610638846105b1565b9250610646602085016105b1565b9150604084013590509250925092565b60008060408385031215610668578182fd5b610671836105b1565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b818110156106b65785810183015185820160400152820161069a565b818111156106c75783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60ff91909116815260200190565b6000821982111561087b5761087b6108d2565b500190565b600082821015610892576108926108d2565b500390565b6002810460018216806108ab57607f821691505b602082108114156108cc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea264697066735822122000ad3557820cf4e32db44c47a2e57824517dd9490d4c532ce9c77b62e411303a64736f6c63430008000033";

type LPTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LPTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LPToken__factory extends ContractFactory {
  constructor(...args: LPTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LPToken";
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LPToken> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<LPToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): LPToken {
    return super.attach(address) as LPToken;
  }
  connect(signer: Signer): LPToken__factory {
    return super.connect(signer) as LPToken__factory;
  }
  static readonly contractName: "LPToken";
  public readonly contractName: "LPToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LPTokenInterface {
    return new utils.Interface(_abi) as LPTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LPToken {
    return new Contract(address, _abi, signerOrProvider) as LPToken;
  }
}