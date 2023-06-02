import type { Chain } from "@wagmi/chains";
import { WSCLib, MilkomedaNetworkName } from "milkomeda-wsc";
import { Connector } from "wagmi";
type CardanoWSCConnectorOptions = {
    name: string;
    network?: MilkomedaNetworkName;
    oracleUrl?: string;
    blockfrostKey: string;
    jsonRpcProviderUrl?: string;
};
/**
 * Connector for [Cardano WSC]
 */
export declare abstract class CardanoWSCConnector extends Connector<WSCLib, CardanoWSCConnectorOptions> {
    #private;
    id: string;
    constructor({ chains, options: options_ }: {
        chains: Chain[];
        options: CardanoWSCConnectorOptions;
    });
    connect(): Promise<any>;
    disconnect(): Promise<void>;
    getAccount(): Promise<any>;
    getChainId(): Promise<number>;
    getProvider(): Promise<any>;
    getSigner(): Promise<any>;
    isAuthorized(): Promise<boolean>;
    onAccountsChanged: (accounts: string[]) => void;
    onChainChanged: (chainId: number | string) => void;
    onDisconnect(): void;
}
export {};
