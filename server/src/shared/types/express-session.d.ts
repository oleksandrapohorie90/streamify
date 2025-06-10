import 'express-session'
import type { SessionMetadata } from './session-metadata.types'

declare module 'express-session' {
	interface SessionData {
		userId?: string
		createdAt?: Date | string
		metadata: SessionMetadata
	}
}
//Now TypeScript knows our session contains metadata