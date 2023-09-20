/// <reference types="node" />
import crypto from "crypto";
import { TimeUtil } from "./TimeUtil";
export declare class HashUtil {
    protected timeUtil: TimeUtil;
    constructor(timeUtil: TimeUtil);
    /**
     * Create a 24 character id using the sha256 algorithm + current timestamp
     * @returns 24 character hash
     */
    generate(): string;
    generateMd5ForData(data: string): string;
    generateSha1ForData(data: string): string;
    /**
     * Create a hash for the data parameter
     * @param algorithm algorithm to use to hash
     * @param data data to be hashed
     * @returns hash value
     */
    generateHashForData(algorithm: string, data: crypto.BinaryLike): string;
}
