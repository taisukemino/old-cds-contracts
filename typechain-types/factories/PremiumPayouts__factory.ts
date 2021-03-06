/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PremiumPayouts,
  PremiumPayoutsInterface,
} from "../PremiumPayouts";

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
      {
        internalType: "contract ILPToken",
        name: "_lpTokenAddress",
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
    name: "lpToken",
    outputs: [
      {
        internalType: "contract ILPToken",
        name: "",
        type: "address",
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
  "0x60806040523480156200001157600080fd5b5060405162000efd38038062000efd83398101604081905262000034916200015f565b82826000620000426200013c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b03199081166001600160a01b038581169190911790925560028054909116918316919091179055620000d6600462000140602090811b6200090017901c565b7fb62b317ce42ac86f1dc313f788718ef3d13448d6e52837a6281f4caf7367a66d828260405162000109929190620001b2565b60405180910390a15050600880546001600160a01b0319166001600160a01b0392909216919091179055506200020a9050565b3390565b6001816000016000828254620001579190620001cc565b909155505050565b60008060006060848603121562000174578283fd5b83516200018181620001f1565b60208501519093506200019481620001f1565b6040850151909250620001a781620001f1565b809150509250925092565b6001600160a01b0392831681529116602082015260400190565b60008219821115620001ec57634e487b7160e01b81526011600452602481fd5b500190565b6001600160a01b03811681146200020757600080fd5b50565b610ce3806200021a6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636709c18b1161008c5780638da5cb5b116100665780638da5cb5b146101a0578063cc3beaec146101a8578063f2fde38b146101bb578063f6fdb137146101ce576100ea565b80636709c18b1461016d57806368ad792614610175578063715018a614610198576100ea565b80633dead291116100c85780633dead2911461013557806354617c89146101555780635c97f3d71461015d5780635fcbd28514610165576100ea565b806312d0b908146100ef578063162ef08b146101045780633013ce2914610117575b600080fd5b6101026100fd3660046109af565b6101e1565b005b61010261011236600461093a565b6104c5565b61011f610529565b60405161012c91906109d8565b60405180910390f35b61014861014336600461093a565b610538565b60405161012c9190610c1a565b61011f61054a565b610148610559565b61011f61055f565b61010261056e565b61018861018336600461097d565b610643565b60405161012c9493929190610c23565b610102610677565b61011f610703565b6101026101b6366004610995565b610712565b6101026101c936600461093a565b61082b565b6101486101dc366004610995565b6108ee565b336000908152600560205260409020546102165760405162461bcd60e51b815260040161020d90610b2b565b60405180910390fd5b600260009054906101000a90046001600160a01b03166001600160a01b031663aa04d4a46040518163ffffffff1660e01b815260040160206040518083038186803b15801561026457600080fd5b505afa158015610278573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029c919061095d565b156102b95760405162461bcd60e51b815260040161020d90610af4565b6002546040517f117857ed00000000000000000000000000000000000000000000000000000000815283916001600160a01b03169063117857ed90610302908490600401610c4a565b60206040518083038186803b15801561031a57600080fd5b505afa15801561032e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610352919061095d565b1561036f5760405162461bcd60e51b815260040161020d90610abd565b33600090815260056020908152604080832054808452600690925282206002018054919285926103a0908490610c58565b90915550506001546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b03909116906323b872dd906103f2903390309088906004016109ec565b602060405180830381600087803b15801561040c57600080fd5b505af1158015610420573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610444919061095d565b5060ff841660009081526007602052604081208054859290610467908490610c58565b9250508190555082600360008282546104809190610c58565b90915550506040517fbb818a71575cc9070a5008e5ab8837b9e28f74d2aa486250fcb3c34a45fedf79906104b79033908690610a10565b60405180910390a150505050565b6104cd61091d565b6000546001600160a01b039081169116146104fa5760405162461bcd60e51b815260040161020d90610be5565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b031681565b60056020526000908152604090205481565b6002546001600160a01b031681565b60045481565b6008546001600160a01b031681565b3360009081526005602052604090205461059a5760405162461bcd60e51b815260040161020d90610b2b565b600260009054906101000a90046001600160a01b03166001600160a01b031663aa04d4a46040518163ffffffff1660e01b815260040160206040518083038186803b1580156105e857600080fd5b505afa1580156105fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610620919061095d565b15156001146106415760405162461bcd60e51b815260040161020d90610a86565b565b6006602052600090815260409020805460018201546002830154600390930154919260ff909116916001600160a01b031684565b61067f61091d565b6000546001600160a01b039081169116146106ac5760405162461bcd60e51b815260040161020d90610be5565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031690565b336000908152600560205260409020541561073f5760405162461bcd60e51b815260040161020d90610b88565b600061074b6004610921565b336000818152600560209081526040808320859055805160808101825285815260ff8881168285019081528284018681526060840197885288875260069095529290942081518155915160018301805460ff191691909516179093559051600282015591516003909201805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909316929092179091559091506107ed6004610900565b7f7325fb14450d3e5eb288c620b4ff1d6b43a41b33b4a4f143ae88cd4c12f99ea3338360405161081e929190610a10565b60405180910390a1505050565b61083361091d565b6000546001600160a01b039081169116146108605760405162461bcd60e51b815260040161020d90610be5565b6001600160a01b0381166108865760405162461bcd60e51b815260040161020d90610a29565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60076020526000908152604090205481565b60018160000160008282546109159190610c58565b909155505050565b3390565b80545b919050565b803560ff8116811461092457600080fd5b60006020828403121561094b578081fd5b813561095681610c95565b9392505050565b60006020828403121561096e578081fd5b81518015158114610956578182fd5b60006020828403121561098e578081fd5b5035919050565b6000602082840312156109a6578081fd5b61095682610929565b600080604083850312156109c1578081fd5b6109ca83610929565b946020939093013593505050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600b908201527f6e6f742065787069726564000000000000000000000000000000000000000000604082015260600190565b60208082526009908201527f64656661756c7465640000000000000000000000000000000000000000000000604082015260600190565b60208082526007908201527f6578706972656400000000000000000000000000000000000000000000000000604082015260600190565b6020808252602e908201527f5072656d69756d506f6f6c3a3a6163636f756e744578697374733a206e6f206160408201527f63636f756e742063726561746564000000000000000000000000000000000000606082015260800190565b60208082526033908201527f5072656d69756d506f6f6c3a3a6372656174654163636f756e743a206163636f60408201527f756e7420616c7265616479206372656174656400000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b93845260ff92909216602084015260408301526001600160a01b0316606082015260800190565b60ff91909116815260200190565b60008219821115610c90577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b6001600160a01b0381168114610caa57600080fd5b5056fea2646970667358221220be5e035a9962ebd629e7530f282cbb654d2488d6483bb0ffed49f96cf113987b64736f6c63430008000033";

type PremiumPayoutsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PremiumPayoutsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PremiumPayouts__factory extends ContractFactory {
  constructor(...args: PremiumPayoutsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PremiumPayouts";
  }

  deploy(
    _paymentTokenAddress: string,
    _referenceObligationAddress: string,
    _lpTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PremiumPayouts> {
    return super.deploy(
      _paymentTokenAddress,
      _referenceObligationAddress,
      _lpTokenAddress,
      overrides || {}
    ) as Promise<PremiumPayouts>;
  }
  getDeployTransaction(
    _paymentTokenAddress: string,
    _referenceObligationAddress: string,
    _lpTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _paymentTokenAddress,
      _referenceObligationAddress,
      _lpTokenAddress,
      overrides || {}
    );
  }
  attach(address: string): PremiumPayouts {
    return super.attach(address) as PremiumPayouts;
  }
  connect(signer: Signer): PremiumPayouts__factory {
    return super.connect(signer) as PremiumPayouts__factory;
  }
  static readonly contractName: "PremiumPayouts";
  public readonly contractName: "PremiumPayouts";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PremiumPayoutsInterface {
    return new utils.Interface(_abi) as PremiumPayoutsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PremiumPayouts {
    return new Contract(address, _abi, signerOrProvider) as PremiumPayouts;
  }
}
