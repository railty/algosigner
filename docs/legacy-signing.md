# AlgoSigner Legacy Signing

AlgoSigner launched in September 2020 with support for basic transaction signing. Over the following releases additional support for Multisig, Atomic, and Application transactions were added.

The combination of the complexity of working with non-basic transaction and the creation of a new standard for Wallets by Foundation led to the creation of [v2 signing](dApp-guide.md).

The initial, v1, transaction signing will be deprecated in a future release and is documented only for reference purposes.

[v1 dApp integration](legacy-dApp-integration.md)

### Transition to v2
- Examples of signing with v2 are available in the [dapp examples repo](https://purestake.github.io/algosigner-dapp-example/index.html).
- An interactive transition guide that demonstrates the differences between v1 and v2 signing is available as a link from the dapp examples repo or directly access the [transition guide](https://purestake.github.io/algosigner-dapp-example/v1v2TransitionGuide.html).

### Multisig Transactions

- Multisig transactions can be signed individually through AlgoSigner.
  - Using the associated msig for the transaction an available matching unsigned address will be selected if possible to sign the txn component.
  - The resulting sign will return the a msig with only this signature in the blob and will need to be merged with other signatures before sending to the network.
- An example of this can be seen in the [existing sample dApp multisig test](https://purestake.github.io/algosigner-dapp-example/tx-test/signTesting.html).

### Atomic Transactions

- Grouped transactions intended for atomic transaction functionality need to be grouped outside of AlgoSigner, but can be signed individually.
- The grouped transactions need to have their binary components concatenated to be accepted in the AlgoSigner send method.
- An example of this can be seen in the [existing sample dApp group test](https://purestake.github.io/algosigner-dapp-example/tx-test/signTesting.html).
