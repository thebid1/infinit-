import { DeployUniswapV3Action, type actions } from '@infinit-xyz/uniswap-v3/actions'
import type { z } from 'zod'

type Param = z.infer<typeof actions['init']['paramsSchema']>

const params: Param = {
  "nativeCurrencyLabel": 'ETH',
  "proxyAdminOwner": '0x472034520a3d2364913feaed3e8c784ae10e451b',
  "factoryOwner": '0x472034520a3d2364913feaed3e8c784ae10e451b',
  "wrappedNativeToken": '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
}

const signer = {
  "deployer": "thebid"
}

export default { params, signer, Action: DeployUniswapV3Action }
