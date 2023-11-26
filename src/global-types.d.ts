/**
 * Simple string alias for a more concise typings involving ID of entities.
 */
declare type ID = string

/**
 * Simple alias to better annotate where ISO or another Date-convertible date-time is expected
 */
declare type DateString = string

/**
 * String representing a time value, it is not a valid date string
 * typically might include multiple sections separated by `:` (HH:MM:SS)
 */
declare type TimeString = string

/**
 * Stringified JSON object (that you probably want to JSON.parse)
 */
declare type JsonString = string

/**
 * Either specified type or null
 */
declare type Nullable<TType> = TType | null

/**
 * Shortcut for `Nullable<ID>`
 */
declare type NullableID = Nullable<ID>

/**
 * Declare all type properties as Nullable
 */
declare type AllNullable<TObject> = {
  [TKey in keyof TObject]: Nullable<TObject[TKey]>
}

/**
 * Simple alias for `Record<string, V = any>` for string key based objects.
 */
declare type Dictionary<TValue = any> = Record<string, TValue>

/**
 * Shortcut for `ReadonlyArray<T>`
 */
declare type RoA<TItem> = ReadonlyArray<TItem>

/**
 * Useful for denoting untyped function without losing callable flag.
 */
declare type AnyFunction = (...args: any[]) => any

/**
 * Make properties of object writable again
 */
declare type Writeable<TObject> = { -readonly [TKey in keyof TObject]: TObject[TKey] }

/**
 * returns the type that is wrapped inside the provided promise type
 */
declare type PromisedType<TPromise> = TPromise extends PromiseLike<infer TInferredType>
  ? TInferredType
  : TPromise

/**
 * turns all properties of provided type into partials (OriginalType | undefined)
 */
declare type RecursivePartial<TObject> = {
  [key in keyof TObject]?: TObject[key] extends (infer TInferredType)[]
    ? RecursivePartial<TInferredType>[]
    : TObject[key] extends object
    ? RecursivePartial<TObject[key]>
    : TObject[key]
}

/**
 * just a shorthand for the React.ComponentProps helper
 */
declare type PropsOf<TComponent> = React.ComponentProps<TComponent>

/**
 * gets an union of object's values
 */
declare type ValueOf<T extends object> = T[keyof T]

/**
 * use to describe that the component does accept children & works with them but also can work without them
 */
declare type Children = React.PropsWithChildren<{}>
/**
 * use to describe that the component does require children to be meaningful
 */
declare type RequiredChildren = Required<React.PropsWithChildren<{}>>
/**
 * use to describe that the component does not expect any children prop (so that we wouldn't pass any by accident)
 */
declare type NoChildren = {
  children?: never
}
/**
 * removes `null` and `undefined` options from the type, making it strictly defined
 */
declare type Defined<T> = Exclude<T, null | undefined>

type FilteredKeys<TBaseObject, TRequestedValueType> = {
  [key in keyof TBaseObject]: TBaseObject[key] extends TRequestedValueType ? key : never
}
/**
 * get keys from `TBaseObject` that are referencing to a value of type `TRequestedValueType` in that object
 */
declare type KeysOfType<TBaseObject, TRequestedValueType> = FilteredKeys<
  TBaseObject,
  TRequestedValueType
>[keyof TBaseObject]
/**
 * get properties (keys and values) from `TBaseObject` which value is of type `TRequestedValueType` in that object
 */
declare type PropertiesOfType<TBaseObject, TRequestedValueType> = Pick<
  TBaseObject,
  KeysOfType<TBaseObject, TRequestedValueType>
>

/**
 * A safe version of the Omit utility type,
 * that enables to omit just the keys that actually exist in the object
 */
declare type OmitSafe<TObject, TKeys extends keyof TObject> = Omit<TObject, TKeys>
/**
 * A safe version of the Exclude utility type,
 * that enables to exclude just the keys that actually exist in the union
 */
declare type ExcludeSafe<TUnion extends string, TKeys extends TUnion> = Exclude<TUnion, TKeys>
/**
 * A safe version of the Extract utility type,
 * that enables to extract just the keys that actually exist in the union
 */
declare type ExtractSafe<TUnion extends string, TKeys extends TUnion> = Extract<TUnion, TKeys>

/**
 * returns `TIndex`-th item in the destructured result array
 * of provided function type
 */
declare type Result<TFunction, TIndex extends number> = ReturnType<TFunction>[TIndex]

/**
 * returns first item in the destructured result array
 * of provided function type
 */
declare type FirstResult<TFunction> = Result<TFunction, 0>

/**
 * returns second item in the destructured result array
 * of provided function type
 */
declare type SecondResult<TFunction> = Result<TFunction, 1>

/**
 * returns `TIndex`-th parameter of provided function type
 */
declare type Param<TFunction, TIndex extends number> = Parameters<TFunction>[TIndex]

/**
 * returns first parameter of provided function type
 */
declare type FirstParam<TFunction> = Param<TFunction, 0>

/**
 * returns second parameter of provided function type
 */
declare type SecondParam<TFunction> = Param<TFunction, 1>

/**
 * React useState setter
 */
declare type ReactSetState<TStateType> = React.Dispatch<React.SetStateAction<TStateType>>

/**
 * React state management tuple [state, setState]
 */
declare type StateManagement<TStateType> = [TStateType, ReactSetState<TStateType>]
/**
 * used to add an option to render just some skeleton/placeholder
 */
type SkeletonProps = { showSkeleton?: boolean }

/**
 * used to add the `data-testid` attribute to the DOM element to clearly identify the element during tests
 */
type TestingProps = { dataTestId?: string }

// https://knowyourmeme.com/memes/we-have-food-at-home
// me: can we get _any_?
// mom: we have _any_ at home!
// _any_ at home: ↓ ↓ ↓
/**
 * the closes we can get to `any` without `any`
 */
declare type Anything = string | number | {} | []

/**
 * strictly typed entries of an object-like type
 */
declare type Entries<TObject> = {
  [TKey in keyof TObject]: [TKey, TObject[TKey]]
}[keyof TObject][]
