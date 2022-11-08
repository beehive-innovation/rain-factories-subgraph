import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  Implementation,
  Initialized,
  NewChild
} from "../generated/Factories/Factories"

export function createImplementationEvent(
  sender: Address,
  implementation: Address
): Implementation {
  let implementationEvent = changetype<Implementation>(newMockEvent())

  implementationEvent.parameters = new Array()

  implementationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  implementationEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return implementationEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createNewChildEvent(sender: Address, child: Address): NewChild {
  let newChildEvent = changetype<NewChild>(newMockEvent())

  newChildEvent.parameters = new Array()

  newChildEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  newChildEvent.parameters.push(
    new ethereum.EventParam("child", ethereum.Value.fromAddress(child))
  )

  return newChildEvent
}
