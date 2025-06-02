import { applyDecorators, UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../guards/gql-auth.guard'

// Wrap guard in a simple decorator
//This replaces repetitive @UseGuards(GqlAuthGuard) usage.
export function Authorization() {
	return applyDecorators(UseGuards(GqlAuthGuard))
}