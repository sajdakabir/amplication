import {
  EnumGitProvider,
  EnumPullRequestMode,
  GitHubProviderOrganizationProperties,
  GitResourceMeta,
  OAuthProviderOrganizationProperties,
} from "@amplication/git-utils";
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

class Commit {
  @IsString()
  title!: string;
  @IsString()
  body!: string;
}

export class Value {
  @IsString()
  resourceId!: string;
  @IsString()
  @IsOptional()
  oldBuildId?: string | undefined;
  @IsString()
  newBuildId!: string;
  @IsString()
  gitProvider!: EnumGitProvider;
  @ValidateNested()
  gitProviderProperties!:
    | GitHubProviderOrganizationProperties
    | OAuthProviderOrganizationProperties;
  @IsString()
  gitOrganizationName!: string;
  @IsString()
  gitRepositoryName!: string;
  @IsString()
  @IsOptional()
  gitRepositoryGroupName?: string;
  @ValidateNested()
  commit!: Commit;
  @ValidateNested()
  gitResourceMeta!: GitResourceMeta;
  @IsString()
  pullRequestMode!: EnumPullRequestMode;
}
