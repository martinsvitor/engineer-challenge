
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Customer
 * 
 */
export type Customer = {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
}

/**
 * Model Policy
 * 
 */
export type Policy = {
  id: string
  customerId: string
  provider: string
  insuranceType: InsuranceType
  status: PolicyStatus
  startDate: Date
  endDate: Date | null
  createdAt: Date
}

/**
 * Model Family
 * 
 */
export type Family = {
  id: string
  firstName: string
  lastName: string
  customerId: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const InsuranceType: {
  LIABILITY: 'LIABILITY',
  HOUSEHOLD: 'HOUSEHOLD',
  HEALTH: 'HEALTH'
};

export type InsuranceType = (typeof InsuranceType)[keyof typeof InsuranceType]


export const PolicyStatus: {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED',
  DROPPED_OUT: 'DROPPED_OUT'
};

export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<GlobalReject>;

  /**
   * `prisma.family`: Exposes CRUD operations for the **Family** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Families
    * const families = await prisma.family.findMany()
    * ```
    */
  get family(): Prisma.FamilyDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.11.1
   * Query Engine version: 1a2506facaf1a4727b7c26850735e88ec779dee9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Customer: 'Customer',
    Policy: 'Policy',
    Family: 'Family'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    family: number
    policies: number
  }

  export type CustomerCountOutputTypeSelect = {
    family?: boolean
    policies?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CustomerCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CustomerCountOutputType
    : S extends undefined
    ? never
    : S extends CustomerCountOutputTypeArgs
    ?'include' extends U
    ? CustomerCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
    : CustomerCountOutputType
  : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     * 
    **/
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    dateOfBirth: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: Array<CustomerScalarFieldEnum>
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    dateOfBirth: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    family?: boolean | FamilyFindManyArgs
    policies?: boolean | PolicyFindManyArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerInclude = {
    family?: boolean | FamilyFindManyArgs
    policies?: boolean | PolicyFindManyArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerGetPayload<
    S extends boolean | null | undefined | CustomerArgs,
    U = keyof S
      > = S extends true
        ? Customer
    : S extends undefined
    ? never
    : S extends CustomerArgs | CustomerFindManyArgs
    ?'include' extends U
    ? Customer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'family' ? Array < FamilyGetPayload<S['include'][P]>>  :
        P extends 'policies' ? Array < PolicyGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'family' ? Array < FamilyGetPayload<S['select'][P]>>  :
        P extends 'policies' ? Array < PolicyGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Customer ? Customer[P] : never
  } 
    : Customer
  : Customer


  type CustomerCountArgs = Merge<
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }
  >

  export interface CustomerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>> : CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>> : CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Customer>>, PrismaPromise<Array<CustomerGetPayload<T>>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    family<T extends FamilyFindManyArgs = {}>(args?: Subset<T, FamilyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Family>>, PrismaPromise<Array<FamilyGetPayload<T>>>>;

    policies<T extends PolicyFindManyArgs = {}>(args?: Subset<T, PolicyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Policy>>, PrismaPromise<Array<PolicyGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Throw an Error if a Customer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Throw an Error if a Customer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     * 
    **/
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     * 
    **/
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs = {
    /**
     * The data used to create many Customers.
     * 
    **/
    data: Enumerable<CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     * 
    **/
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    /**
     * The data used to update Customers.
     * 
    **/
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     * 
    **/
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     * 
    **/
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     * 
    **/
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    /**
     * Filter which Customers to delete
     * 
    **/
    where?: CustomerWhereInput
  }


  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
  }



  /**
   * Model Policy
   */


  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    provider: string | null
    insuranceType: InsuranceType | null
    status: PolicyStatus | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    provider: string | null
    insuranceType: InsuranceType | null
    status: PolicyStatus | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    customerId: number
    provider: number
    insuranceType: number
    status: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type PolicyMinAggregateInputType = {
    id?: true
    customerId?: true
    provider?: true
    insuranceType?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    customerId?: true
    provider?: true
    insuranceType?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    customerId?: true
    provider?: true
    insuranceType?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type PolicyAggregateArgs = {
    /**
     * Filter which Policy to aggregate.
     * 
    **/
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs = {
    where?: PolicyWhereInput
    orderBy?: Enumerable<PolicyOrderByWithAggregationInput>
    by: Array<PolicyScalarFieldEnum>
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }


  export type PolicyGroupByOutputType = {
    id: string
    customerId: string
    provider: string
    insuranceType: InsuranceType
    status: PolicyStatus
    startDate: Date
    endDate: Date | null
    createdAt: Date
    _count: PolicyCountAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect = {
    id?: boolean
    customerId?: boolean
    provider?: boolean
    insuranceType?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerArgs
  }

  export type PolicyInclude = {
    customer?: boolean | CustomerArgs
  }

  export type PolicyGetPayload<
    S extends boolean | null | undefined | PolicyArgs,
    U = keyof S
      > = S extends true
        ? Policy
    : S extends undefined
    ? never
    : S extends PolicyArgs | PolicyFindManyArgs
    ?'include' extends U
    ? Policy  & {
    [P in TrueKeys<S['include']>]:
        P extends 'customer' ? CustomerGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'customer' ? CustomerGetPayload<S['select'][P]> :  P extends keyof Policy ? Policy[P] : never
  } 
    : Policy
  : Policy


  type PolicyCountArgs = Merge<
    Omit<PolicyFindManyArgs, 'select' | 'include'> & {
      select?: PolicyCountAggregateInputType | true
    }
  >

  export interface PolicyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PolicyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PolicyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Policy'> extends True ? CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>> : CheckSelect<T, Prisma__PolicyClient<Policy | null >, Prisma__PolicyClient<PolicyGetPayload<T> | null >>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PolicyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PolicyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Policy'> extends True ? CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>> : CheckSelect<T, Prisma__PolicyClient<Policy | null >, Prisma__PolicyClient<PolicyGetPayload<T> | null >>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PolicyFindManyArgs>(
      args?: SelectSubset<T, PolicyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Policy>>, PrismaPromise<Array<PolicyGetPayload<T>>>>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
    **/
    create<T extends PolicyCreateArgs>(
      args: SelectSubset<T, PolicyCreateArgs>
    ): CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>>

    /**
     * Create many Policies.
     *     @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     *     @example
     *     // Create many Policies
     *     const policy = await prisma.policy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PolicyCreateManyArgs>(
      args?: SelectSubset<T, PolicyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
    **/
    delete<T extends PolicyDeleteArgs>(
      args: SelectSubset<T, PolicyDeleteArgs>
    ): CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PolicyUpdateArgs>(
      args: SelectSubset<T, PolicyUpdateArgs>
    ): CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PolicyDeleteManyArgs>(
      args?: SelectSubset<T, PolicyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PolicyUpdateManyArgs>(
      args: SelectSubset<T, PolicyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
    **/
    upsert<T extends PolicyUpsertArgs>(
      args: SelectSubset<T, PolicyUpsertArgs>
    ): CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>>

    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PolicyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    customer<T extends CustomerArgs = {}>(args?: Subset<T, CustomerArgs>): CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * Throw an Error if a Policy can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Policy to fetch.
     * 
    **/
    where: PolicyWhereUniqueInput
  }


  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * Throw an Error if a Policy can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Policy to fetch.
     * 
    **/
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     * 
    **/
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     * 
    **/
    distinct?: Enumerable<PolicyScalarFieldEnum>
  }


  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * Filter, which Policies to fetch.
     * 
    **/
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     * 
    **/
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PolicyScalarFieldEnum>
  }


  /**
   * Policy create
   */
  export type PolicyCreateArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * The data needed to create a Policy.
     * 
    **/
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }


  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs = {
    /**
     * The data used to create many Policies.
     * 
    **/
    data: Enumerable<PolicyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Policy update
   */
  export type PolicyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * The data needed to update a Policy.
     * 
    **/
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     * 
    **/
    where: PolicyWhereUniqueInput
  }


  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs = {
    /**
     * The data used to update Policies.
     * 
    **/
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     * 
    **/
    where?: PolicyWhereInput
  }


  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * The filter to search for the Policy to update in case it exists.
     * 
    **/
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     * 
    **/
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }


  /**
   * Policy delete
   */
  export type PolicyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * Filter which Policy to delete.
     * 
    **/
    where: PolicyWhereUniqueInput
  }


  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs = {
    /**
     * Filter which Policies to delete
     * 
    **/
    where?: PolicyWhereInput
  }


  /**
   * Policy without action
   */
  export type PolicyArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
  }



  /**
   * Model Family
   */


  export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  export type FamilyMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    customerId: string | null
  }

  export type FamilyMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    customerId: string | null
  }

  export type FamilyCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    customerId: number
    _all: number
  }


  export type FamilyMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    customerId?: true
  }

  export type FamilyMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    customerId?: true
  }

  export type FamilyCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    customerId?: true
    _all?: true
  }

  export type FamilyAggregateArgs = {
    /**
     * Filter which Family to aggregate.
     * 
    **/
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     * 
    **/
    orderBy?: Enumerable<FamilyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Families
    **/
    _count?: true | FamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMaxAggregateInputType
  }

  export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily[P]>
      : GetScalarType<T[P], AggregateFamily[P]>
  }




  export type FamilyGroupByArgs = {
    where?: FamilyWhereInput
    orderBy?: Enumerable<FamilyOrderByWithAggregationInput>
    by: Array<FamilyScalarFieldEnum>
    having?: FamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyCountAggregateInputType | true
    _min?: FamilyMinAggregateInputType
    _max?: FamilyMaxAggregateInputType
  }


  export type FamilyGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    customerId: string | null
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  type GetFamilyGroupByPayload<T extends FamilyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupByOutputType[P]>
        }
      >
    >


  export type FamilySelect = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    customerId?: boolean
    Customer?: boolean | CustomerArgs
  }

  export type FamilyInclude = {
    Customer?: boolean | CustomerArgs
  }

  export type FamilyGetPayload<
    S extends boolean | null | undefined | FamilyArgs,
    U = keyof S
      > = S extends true
        ? Family
    : S extends undefined
    ? never
    : S extends FamilyArgs | FamilyFindManyArgs
    ?'include' extends U
    ? Family  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Customer' ? CustomerGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Customer' ? CustomerGetPayload<S['select'][P]> | null :  P extends keyof Family ? Family[P] : never
  } 
    : Family
  : Family


  type FamilyCountArgs = Merge<
    Omit<FamilyFindManyArgs, 'select' | 'include'> & {
      select?: FamilyCountAggregateInputType | true
    }
  >

  export interface FamilyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Family that matches the filter.
     * @param {FamilyFindUniqueArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FamilyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FamilyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Family'> extends True ? CheckSelect<T, Prisma__FamilyClient<Family>, Prisma__FamilyClient<FamilyGetPayload<T>>> : CheckSelect<T, Prisma__FamilyClient<Family | null >, Prisma__FamilyClient<FamilyGetPayload<T> | null >>

    /**
     * Find the first Family that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FamilyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FamilyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Family'> extends True ? CheckSelect<T, Prisma__FamilyClient<Family>, Prisma__FamilyClient<FamilyGetPayload<T>>> : CheckSelect<T, Prisma__FamilyClient<Family | null >, Prisma__FamilyClient<FamilyGetPayload<T> | null >>

    /**
     * Find zero or more Families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Families
     * const families = await prisma.family.findMany()
     * 
     * // Get first 10 Families
     * const families = await prisma.family.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyWithIdOnly = await prisma.family.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FamilyFindManyArgs>(
      args?: SelectSubset<T, FamilyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Family>>, PrismaPromise<Array<FamilyGetPayload<T>>>>

    /**
     * Create a Family.
     * @param {FamilyCreateArgs} args - Arguments to create a Family.
     * @example
     * // Create one Family
     * const Family = await prisma.family.create({
     *   data: {
     *     // ... data to create a Family
     *   }
     * })
     * 
    **/
    create<T extends FamilyCreateArgs>(
      args: SelectSubset<T, FamilyCreateArgs>
    ): CheckSelect<T, Prisma__FamilyClient<Family>, Prisma__FamilyClient<FamilyGetPayload<T>>>

    /**
     * Create many Families.
     *     @param {FamilyCreateManyArgs} args - Arguments to create many Families.
     *     @example
     *     // Create many Families
     *     const family = await prisma.family.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FamilyCreateManyArgs>(
      args?: SelectSubset<T, FamilyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Family.
     * @param {FamilyDeleteArgs} args - Arguments to delete one Family.
     * @example
     * // Delete one Family
     * const Family = await prisma.family.delete({
     *   where: {
     *     // ... filter to delete one Family
     *   }
     * })
     * 
    **/
    delete<T extends FamilyDeleteArgs>(
      args: SelectSubset<T, FamilyDeleteArgs>
    ): CheckSelect<T, Prisma__FamilyClient<Family>, Prisma__FamilyClient<FamilyGetPayload<T>>>

    /**
     * Update one Family.
     * @param {FamilyUpdateArgs} args - Arguments to update one Family.
     * @example
     * // Update one Family
     * const family = await prisma.family.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FamilyUpdateArgs>(
      args: SelectSubset<T, FamilyUpdateArgs>
    ): CheckSelect<T, Prisma__FamilyClient<Family>, Prisma__FamilyClient<FamilyGetPayload<T>>>

    /**
     * Delete zero or more Families.
     * @param {FamilyDeleteManyArgs} args - Arguments to filter Families to delete.
     * @example
     * // Delete a few Families
     * const { count } = await prisma.family.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FamilyDeleteManyArgs>(
      args?: SelectSubset<T, FamilyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FamilyUpdateManyArgs>(
      args: SelectSubset<T, FamilyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Family.
     * @param {FamilyUpsertArgs} args - Arguments to update or create a Family.
     * @example
     * // Update or create a Family
     * const family = await prisma.family.upsert({
     *   create: {
     *     // ... data to create a Family
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family we want to update
     *   }
     * })
    **/
    upsert<T extends FamilyUpsertArgs>(
      args: SelectSubset<T, FamilyUpsertArgs>
    ): CheckSelect<T, Prisma__FamilyClient<Family>, Prisma__FamilyClient<FamilyGetPayload<T>>>

    /**
     * Count the number of Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyCountArgs} args - Arguments to filter Families to count.
     * @example
     * // Count the number of Families
     * const count = await prisma.family.count({
     *   where: {
     *     // ... the filter for the Families we want to count
     *   }
     * })
    **/
    count<T extends FamilyCountArgs>(
      args?: Subset<T, FamilyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamilyAggregateArgs>(args: Subset<T, FamilyAggregateArgs>): PrismaPromise<GetFamilyAggregateType<T>>

    /**
     * Group by Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyGroupByArgs['orderBy'] }
        : { orderBy?: FamilyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Family.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FamilyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Customer<T extends CustomerArgs = {}>(args?: Subset<T, CustomerArgs>): CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Family findUnique
   */
  export type FamilyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Family
     * 
    **/
    select?: FamilySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyInclude | null
    /**
     * Throw an Error if a Family can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Family to fetch.
     * 
    **/
    where: FamilyWhereUniqueInput
  }


  /**
   * Family findFirst
   */
  export type FamilyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Family
     * 
    **/
    select?: FamilySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyInclude | null
    /**
     * Throw an Error if a Family can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Family to fetch.
     * 
    **/
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     * 
    **/
    orderBy?: Enumerable<FamilyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     * 
    **/
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     * 
    **/
    distinct?: Enumerable<FamilyScalarFieldEnum>
  }


  /**
   * Family findMany
   */
  export type FamilyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Family
     * 
    **/
    select?: FamilySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyInclude | null
    /**
     * Filter, which Families to fetch.
     * 
    **/
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     * 
    **/
    orderBy?: Enumerable<FamilyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Families.
     * 
    **/
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FamilyScalarFieldEnum>
  }


  /**
   * Family create
   */
  export type FamilyCreateArgs = {
    /**
     * Select specific fields to fetch from the Family
     * 
    **/
    select?: FamilySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyInclude | null
    /**
     * The data needed to create a Family.
     * 
    **/
    data: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
  }


  /**
   * Family createMany
   */
  export type FamilyCreateManyArgs = {
    /**
     * The data used to create many Families.
     * 
    **/
    data: Enumerable<FamilyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Family update
   */
  export type FamilyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Family
     * 
    **/
    select?: FamilySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyInclude | null
    /**
     * The data needed to update a Family.
     * 
    **/
    data: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
    /**
     * Choose, which Family to update.
     * 
    **/
    where: FamilyWhereUniqueInput
  }


  /**
   * Family updateMany
   */
  export type FamilyUpdateManyArgs = {
    /**
     * The data used to update Families.
     * 
    **/
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyInput>
    /**
     * Filter which Families to update
     * 
    **/
    where?: FamilyWhereInput
  }


  /**
   * Family upsert
   */
  export type FamilyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Family
     * 
    **/
    select?: FamilySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyInclude | null
    /**
     * The filter to search for the Family to update in case it exists.
     * 
    **/
    where: FamilyWhereUniqueInput
    /**
     * In case the Family found by the `where` argument doesn't exist, create a new Family with this data.
     * 
    **/
    create: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
    /**
     * In case the Family was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
  }


  /**
   * Family delete
   */
  export type FamilyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Family
     * 
    **/
    select?: FamilySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyInclude | null
    /**
     * Filter which Family to delete.
     * 
    **/
    where: FamilyWhereUniqueInput
  }


  /**
   * Family deleteMany
   */
  export type FamilyDeleteManyArgs = {
    /**
     * Filter which Families to delete
     * 
    **/
    where?: FamilyWhereInput
  }


  /**
   * Family without action
   */
  export type FamilyArgs = {
    /**
     * Select specific fields to fetch from the Family
     * 
    **/
    select?: FamilySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CustomerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    provider: 'provider',
    insuranceType: 'insuranceType',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const FamilyScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    customerId: 'customerId'
  };

  export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    dateOfBirth?: DateTimeFilter | Date | string
    family?: FamilyListRelationFilter
    policies?: PolicyListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    family?: FamilyOrderByRelationAggregateInput
    policies?: PolicyOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = {
    id?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    dateOfBirth?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PolicyWhereInput = {
    AND?: Enumerable<PolicyWhereInput>
    OR?: Enumerable<PolicyWhereInput>
    NOT?: Enumerable<PolicyWhereInput>
    id?: StringFilter | string
    customerId?: StringFilter | string
    provider?: StringFilter | string
    insuranceType?: EnumInsuranceTypeFilter | InsuranceType
    status?: EnumPolicyStatusFilter | PolicyStatus
    startDate?: DateTimeFilter | Date | string
    endDate?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    insuranceType?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type PolicyWhereUniqueInput = {
    id?: string
  }

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    insuranceType?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PolicyScalarWhereWithAggregatesInput>
    OR?: Enumerable<PolicyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PolicyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    customerId?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    insuranceType?: EnumInsuranceTypeWithAggregatesFilter | InsuranceType
    status?: EnumPolicyStatusWithAggregatesFilter | PolicyStatus
    startDate?: DateTimeWithAggregatesFilter | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FamilyWhereInput = {
    AND?: Enumerable<FamilyWhereInput>
    OR?: Enumerable<FamilyWhereInput>
    NOT?: Enumerable<FamilyWhereInput>
    id?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    customerId?: StringNullableFilter | string | null
    Customer?: XOR<CustomerRelationFilter, CustomerWhereInput> | null
  }

  export type FamilyOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    customerId?: SortOrder
    Customer?: CustomerOrderByWithRelationInput
  }

  export type FamilyWhereUniqueInput = {
    id?: string
  }

  export type FamilyOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    customerId?: SortOrder
    _count?: FamilyCountOrderByAggregateInput
    _max?: FamilyMaxOrderByAggregateInput
    _min?: FamilyMinOrderByAggregateInput
  }

  export type FamilyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FamilyScalarWhereWithAggregatesInput>
    OR?: Enumerable<FamilyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FamilyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    customerId?: StringNullableWithAggregatesFilter | string | null
  }

  export type CustomerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    family?: FamilyCreateNestedManyWithoutCustomerInput
    policies?: PolicyCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    family?: FamilyUncheckedCreateNestedManyWithoutCustomerInput
    policies?: PolicyUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateManyWithoutCustomerInput
    policies?: PolicyUpdateManyWithoutCustomerInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUncheckedUpdateManyWithoutCustomerInput
    policies?: PolicyUncheckedUpdateManyWithoutCustomerInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateInput = {
    id?: string
    provider: string
    insuranceType: InsuranceType
    status: PolicyStatus
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPoliciesInput
  }

  export type PolicyUncheckedCreateInput = {
    id?: string
    customerId: string
    provider: string
    insuranceType: InsuranceType
    status: PolicyStatus
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type PolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    insuranceType?: EnumInsuranceTypeFieldUpdateOperationsInput | InsuranceType
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPoliciesInput
  }

  export type PolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    insuranceType?: EnumInsuranceTypeFieldUpdateOperationsInput | InsuranceType
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateManyInput = {
    id?: string
    customerId: string
    provider: string
    insuranceType: InsuranceType
    status: PolicyStatus
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type PolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    insuranceType?: EnumInsuranceTypeFieldUpdateOperationsInput | InsuranceType
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    insuranceType?: EnumInsuranceTypeFieldUpdateOperationsInput | InsuranceType
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyCreateInput = {
    id?: string
    firstName: string
    lastName: string
    Customer?: CustomerCreateNestedOneWithoutFamilyInput
  }

  export type FamilyUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    customerId?: string | null
  }

  export type FamilyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    Customer?: CustomerUpdateOneWithoutFamilyInput
  }

  export type FamilyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FamilyCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    customerId?: string | null
  }

  export type FamilyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type FamilyListRelationFilter = {
    every?: FamilyWhereInput
    some?: FamilyWhereInput
    none?: FamilyWhereInput
  }

  export type PolicyListRelationFilter = {
    every?: PolicyWhereInput
    some?: PolicyWhereInput
    none?: PolicyWhereInput
  }

  export type FamilyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumInsuranceTypeFilter = {
    equals?: InsuranceType
    in?: Enumerable<InsuranceType>
    notIn?: Enumerable<InsuranceType>
    not?: NestedEnumInsuranceTypeFilter | InsuranceType
  }

  export type EnumPolicyStatusFilter = {
    equals?: PolicyStatus
    in?: Enumerable<PolicyStatus>
    notIn?: Enumerable<PolicyStatus>
    not?: NestedEnumPolicyStatusFilter | PolicyStatus
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    insuranceType?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    insuranceType?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    insuranceType?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumInsuranceTypeWithAggregatesFilter = {
    equals?: InsuranceType
    in?: Enumerable<InsuranceType>
    notIn?: Enumerable<InsuranceType>
    not?: NestedEnumInsuranceTypeWithAggregatesFilter | InsuranceType
    _count?: NestedIntFilter
    _min?: NestedEnumInsuranceTypeFilter
    _max?: NestedEnumInsuranceTypeFilter
  }

  export type EnumPolicyStatusWithAggregatesFilter = {
    equals?: PolicyStatus
    in?: Enumerable<PolicyStatus>
    notIn?: Enumerable<PolicyStatus>
    not?: NestedEnumPolicyStatusWithAggregatesFilter | PolicyStatus
    _count?: NestedIntFilter
    _min?: NestedEnumPolicyStatusFilter
    _max?: NestedEnumPolicyStatusFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type FamilyCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    customerId?: SortOrder
  }

  export type FamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    customerId?: SortOrder
  }

  export type FamilyMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    customerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type FamilyCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<FamilyCreateWithoutCustomerInput>, Enumerable<FamilyUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<FamilyCreateOrConnectWithoutCustomerInput>
    createMany?: FamilyCreateManyCustomerInputEnvelope
    connect?: Enumerable<FamilyWhereUniqueInput>
  }

  export type PolicyCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<PolicyCreateWithoutCustomerInput>, Enumerable<PolicyUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<PolicyCreateOrConnectWithoutCustomerInput>
    createMany?: PolicyCreateManyCustomerInputEnvelope
    connect?: Enumerable<PolicyWhereUniqueInput>
  }

  export type FamilyUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<FamilyCreateWithoutCustomerInput>, Enumerable<FamilyUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<FamilyCreateOrConnectWithoutCustomerInput>
    createMany?: FamilyCreateManyCustomerInputEnvelope
    connect?: Enumerable<FamilyWhereUniqueInput>
  }

  export type PolicyUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<PolicyCreateWithoutCustomerInput>, Enumerable<PolicyUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<PolicyCreateOrConnectWithoutCustomerInput>
    createMany?: PolicyCreateManyCustomerInputEnvelope
    connect?: Enumerable<PolicyWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FamilyUpdateManyWithoutCustomerInput = {
    create?: XOR<Enumerable<FamilyCreateWithoutCustomerInput>, Enumerable<FamilyUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<FamilyCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<FamilyUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: FamilyCreateManyCustomerInputEnvelope
    set?: Enumerable<FamilyWhereUniqueInput>
    disconnect?: Enumerable<FamilyWhereUniqueInput>
    delete?: Enumerable<FamilyWhereUniqueInput>
    connect?: Enumerable<FamilyWhereUniqueInput>
    update?: Enumerable<FamilyUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<FamilyUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<FamilyScalarWhereInput>
  }

  export type PolicyUpdateManyWithoutCustomerInput = {
    create?: XOR<Enumerable<PolicyCreateWithoutCustomerInput>, Enumerable<PolicyUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<PolicyCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<PolicyUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: PolicyCreateManyCustomerInputEnvelope
    set?: Enumerable<PolicyWhereUniqueInput>
    disconnect?: Enumerable<PolicyWhereUniqueInput>
    delete?: Enumerable<PolicyWhereUniqueInput>
    connect?: Enumerable<PolicyWhereUniqueInput>
    update?: Enumerable<PolicyUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<PolicyUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<PolicyScalarWhereInput>
  }

  export type FamilyUncheckedUpdateManyWithoutCustomerInput = {
    create?: XOR<Enumerable<FamilyCreateWithoutCustomerInput>, Enumerable<FamilyUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<FamilyCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<FamilyUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: FamilyCreateManyCustomerInputEnvelope
    set?: Enumerable<FamilyWhereUniqueInput>
    disconnect?: Enumerable<FamilyWhereUniqueInput>
    delete?: Enumerable<FamilyWhereUniqueInput>
    connect?: Enumerable<FamilyWhereUniqueInput>
    update?: Enumerable<FamilyUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<FamilyUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<FamilyScalarWhereInput>
  }

  export type PolicyUncheckedUpdateManyWithoutCustomerInput = {
    create?: XOR<Enumerable<PolicyCreateWithoutCustomerInput>, Enumerable<PolicyUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<PolicyCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<PolicyUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: PolicyCreateManyCustomerInputEnvelope
    set?: Enumerable<PolicyWhereUniqueInput>
    disconnect?: Enumerable<PolicyWhereUniqueInput>
    delete?: Enumerable<PolicyWhereUniqueInput>
    connect?: Enumerable<PolicyWhereUniqueInput>
    update?: Enumerable<PolicyUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<PolicyUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<PolicyScalarWhereInput>
  }

  export type CustomerCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<CustomerCreateWithoutPoliciesInput, CustomerUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPoliciesInput
    connect?: CustomerWhereUniqueInput
  }

  export type EnumInsuranceTypeFieldUpdateOperationsInput = {
    set?: InsuranceType
  }

  export type EnumPolicyStatusFieldUpdateOperationsInput = {
    set?: PolicyStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneRequiredWithoutPoliciesInput = {
    create?: XOR<CustomerCreateWithoutPoliciesInput, CustomerUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPoliciesInput
    upsert?: CustomerUpsertWithoutPoliciesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutPoliciesInput, CustomerUncheckedUpdateWithoutPoliciesInput>
  }

  export type CustomerCreateNestedOneWithoutFamilyInput = {
    create?: XOR<CustomerCreateWithoutFamilyInput, CustomerUncheckedCreateWithoutFamilyInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFamilyInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutFamilyInput = {
    create?: XOR<CustomerCreateWithoutFamilyInput, CustomerUncheckedCreateWithoutFamilyInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFamilyInput
    upsert?: CustomerUpsertWithoutFamilyInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutFamilyInput, CustomerUncheckedUpdateWithoutFamilyInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumInsuranceTypeFilter = {
    equals?: InsuranceType
    in?: Enumerable<InsuranceType>
    notIn?: Enumerable<InsuranceType>
    not?: NestedEnumInsuranceTypeFilter | InsuranceType
  }

  export type NestedEnumPolicyStatusFilter = {
    equals?: PolicyStatus
    in?: Enumerable<PolicyStatus>
    notIn?: Enumerable<PolicyStatus>
    not?: NestedEnumPolicyStatusFilter | PolicyStatus
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedEnumInsuranceTypeWithAggregatesFilter = {
    equals?: InsuranceType
    in?: Enumerable<InsuranceType>
    notIn?: Enumerable<InsuranceType>
    not?: NestedEnumInsuranceTypeWithAggregatesFilter | InsuranceType
    _count?: NestedIntFilter
    _min?: NestedEnumInsuranceTypeFilter
    _max?: NestedEnumInsuranceTypeFilter
  }

  export type NestedEnumPolicyStatusWithAggregatesFilter = {
    equals?: PolicyStatus
    in?: Enumerable<PolicyStatus>
    notIn?: Enumerable<PolicyStatus>
    not?: NestedEnumPolicyStatusWithAggregatesFilter | PolicyStatus
    _count?: NestedIntFilter
    _min?: NestedEnumPolicyStatusFilter
    _max?: NestedEnumPolicyStatusFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type FamilyCreateWithoutCustomerInput = {
    id?: string
    firstName: string
    lastName: string
  }

  export type FamilyUncheckedCreateWithoutCustomerInput = {
    id?: string
    firstName: string
    lastName: string
  }

  export type FamilyCreateOrConnectWithoutCustomerInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutCustomerInput, FamilyUncheckedCreateWithoutCustomerInput>
  }

  export type FamilyCreateManyCustomerInputEnvelope = {
    data: Enumerable<FamilyCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type PolicyCreateWithoutCustomerInput = {
    id?: string
    provider: string
    insuranceType: InsuranceType
    status: PolicyStatus
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type PolicyUncheckedCreateWithoutCustomerInput = {
    id?: string
    provider: string
    insuranceType: InsuranceType
    status: PolicyStatus
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type PolicyCreateOrConnectWithoutCustomerInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutCustomerInput, PolicyUncheckedCreateWithoutCustomerInput>
  }

  export type PolicyCreateManyCustomerInputEnvelope = {
    data: Enumerable<PolicyCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type FamilyUpsertWithWhereUniqueWithoutCustomerInput = {
    where: FamilyWhereUniqueInput
    update: XOR<FamilyUpdateWithoutCustomerInput, FamilyUncheckedUpdateWithoutCustomerInput>
    create: XOR<FamilyCreateWithoutCustomerInput, FamilyUncheckedCreateWithoutCustomerInput>
  }

  export type FamilyUpdateWithWhereUniqueWithoutCustomerInput = {
    where: FamilyWhereUniqueInput
    data: XOR<FamilyUpdateWithoutCustomerInput, FamilyUncheckedUpdateWithoutCustomerInput>
  }

  export type FamilyUpdateManyWithWhereWithoutCustomerInput = {
    where: FamilyScalarWhereInput
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyWithoutFamilyInput>
  }

  export type FamilyScalarWhereInput = {
    AND?: Enumerable<FamilyScalarWhereInput>
    OR?: Enumerable<FamilyScalarWhereInput>
    NOT?: Enumerable<FamilyScalarWhereInput>
    id?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    customerId?: StringNullableFilter | string | null
  }

  export type PolicyUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PolicyWhereUniqueInput
    update: XOR<PolicyUpdateWithoutCustomerInput, PolicyUncheckedUpdateWithoutCustomerInput>
    create: XOR<PolicyCreateWithoutCustomerInput, PolicyUncheckedCreateWithoutCustomerInput>
  }

  export type PolicyUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PolicyWhereUniqueInput
    data: XOR<PolicyUpdateWithoutCustomerInput, PolicyUncheckedUpdateWithoutCustomerInput>
  }

  export type PolicyUpdateManyWithWhereWithoutCustomerInput = {
    where: PolicyScalarWhereInput
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyWithoutPoliciesInput>
  }

  export type PolicyScalarWhereInput = {
    AND?: Enumerable<PolicyScalarWhereInput>
    OR?: Enumerable<PolicyScalarWhereInput>
    NOT?: Enumerable<PolicyScalarWhereInput>
    id?: StringFilter | string
    customerId?: StringFilter | string
    provider?: StringFilter | string
    insuranceType?: EnumInsuranceTypeFilter | InsuranceType
    status?: EnumPolicyStatusFilter | PolicyStatus
    startDate?: DateTimeFilter | Date | string
    endDate?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type CustomerCreateWithoutPoliciesInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    family?: FamilyCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPoliciesInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    family?: FamilyUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPoliciesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPoliciesInput, CustomerUncheckedCreateWithoutPoliciesInput>
  }

  export type CustomerUpsertWithoutPoliciesInput = {
    update: XOR<CustomerUpdateWithoutPoliciesInput, CustomerUncheckedUpdateWithoutPoliciesInput>
    create: XOR<CustomerCreateWithoutPoliciesInput, CustomerUncheckedCreateWithoutPoliciesInput>
  }

  export type CustomerUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateManyWithoutCustomerInput
  }

  export type CustomerUncheckedUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUncheckedUpdateManyWithoutCustomerInput
  }

  export type CustomerCreateWithoutFamilyInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    policies?: PolicyCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutFamilyInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutFamilyInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutFamilyInput, CustomerUncheckedCreateWithoutFamilyInput>
  }

  export type CustomerUpsertWithoutFamilyInput = {
    update: XOR<CustomerUpdateWithoutFamilyInput, CustomerUncheckedUpdateWithoutFamilyInput>
    create: XOR<CustomerCreateWithoutFamilyInput, CustomerUncheckedCreateWithoutFamilyInput>
  }

  export type CustomerUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUpdateManyWithoutCustomerInput
  }

  export type CustomerUncheckedUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutCustomerInput
  }

  export type FamilyCreateManyCustomerInput = {
    id?: string
    firstName: string
    lastName: string
  }

  export type PolicyCreateManyCustomerInput = {
    id?: string
    provider: string
    insuranceType: InsuranceType
    status: PolicyStatus
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type FamilyUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyUncheckedUpdateManyWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    insuranceType?: EnumInsuranceTypeFieldUpdateOperationsInput | InsuranceType
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    insuranceType?: EnumInsuranceTypeFieldUpdateOperationsInput | InsuranceType
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateManyWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    insuranceType?: EnumInsuranceTypeFieldUpdateOperationsInput | InsuranceType
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}