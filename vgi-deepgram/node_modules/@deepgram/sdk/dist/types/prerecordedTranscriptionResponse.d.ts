import { Metadata } from "./metadata";
import { Channel } from "./channel";
import { Utterance } from "./utterance";
export declare class PrerecordedTranscriptionResponse {
    err_code?: string;
    err_msg?: string;
    request_id?: string;
    metadata?: Metadata;
    results?: {
        channels: Array<Channel>;
        utterances?: Array<Utterance>;
        summary?: {
            result: "success" | "failure";
            short: string;
        };
    };
    /**
     * Returns a VTT formatted string based on the transcription response.
     * @param {number} lineLength The maximum line length. Default: 8
     * @returns {string}
     */
    toWebVTT(lineLength?: number): string;
    /**
     * Returns a SRT formatted string based on the transcription response.
     * @param {number} lineLength The maximum line length. Default: 8
     * @returns {string}
     */
    toSRT(lineLength?: number): string;
}
