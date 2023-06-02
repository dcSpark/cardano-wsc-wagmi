# Cardano WSC Wagmi Connector

[WAGMI](https://wagmi.sh/) Connector to connect with Wrapped Smart Contract.

# ⬇️ Install

```bash
npm install @dcspark/cardano-wsc-wagmi
```

or

```bash
yarn add @dcspark/cardano-wsc-wagmi
```

# ⭐ Usage

```javascript
import { CardanoWSCConnector } from "@dcspark/cardano-wsc-wagmi";

const flintWSCConnector = new CardanoWSCConnector({
  name: '';
  network: MilkomedaNetworkName.C1Devnet; // by default Milkomeda C1 Devnet
  oracleUrl: '';
  blockfrostKey: '';
  jsonRpcProviderUrl: '';
});
```

## **Example repositories:**

- https://github.com/DjedAlliance/Djed-Solidity-WebDashboard
