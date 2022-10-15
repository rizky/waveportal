(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{31:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWavedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526200004f6040518060400160405280601981526020017f57652068617665206265656e20636f6e737472756374656421000000000000008152506200007760201b620005fe1760201c565b606444426200005f91906200017c565b6200006b9190620001e6565b600181905550620002dc565b62000117816040516024016200008e9190620002b8565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200011a60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620001898262000143565b9150620001968362000143565b9250828201905080821115620001b157620001b06200014d565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000620001f38262000143565b9150620002008362000143565b925082620002135762000212620001b7565b5b828206905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200025a5780820151818401526020810190506200023d565b60008484015250505050565b6000601f19601f8301169050919050565b600062000284826200021e565b62000290818562000229565b9350620002a28185602086016200023a565b620002ad8162000266565b840191505092915050565b60006020820190508181036000830152620002d4818462000277565b905092915050565b61121780620002ec6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b600480360381019061006691906108b6565b6100d9565b005b61007561048c565b6040516100829190610918565b60405180910390f35b6100a560048036038101906100a09190610991565b610495565b6040516100b29190610918565b60405180910390f35b6100c36104ad565b6040516100d09190610b6d565b60405180910390f35b42610384600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101279190610bbe565b10610167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015e90610c4f565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bd9190610bbe565b925050819055506102036040518060400160405280600d81526020017f257320686173207761766564210000000000000000000000000000000000000081525033610697565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816102bb9190610e7b565b50604082015181600201555050606460015442446102d99190610bbe565b6102e39190610bbe565b6102ed9190610f7c565b6001819055506032600154116104395761033c6040518060400160405280600781526020017f257320776f6e210000000000000000000000000000000000000000000000000081525033610697565b6000655af3107a400090504781111561038a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103819061101f565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103b090611070565b60006040518083038185875af1925050503d80600081146103ed576040519150601f19603f3d011682016040523d82523d6000602084013e6103f2565b606091505b5050905080610436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042d906110f7565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610481929190611150565b60405180910390a250565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b828210156105f557838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461055a90610c9e565b80601f016020809104026020016040519081016040528092919081815260200182805461058690610c9e565b80156105d35780601f106105a8576101008083540402835291602001916105d3565b820191906000526020600020905b8154815290600101906020018083116105b657829003601f168201915b50505050508152602001600282015481525050815260200190600101906104d1565b50505050905090565b610694816040516024016106129190611180565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610733565b50565b61072f82826040516024016106ad9291906111b1565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610733565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107c38261077a565b810181811067ffffffffffffffff821117156107e2576107e161078b565b5b80604052505050565b60006107f561075c565b905061080182826107ba565b919050565b600067ffffffffffffffff8211156108215761082061078b565b5b61082a8261077a565b9050602081019050919050565b82818337600083830152505050565b600061085961085484610806565b6107eb565b90508281526020810184848401111561087557610874610775565b5b610880848285610837565b509392505050565b600082601f83011261089d5761089c610770565b5b81356108ad848260208601610846565b91505092915050565b6000602082840312156108cc576108cb610766565b5b600082013567ffffffffffffffff8111156108ea576108e961076b565b5b6108f684828501610888565b91505092915050565b6000819050919050565b610912816108ff565b82525050565b600060208201905061092d6000830184610909565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061095e82610933565b9050919050565b61096e81610953565b811461097957600080fd5b50565b60008135905061098b81610965565b92915050565b6000602082840312156109a7576109a6610766565b5b60006109b58482850161097c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6109f381610953565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a33578082015181840152602081019050610a18565b60008484015250505050565b6000610a4a826109f9565b610a548185610a04565b9350610a64818560208601610a15565b610a6d8161077a565b840191505092915050565b610a81816108ff565b82525050565b6000606083016000830151610a9f60008601826109ea565b5060208301518482036020860152610ab78282610a3f565b9150506040830151610acc6040860182610a78565b508091505092915050565b6000610ae38383610a87565b905092915050565b6000602082019050919050565b6000610b03826109be565b610b0d81856109c9565b935083602082028501610b1f856109da565b8060005b85811015610b5b5784840389528151610b3c8582610ad7565b9450610b4783610aeb565b925060208a01995050600181019050610b23565b50829750879550505050505092915050565b60006020820190508181036000830152610b878184610af8565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bc9826108ff565b9150610bd4836108ff565b9250828201905080821115610bec57610beb610b8f565b5b92915050565b600082825260208201905092915050565b7f576169742031356d000000000000000000000000000000000000000000000000600082015250565b6000610c39600883610bf2565b9150610c4482610c03565b602082019050919050565b60006020820190508181036000830152610c6881610c2c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610cb657607f821691505b602082108103610cc957610cc8610c6f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610d317fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610cf4565b610d3b8683610cf4565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610d78610d73610d6e846108ff565b610d53565b6108ff565b9050919050565b6000819050919050565b610d9283610d5d565b610da6610d9e82610d7f565b848454610d01565b825550505050565b600090565b610dbb610dae565b610dc6818484610d89565b505050565b5b81811015610dea57610ddf600082610db3565b600181019050610dcc565b5050565b601f821115610e2f57610e0081610ccf565b610e0984610ce4565b81016020851015610e18578190505b610e2c610e2485610ce4565b830182610dcb565b50505b505050565b600082821c905092915050565b6000610e5260001984600802610e34565b1980831691505092915050565b6000610e6b8383610e41565b9150826002028217905092915050565b610e84826109f9565b67ffffffffffffffff811115610e9d57610e9c61078b565b5b610ea78254610c9e565b610eb2828285610dee565b600060209050601f831160018114610ee55760008415610ed3578287015190505b610edd8582610e5f565b865550610f45565b601f198416610ef386610ccf565b60005b82811015610f1b57848901518255600182019150602085019450602081019050610ef6565b86831015610f385784890151610f34601f891682610e41565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f87826108ff565b9150610f92836108ff565b925082610fa257610fa1610f4d565b5b828206905092915050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e207468657920636f6e7472616374206861732e0000000000000000000000602082015250565b6000611009603583610bf2565b915061101482610fad565b604082019050919050565b6000602082019050818103600083015261103881610ffc565b9050919050565b600081905092915050565b50565b600061105a60008361103f565b91506110658261104a565b600082019050919050565b600061107b8261104d565b9150819050919050565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b60006110e1602783610bf2565b91506110ec82611085565b604082019050919050565b60006020820190508181036000830152611110816110d4565b9050919050565b6000611122826109f9565b61112c8185610bf2565b935061113c818560208601610a15565b6111458161077a565b840191505092915050565b60006040820190506111656000830185610909565b81810360208301526111778184611117565b90509392505050565b6000602082019050818103600083015261119a8184611117565b905092915050565b6111ab81610953565b82525050565b600060408201905081810360008301526111cb8185611117565b90506111da60208301846111a2565b939250505056fea2646970667358221220c49b771c9442c9a097ee115ba6e1425c222b1dafd2b6892d75ddc2be0ce9e3c664736f6c63430008110033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b600480360381019061006691906108b6565b6100d9565b005b61007561048c565b6040516100829190610918565b60405180910390f35b6100a560048036038101906100a09190610991565b610495565b6040516100b29190610918565b60405180910390f35b6100c36104ad565b6040516100d09190610b6d565b60405180910390f35b42610384600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101279190610bbe565b10610167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015e90610c4f565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bd9190610bbe565b925050819055506102036040518060400160405280600d81526020017f257320686173207761766564210000000000000000000000000000000000000081525033610697565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816102bb9190610e7b565b50604082015181600201555050606460015442446102d99190610bbe565b6102e39190610bbe565b6102ed9190610f7c565b6001819055506032600154116104395761033c6040518060400160405280600781526020017f257320776f6e210000000000000000000000000000000000000000000000000081525033610697565b6000655af3107a400090504781111561038a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103819061101f565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103b090611070565b60006040518083038185875af1925050503d80600081146103ed576040519150601f19603f3d011682016040523d82523d6000602084013e6103f2565b606091505b5050905080610436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042d906110f7565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610481929190611150565b60405180910390a250565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b828210156105f557838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461055a90610c9e565b80601f016020809104026020016040519081016040528092919081815260200182805461058690610c9e565b80156105d35780601f106105a8576101008083540402835291602001916105d3565b820191906000526020600020905b8154815290600101906020018083116105b657829003601f168201915b50505050508152602001600282015481525050815260200190600101906104d1565b50505050905090565b610694816040516024016106129190611180565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610733565b50565b61072f82826040516024016106ad9291906111b1565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610733565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107c38261077a565b810181811067ffffffffffffffff821117156107e2576107e161078b565b5b80604052505050565b60006107f561075c565b905061080182826107ba565b919050565b600067ffffffffffffffff8211156108215761082061078b565b5b61082a8261077a565b9050602081019050919050565b82818337600083830152505050565b600061085961085484610806565b6107eb565b90508281526020810184848401111561087557610874610775565b5b610880848285610837565b509392505050565b600082601f83011261089d5761089c610770565b5b81356108ad848260208601610846565b91505092915050565b6000602082840312156108cc576108cb610766565b5b600082013567ffffffffffffffff8111156108ea576108e961076b565b5b6108f684828501610888565b91505092915050565b6000819050919050565b610912816108ff565b82525050565b600060208201905061092d6000830184610909565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061095e82610933565b9050919050565b61096e81610953565b811461097957600080fd5b50565b60008135905061098b81610965565b92915050565b6000602082840312156109a7576109a6610766565b5b60006109b58482850161097c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6109f381610953565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a33578082015181840152602081019050610a18565b60008484015250505050565b6000610a4a826109f9565b610a548185610a04565b9350610a64818560208601610a15565b610a6d8161077a565b840191505092915050565b610a81816108ff565b82525050565b6000606083016000830151610a9f60008601826109ea565b5060208301518482036020860152610ab78282610a3f565b9150506040830151610acc6040860182610a78565b508091505092915050565b6000610ae38383610a87565b905092915050565b6000602082019050919050565b6000610b03826109be565b610b0d81856109c9565b935083602082028501610b1f856109da565b8060005b85811015610b5b5784840389528151610b3c8582610ad7565b9450610b4783610aeb565b925060208a01995050600181019050610b23565b50829750879550505050505092915050565b60006020820190508181036000830152610b878184610af8565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bc9826108ff565b9150610bd4836108ff565b9250828201905080821115610bec57610beb610b8f565b5b92915050565b600082825260208201905092915050565b7f576169742031356d000000000000000000000000000000000000000000000000600082015250565b6000610c39600883610bf2565b9150610c4482610c03565b602082019050919050565b60006020820190508181036000830152610c6881610c2c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610cb657607f821691505b602082108103610cc957610cc8610c6f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610d317fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610cf4565b610d3b8683610cf4565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610d78610d73610d6e846108ff565b610d53565b6108ff565b9050919050565b6000819050919050565b610d9283610d5d565b610da6610d9e82610d7f565b848454610d01565b825550505050565b600090565b610dbb610dae565b610dc6818484610d89565b505050565b5b81811015610dea57610ddf600082610db3565b600181019050610dcc565b5050565b601f821115610e2f57610e0081610ccf565b610e0984610ce4565b81016020851015610e18578190505b610e2c610e2485610ce4565b830182610dcb565b50505b505050565b600082821c905092915050565b6000610e5260001984600802610e34565b1980831691505092915050565b6000610e6b8383610e41565b9150826002028217905092915050565b610e84826109f9565b67ffffffffffffffff811115610e9d57610e9c61078b565b5b610ea78254610c9e565b610eb2828285610dee565b600060209050601f831160018114610ee55760008415610ed3578287015190505b610edd8582610e5f565b865550610f45565b601f198416610ef386610ccf565b60005b82811015610f1b57848901518255600182019150602085019450602081019050610ef6565b86831015610f385784890151610f34601f891682610e41565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f87826108ff565b9150610f92836108ff565b925082610fa257610fa1610f4d565b5b828206905092915050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e207468657920636f6e7472616374206861732e0000000000000000000000602082015250565b6000611009603583610bf2565b915061101482610fad565b604082019050919050565b6000602082019050818103600083015261103881610ffc565b9050919050565b600081905092915050565b50565b600061105a60008361103f565b91506110658261104a565b600082019050919050565b600061107b8261104d565b9150819050919050565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b60006110e1602783610bf2565b91506110ec82611085565b604082019050919050565b60006020820190508181036000830152611110816110d4565b9050919050565b6000611122826109f9565b61112c8185610bf2565b935061113c818560208601610a15565b6111458161077a565b840191505092915050565b60006040820190506111656000830185610909565b81810360208301526111778184611117565b90509392505050565b6000602082019050818103600083015261119a8184611117565b905092915050565b6111ab81610953565b82525050565b600060408201905081810360008301526111cb8185611117565b90506111da60208301846111a2565b939250505056fea2646970667358221220c49b771c9442c9a097ee115ba6e1425c222b1dafd2b6892d75ddc2be0ce9e3c664736f6c63430008110033","linkReferences":{},"deployedLinkReferences":{}}')},38:function(f,b,e){f.exports=e(58)},43:function(f,b,e){},45:function(f,b,e){},46:function(f,b){},55:function(f,b){},58:function(f,b,e){"use strict";e.r(b);var a=e(7),t=e.n(a),c=e(30),n=e.n(c),d=(e(43),e(12)),r=e(22),s=e(2),o=e.n(s),u=e(13),i=(e(45),e(31)),l=function(){return window.ethereum},p=function(){var f,b,e;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,f=l()){a.next=5;break}return console.error("Make sure you have Metamask!"),a.abrupt("return",null);case 5:return console.log("We have the Ethereum object",f),a.next=8,o.a.awrap(f.request({method:"eth_accounts"}));case 8:if(0===(b=a.sent).length){a.next=15;break}return e=b[0],console.log("Found an authorized account:",e),a.abrupt("return",e);case 15:return console.error("No authorized account found"),a.abrupt("return",null);case 17:a.next=23;break;case 19:return a.prev=19,a.t0=a.catch(0),console.error(a.t0),a.abrupt("return",null);case 23:case"end":return a.stop()}}),null,null,[[0,19]])},m=function(){var f=Object(a.useState)(""),b=Object(r.a)(f,2),e=b[0],c=b[1],n=Object(a.useState)([]),s=Object(r.a)(n,2),m=s[0],v=s[1],w="0xab233A1a68CD8C03Bb62D68Bc84f6F4a02Bcd609",y=i.abi,g=function(){var f,b,e,a,t,c,n;return o.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(f=window,b=f.ethereum,d.prev=1,!b){d.next=13;break}return e=new u.a.providers.Web3Provider(b),a=e.getSigner(),t=new u.a.Contract(w,y,a),d.next=8,o.a.awrap(t.getAllWaves());case 8:c=d.sent,n=c.map((function(f){return{waver:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message}})),v(n),d.next=14;break;case 13:console.log("Ethereum object doesn't exist!");case 14:d.next=19;break;case 16:d.prev=16,d.t0=d.catch(1),console.log(d.t0);case 19:case"end":return d.stop()}}),null,null,[[1,16]])};return Object(a.useEffect)((function(){!function(){var f;o.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,o.a.awrap(p());case 2:null!==(f=b.sent)&&(c(f),g());case 4:case"end":return b.stop()}}))}()}),[]),Object(a.useEffect)((function(){var f,b=function(f,b,e){console.log("NewWave",f,b,e),v((function(a){return[].concat(Object(d.a)(a),[{waver:f,timestamp:new Date(1e3*b),message:e}])}))};if(window.ethereum){var e=new u.a.providers.Web3Provider(window.ethereum).getSigner();(f=new u.a.Contract(w,y,e)).on("NewWave",b)}return function(){f&&f.off("NewWave",b)}}),[]),t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"dataContainer"},t.a.createElement("div",{className:"header"},"\ud83d\udc4b Hey there!"),t.a.createElement("div",{className:"bio"},"Hello I am Riz? Connect your Ethereum wallet and wave at me!"),t.a.createElement("button",{className:"waveButton",onClick:function(){var f,b,e,a,t,c,n;return o.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(d.prev=0,f=window,!(b=f.ethereum)){d.next=24;break}return e=new u.a.providers.Web3Provider(b),a=e.getSigner(),t=new u.a.Contract(w,y,a),d.next=8,o.a.awrap(t.getTotalWaves());case 8:return c=d.sent,console.log("Retrieved total wave count...",c.toNumber()),d.next=12,o.a.awrap(t.wave("This is a message",{gasLimit:3e5}));case 12:return n=d.sent,console.log("Mining...",n.hash),d.next=16,o.a.awrap(n.wait());case 16:return console.log("Mined -- ",n.hash),d.next=19,o.a.awrap(t.getTotalWaves());case 19:c=d.sent,console.log("Retrieved total wave count...",c.toNumber()),g(),d.next=25;break;case 24:console.log("Ethereum object doesn't exist!");case 25:d.next=30;break;case 27:d.prev=27,d.t0=d.catch(0),console.log(d.t0);case 30:case"end":return d.stop()}}),null,null,[[0,27]])}},"Wave at Me"),!e&&t.a.createElement("button",{className:"waveButton",onClick:function(){var f,b;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,f=l()){e.next=5;break}return alert("Get MetaMask!"),e.abrupt("return");case 5:return e.next=7,o.a.awrap(f.request({method:"eth_requestAccounts"}));case 7:b=e.sent,console.log("Connected",b[0]),c(b[0]),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),null,null,[[0,12]])}},"Connect Wallet"),m.map((function(f,b){return t.a.createElement("div",{key:b,style:{backgroundColor:"OldLace",marginTop:"16px",padding:"8px"}},t.a.createElement("div",null,"Address: ",f.waver),t.a.createElement("div",null,"Time: ",f.timestamp.toString()),t.a.createElement("div",null,"Message: ",f.message))}))))};n.a.render(t.a.createElement(m,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.4833d38f.chunk.js.map