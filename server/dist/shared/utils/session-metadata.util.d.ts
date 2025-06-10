import type { Request } from 'express';
import type { SessionMetadata } from '../types/session-metadata.types';
export declare function getSessionMetadata(req: Request, userAgent: string): SessionMetadata;
