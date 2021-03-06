/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoveragePool, CoveragePoolInterface } from "../CoveragePool";

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
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_coverageAmount",
        type: "uint256",
      },
    ],
    name: "CoverageClaimed",
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
    name: "CoveragePoolInitialized",
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
        indexed: false,
        internalType: "address",
        name: "liquidityProvider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_liquidityAmount",
        type: "uint256",
      },
    ],
    name: "LiquidityAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_liquidityAmount",
        type: "uint256",
      },
    ],
    name: "LiquidityWithdrawn",
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
        internalType: "uint256",
        name: "_liquidityAmount",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    inputs: [
      {
        internalType: "uint8",
        name: "_loanId",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_coverTokenAmount",
        type: "uint256",
      },
    ],
    name: "claimCoverage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "coveragePoolTotal",
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
    name: "withdrawCoverage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001632380380620016328339810160408190526200003491620002c4565b8383818181600390805190602001906200005092919062000195565b5080516200006690600490602084019062000195565b50506005805460ff19166012179055506040517f173f43cc5ceabd08f60e00cb67c52f87a33ba8ebe1b8dc75471f876b8c16e3c790620000aa908490849062000383565b60405180910390a15060009050620000c162000191565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600680546001600160a01b038085166001600160a01b03199283161790925560078054928416929091169190911790556040517f2ca79d26f540cd2a432877a86991c347c3071f301ea510bb3e64c98b8ecabe0f906200017f908690869086908690620003ac565b60405180910390a15050505062000499565b3390565b828054620001a3906200042d565b90600052602060002090601f016020900481019282620001c7576000855562000212565b82601f10620001e257805160ff191683800117855562000212565b8280016001018555821562000212579182015b8281111562000212578251825591602001919060010190620001f5565b506200022092915062000224565b5090565b5b8082111562000220576000815560010162000225565b600082601f8301126200024c578081fd5b81516001600160401b03808211156200026957620002696200046a565b604051601f8301601f1916810160200182811182821017156200029057620002906200046a565b604052828152848301602001861015620002a8578384fd5b620002bb836020830160208801620003fa565b95945050505050565b60008060008060808587031215620002da578384fd5b84516001600160401b0380821115620002f1578586fd5b620002ff888389016200023b565b9550602087015191508082111562000315578485fd5b5062000324878288016200023b565b9350506040850151620003378162000480565b60608601519092506200034a8162000480565b939692955090935050565b600081518084526200036f816020860160208601620003fa565b601f01601f19169290920160200192915050565b60006040825262000398604083018562000355565b8281036020840152620002bb818562000355565b600060808252620003c1608083018762000355565b8281036020840152620003d5818762000355565b6001600160a01b03958616604085015293909416606090920191909152509392505050565b60005b8381101562000417578181015183820152602001620003fd565b8381111562000427576000848401525b50505050565b6002810460018216806200044257607f821691505b602082108114156200046457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200049657600080fd5b50565b61118980620004a96000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806354617c89116100d8578063a457c2d71161008c578063dd62ed3e11610066578063dd62ed3e146102b0578063e13caab5146102c3578063f2fde38b146102d657610177565b8063a457c2d714610282578063a9059cbb14610295578063bbf5a2fd146102a857610177565b8063715018a6116100bd578063715018a61461026a5780638da5cb5b1461027257806395d89b411461027a57610177565b806354617c891461024f57806370a082311461025757610177565b806323b872dd1161012f578063313ce56711610114578063313ce56714610214578063395093511461022957806351c6590a1461023c57610177565b806323b872dd146101ec5780633013ce29146101ff57610177565b8063095ea7b311610160578063095ea7b3146101a4578063162ef08b146101c457806318160ddd146101d757610177565b806303c50e781461017c57806306fdde0314610186575b600080fd5b6101846102e9565b005b61018e6102eb565b60405161019b9190610da6565b60405180910390f35b6101b76101b2366004610cc5565b61037d565b60405161019b9190610d9b565b6101846101d2366004610c2a565b61039a565b6101df610417565b60405161019b91906110a4565b6101b76101fa366004610c85565b61041d565b610207610492565b60405161019b9190610d4a565b61021c6104a1565b60405161019b91906110ad565b6101b7610237366004610cc5565b6104aa565b61018461024a366004610d10565b6104f9565b61020761069a565b6101df610265366004610c2a565b6106a9565b6101846106c4565b61020761075b565b61018e61076f565b6101b7610290366004610cc5565b61077e565b6101b76102a3366004610cc5565b6107cd565b6101df6107e1565b6101df6102be366004610c4d565b6107e7565b6101846102d1366004610d28565b610812565b6101846102e4366004610c2a565b6108d1565b565b6060600380546102fa906110ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610326906110ea565b80156103735780601f1061034857610100808354040283529160200191610373565b820191906000526020600020905b81548152906001019060200180831161035657829003601f168201915b5050505050905090565b600061039161038a6109a5565b84846109a9565b50600192915050565b6103a26109a5565b60055461010090046001600160a01b039081169116146103dd5760405162461bcd60e51b81526004016103d490610f47565b60405180910390fd5b600780547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60025490565b600061042a848484610a5d565b610488846104366109a5565b6001600160a01b038716600090815260016020526040812086916104586109a5565b6001600160a01b03166001600160a01b031681526020019081526020016000205461048391906110d3565b6109a9565b5060019392505050565b6006546001600160a01b031681565b60055460ff1690565b60006103916104b76109a5565b8484600160006104c56109a5565b6001600160a01b03908116825260208083019390935260409182016000908120918b168152925290205461048391906110bb565b600760009054906101000a90046001600160a01b03166001600160a01b031663aa04d4a46040518163ffffffff1660e01b815260040160206040518083038186803b15801561054757600080fd5b505afa15801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f9190610cf0565b1561059c5760405162461bcd60e51b81526004016103d490610f10565b6006546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b03909116906323b872dd906105e990339030908690600401610d5e565b602060405180830381600087803b15801561060357600080fd5b505af1158015610617573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063b9190610cf0565b506106463382610b5a565b806008600082825461065891906110bb565b90915550506040517fc17cea59c2955cb181b03393209566960365771dbba9dc3d510180e7cb3120889061068f9033908490610d82565b60405180910390a150565b6007546001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b6106cc6109a5565b60055461010090046001600160a01b039081169116146106fe5760405162461bcd60e51b81526004016103d490610f47565b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36005805474ffffffffffffffffffffffffffffffffffffffff0019169055565b60055461010090046001600160a01b031690565b6060600480546102fa906110ea565b600061039161078b6109a5565b8484600160006107996109a5565b6001600160a01b03908116825260208083019390935260409182016000908120918b168152925290205461048391906110d3565b60006103916107da6109a5565b8484610a5d565b60085490565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6007546040517f117857ed00000000000000000000000000000000000000000000000000000000815283916001600160a01b03169063117857ed9061085b9084906004016110ad565b60206040518083038186803b15801561087357600080fd5b505afa158015610887573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ab9190610cf0565b15156001146108cc5760405162461bcd60e51b81526004016103d490611036565b505050565b6108d96109a5565b60055461010090046001600160a01b0390811691161461090b5760405162461bcd60e51b81526004016103d490610f47565b6001600160a01b0381166109315760405162461bcd60e51b81526004016103d490610e56565b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b039092166101000274ffffffffffffffffffffffffffffffffffffffff0019909216919091179055565b3390565b6001600160a01b0383166109cf5760405162461bcd60e51b81526004016103d490610fd9565b6001600160a01b0382166109f55760405162461bcd60e51b81526004016103d490610eb3565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610a509085906110a4565b60405180910390a3505050565b6001600160a01b038316610a835760405162461bcd60e51b81526004016103d490610f7c565b6001600160a01b038216610aa95760405162461bcd60e51b81526004016103d490610df9565b610ab48383836108cc565b6001600160a01b038316600090815260208190526040902054610ad89082906110d3565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610b089082906110bb565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a509085906110a4565b610b648282610b68565b5050565b6001600160a01b038216610b8e5760405162461bcd60e51b81526004016103d49061106d565b610b9a600083836108cc565b80600254610ba891906110bb565b6002556001600160a01b038216600090815260208190526040902054610bcf9082906110bb565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c1e9085906110a4565b60405180910390a35050565b600060208284031215610c3b578081fd5b8135610c468161113b565b9392505050565b60008060408385031215610c5f578081fd5b8235610c6a8161113b565b91506020830135610c7a8161113b565b809150509250929050565b600080600060608486031215610c99578081fd5b8335610ca48161113b565b92506020840135610cb48161113b565b929592945050506040919091013590565b60008060408385031215610cd7578182fd5b8235610ce28161113b565b946020939093013593505050565b600060208284031215610d01578081fd5b81518015158114610c46578182fd5b600060208284031215610d21578081fd5b5035919050565b60008060408385031215610d3a578182fd5b823560ff81168114610ce2578283fd5b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6000602080835283518082850152825b81811015610dd257858101830151858201604001528201610db6565b81811115610de35783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526007908201527f6578706972656400000000000000000000000000000000000000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600d908201527f6e6f742064656661756c74656400000000000000000000000000000000000000604082015260600190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b600082198211156110ce576110ce611125565b500190565b6000828210156110e5576110e5611125565b500390565b6002810460018216806110fe57607f821691505b6020821081141561111f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461115057600080fd5b5056fea2646970667358221220e6e15c0e34cb5e76e10a5e569382adda5e9044e8d1e8ad27e588a9753ea4ee5b64736f6c63430008000033";

type CoveragePoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoveragePoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CoveragePool__factory extends ContractFactory {
  constructor(...args: CoveragePoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CoveragePool";
  }

  deploy(
    _name: string,
    _symbol: string,
    _paymentTokenAddress: string,
    _referenceObligationAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoveragePool> {
    return super.deploy(
      _name,
      _symbol,
      _paymentTokenAddress,
      _referenceObligationAddress,
      overrides || {}
    ) as Promise<CoveragePool>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _paymentTokenAddress: string,
    _referenceObligationAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _paymentTokenAddress,
      _referenceObligationAddress,
      overrides || {}
    );
  }
  attach(address: string): CoveragePool {
    return super.attach(address) as CoveragePool;
  }
  connect(signer: Signer): CoveragePool__factory {
    return super.connect(signer) as CoveragePool__factory;
  }
  static readonly contractName: "CoveragePool";
  public readonly contractName: "CoveragePool";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoveragePoolInterface {
    return new utils.Interface(_abi) as CoveragePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoveragePool {
    return new Contract(address, _abi, signerOrProvider) as CoveragePool;
  }
}
