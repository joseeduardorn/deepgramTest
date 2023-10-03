import { LiveTranscriptionOptions, PrerecordedTranscriptionOptions, PrerecordedTranscriptionResponse, TranscriptionSource } from "../types";
import { LiveTranscription } from "./liveTranscription";
export declare class Transcriber {
    private _credentials;
    private _apiUrl;
    private _requireSSL;
    constructor(_credentials: string, _apiUrl: string, _requireSSL: boolean);
    /**
     * Transcribes prerecorded audio from a file or buffer.
     * @param {TranscriptionSource} source Source of audio to transcribe
     * @param {PrerecordedTranscriptionOptions} options Options used to toggle transcription features
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<PrerecordedTranscriptionResponse>}
     */
    preRecorded(source: TranscriptionSource, options?: PrerecordedTranscriptionOptions, endpoint?: string): Promise<PrerecordedTranscriptionResponse>;
    /**
     * Opens a websocket to Deepgram's API for live transcriptions
     * @param {LiveTranscriptionOptions} options Options used to toggle transcription features
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {LiveTranscription}
     */
    live(options?: LiveTranscriptionOptions, endpoint?: string): LiveTranscription;
}
