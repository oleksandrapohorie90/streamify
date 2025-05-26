import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, Matches, IsEmail, MinLength } from 'class-validator';

//This ensures the input is properly validated at the GraphQL API boundary.
@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/)
  public username: string;

  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: 'Password must include upper, lower, number, and special character' }
  )
  public password: string;
}
