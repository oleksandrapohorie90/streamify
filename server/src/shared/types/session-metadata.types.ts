export interface LocationInfo {
	country: string
	city: string
	latidute: number
	longitude: number
}

export interface DeviceInfo {
	browser: string
	os: string
	type: string
}

export interface SessionMetadata {
	location: LocationInfo
	device: DeviceInfo
	ip: string
}
//You're defining what data you want to store with each session.