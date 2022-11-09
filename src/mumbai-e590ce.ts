import { Bytes, json } from "@graphprotocol/graph-ts"

export function getFactoryName(address: string): string {
    if(addresses.CombineTierFactory == address) return "CombineTierFactory"
    else if(addresses.ERC20TransferTierFactory) return "ERC20TransferTierFactory"
    else return ""
}

const addresses = {
    "commit": "e590ce7ef673224afba04c43384a278a9500500d",
    "network": "mumbai",
    "CombineTierFactory": "0x21fC48631F0efA5EFe790b5c05929cEdc271dB43",
    "ERC20BalanceTierFactory": "0xb1C8EA6E410a71290D5C21404D3324e61912e3c6",
    "ERC20TransferTierFactory": "0x2f1554BF57a234828ca3D210bA65cF80d8e5073c",
    "ERC721BalanceTierFactory": "0xC0E50AD884EBb7C2582677978d48338D46930a08",
    "EmissionsERC20Factory": "0xE51BeE9adccBafc20507e01EAA4F5aA966306669",
    "GatedNFTFactory": "0xbfe6E65daB36FbdB14bC7979D5DE244628F4eD3a",
    "NoticeBoard": "0x4B02C8ceF32db81D4918e1C5b4b16EBA6830872a",
    "RedeemableERC20ClaimEscrow": "0xCd67b4ef5659B776e996Dd4Be371DCac4ABba6c8",
    "RedeemableERC20Factory": "0x4127ea3DaF008043A3783094064670D1330d53F0",
    "SaleFactory": "0xE152e59e644e49AE5D73Df70658084DFc8b5CBb6",
    "VerifyFactory": "0x6E55B00EcFC718D202e57709A747fE3FC7F6E61E",
    "VerifyTierFactory": "0x2aAA6104B099B2d1DF1D984F67da042555506B71",
  }
  