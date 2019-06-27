import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import * as fs from 'fs';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    console.log('FILE PATH: ' + filePath);
    console.log('process.cwd(): ' + process.cwd());
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'provision'])
        .default('development'),
      PORT: Joi.number().default(3000),
      POSTGRES_HOST: Joi.string().default('localhost'),
      POSTGRES_PORT: Joi.number().default(5432),
      POSTGRES_USER: Joi.string().default('admin'),
      POSTGRES_PASSWORD: Joi.string().default('password'),
      POSTGRES_DB: Joi.string().valid(['repas'])
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get nodeEnv(): string {
    return this.envConfig.NODE_ENV;
  }
  get port() {
    return this.envConfig.PORT;
  }
  get postresPort() {
    return this.envConfig.POSTGRES_PORT;
  }
  get postgresUser() {
    return this.envConfig.POSTGRES_USER;
  }
  get postgresPassword() {
    return this.envConfig.POSTGRES_PASSWORD;
  }
  get postgresDB() {
    return this.envConfig.POSTGRES_DB;
  }
}
