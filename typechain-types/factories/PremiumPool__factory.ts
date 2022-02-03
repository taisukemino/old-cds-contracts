/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PremiumPool, PremiumPoolInterface } from "../PremiumPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_paymentTokenAddress",
        type: "address",
      },
      {
        internalType: "contract IReferenceObligation",
        name: "_referenceObligationAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_accountId",
        type: "uint256",
      },
    ],
    name: "AccountCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_premiumAmount",
        type: "uint256",
      },
    ],
    name: "CoverageBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "_paymentTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IReferenceObligation",
        name: "_referenceObligationAddress",
        type: "address",
      },
    ],
    name: "PremiumPoolInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_premiumAmount",
        type: "uint256",
      },
    ],
    name: "PremiumWithdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "accountIdCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accountIdToAccount",
    outputs: [
      {
        internalType: "uint256",
        name: "Id",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "LoanId",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "PremiumAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "Owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_loanId",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_premiumAmount",
        type: "uint256",
      },
    ],
    name: "buyCoverage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_loanId",
        type: "uint8",
      },
    ],
    name: "createAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "loanIdToPremiumPoolAmount",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerAddressToAccountId",
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
    name: "paymentToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "referenceObligation",
    outputs: [
      {
        internalType: "contract IReferenceObligation",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IReferenceObligation",
        name: "_referenceObligationAddress",
        type: "address",
      },
    ],
    name: "setReferenceObligation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawPremium",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000ea138038062000ea183398101604081905262000034916200013a565b60006200004062000117565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b03199081166001600160a01b038581169190911790925560028054909116918316919091179055620000d460046200011b602090811b620008de17901c565b7fb62b317ce42ac86f1dc313f788718ef3d13448d6e52837a6281f4caf7367a66d82826040516200010792919062000178565b60405180910390a15050620001d0565b3390565b600181600001600082825462000132919062000192565b909155505050565b600080604083850312156200014d578182fd5b82516200015a81620001b7565b60208401519092506200016d81620001b7565b809150509250929050565b6001600160a01b0392831681529116602082015260400190565b60008219821115620001b257634e487b7160e01b81526011600452602481fd5b500190565b6001600160a01b0381168114620001cd57600080fd5b50565b610cc180620001e06000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636709c18b1161008c5780638da5cb5b116100665780638da5cb5b1461018d578063cc3beaec14610195578063f2fde38b146101a8578063f6fdb137146101bb576100df565b80636709c18b1461015a57806368ad792614610162578063715018a614610185576100df565b80633dead291116100bd5780633dead2911461012a57806354617c891461014a5780635c97f3d714610152576100df565b806312d0b908146100e4578063162ef08b146100f95780633013ce291461010c575b600080fd5b6100f76100f236600461098d565b6101ce565b005b6100f7610107366004610918565b6104b2565b610114610516565b60405161012191906109b6565b60405180910390f35b61013d610138366004610918565b610525565b6040516101219190610bf8565b610114610537565b61013d610546565b6100f761054c565b61017561017036600461095b565b610621565b6040516101219493929190610c01565b6100f7610655565b6101146106e1565b6100f76101a3366004610973565b6106f0565b6100f76101b6366004610918565b610809565b61013d6101c9366004610973565b6108cc565b336000908152600560205260409020546102035760405162461bcd60e51b81526004016101fa90610b09565b60405180910390fd5b600260009054906101000a90046001600160a01b03166001600160a01b031663aa04d4a46040518163ffffffff1660e01b815260040160206040518083038186803b15801561025157600080fd5b505afa158015610265573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610289919061093b565b156102a65760405162461bcd60e51b81526004016101fa90610ad2565b6002546040517f117857ed00000000000000000000000000000000000000000000000000000000815283916001600160a01b03169063117857ed906102ef908490600401610c28565b60206040518083038186803b15801561030757600080fd5b505afa15801561031b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033f919061093b565b1561035c5760405162461bcd60e51b81526004016101fa90610a9b565b336000908152600560209081526040808320548084526006909252822060020180549192859261038d908490610c36565b90915550506001546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b03909116906323b872dd906103df903390309088906004016109ca565b602060405180830381600087803b1580156103f957600080fd5b505af115801561040d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610431919061093b565b5060ff841660009081526007602052604081208054859290610454908490610c36565b92505081905550826003600082825461046d9190610c36565b90915550506040517fbb818a71575cc9070a5008e5ab8837b9e28f74d2aa486250fcb3c34a45fedf79906104a490339086906109ee565b60405180910390a150505050565b6104ba6108fb565b6000546001600160a01b039081169116146104e75760405162461bcd60e51b81526004016101fa90610bc3565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b031681565b60056020526000908152604090205481565b6002546001600160a01b031681565b60045481565b336000908152600560205260409020546105785760405162461bcd60e51b81526004016101fa90610b09565b600260009054906101000a90046001600160a01b03166001600160a01b031663aa04d4a46040518163ffffffff1660e01b815260040160206040518083038186803b1580156105c657600080fd5b505afa1580156105da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fe919061093b565b151560011461061f5760405162461bcd60e51b81526004016101fa90610a64565b565b6006602052600090815260409020805460018201546002830154600390930154919260ff909116916001600160a01b031684565b61065d6108fb565b6000546001600160a01b0390811691161461068a5760405162461bcd60e51b81526004016101fa90610bc3565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031690565b336000908152600560205260409020541561071d5760405162461bcd60e51b81526004016101fa90610b66565b600061072960046108ff565b336000818152600560209081526040808320859055805160808101825285815260ff8881168285019081528284018681526060840197885288875260069095529290942081518155915160018301805460ff191691909516179093559051600282015591516003909201805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909316929092179091559091506107cb60046108de565b7f7325fb14450d3e5eb288c620b4ff1d6b43a41b33b4a4f143ae88cd4c12f99ea333836040516107fc9291906109ee565b60405180910390a1505050565b6108116108fb565b6000546001600160a01b0390811691161461083e5760405162461bcd60e51b81526004016101fa90610bc3565b6001600160a01b0381166108645760405162461bcd60e51b81526004016101fa90610a07565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60076020526000908152604090205481565b60018160000160008282546108f39190610c36565b909155505050565b3390565b80545b919050565b803560ff8116811461090257600080fd5b600060208284031215610929578081fd5b813561093481610c73565b9392505050565b60006020828403121561094c578081fd5b81518015158114610934578182fd5b60006020828403121561096c578081fd5b5035919050565b600060208284031215610984578081fd5b61093482610907565b6000806040838503121561099f578081fd5b6109a883610907565b946020939093013593505050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600b908201527f6e6f742065787069726564000000000000000000000000000000000000000000604082015260600190565b60208082526009908201527f64656661756c7465640000000000000000000000000000000000000000000000604082015260600190565b60208082526007908201527f6578706972656400000000000000000000000000000000000000000000000000604082015260600190565b6020808252602e908201527f5072656d69756d506f6f6c3a3a6163636f756e744578697374733a206e6f206160408201527f63636f756e742063726561746564000000000000000000000000000000000000606082015260800190565b60208082526033908201527f5072656d69756d506f6f6c3a3a6372656174654163636f756e743a206163636f60408201527f756e7420616c7265616479206372656174656400000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b93845260ff92909216602084015260408301526001600160a01b0316606082015260800190565b60ff91909116815260200190565b60008219821115610c6e577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b6001600160a01b0381168114610c8857600080fd5b5056fea2646970667358221220e0e36a685551820728499ef1875be55f6c0ee822c4ae4c59a0b79797acba62e664736f6c63430008000033";

type PremiumPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PremiumPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PremiumPool__factory extends ContractFactory {
  constructor(...args: PremiumPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PremiumPool";
  }

  deploy(
    _paymentTokenAddress: string,
    _referenceObligationAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PremiumPool> {
    return super.deploy(
      _paymentTokenAddress,
      _referenceObligationAddress,
      overrides || {}
    ) as Promise<PremiumPool>;
  }
  getDeployTransaction(
    _paymentTokenAddress: string,
    _referenceObligationAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _paymentTokenAddress,
      _referenceObligationAddress,
      overrides || {}
    );
  }
  attach(address: string): PremiumPool {
    return super.attach(address) as PremiumPool;
  }
  connect(signer: Signer): PremiumPool__factory {
    return super.connect(signer) as PremiumPool__factory;
  }
  static readonly contractName: "PremiumPool";
  public readonly contractName: "PremiumPool";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PremiumPoolInterface {
    return new utils.Interface(_abi) as PremiumPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PremiumPool {
    return new Contract(address, _abi, signerOrProvider) as PremiumPool;
  }
}
