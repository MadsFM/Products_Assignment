export interface Root {
    "x-generator": string
    openapi: string
    info: Info
    servers: Server[]
    paths: Paths
    components: Components
}

export interface Info {
    title: string
    version: string
}

export interface Server {
    url: string
}

export interface Paths {
    "/api/Products": ApiProducts
    "/api/Products/{id}": ApiProductsId
}

export interface ApiProducts {
    post: Post
    get: Get
}

export interface Post {
    tags: string[]
    operationId: string
    requestBody: RequestBody
    responses: Responses
}

export interface RequestBody {
    "x-name": string
    content: Content
    required: boolean
    "x-position": number
}

export interface Content {
    "application/json": ApplicationJson
}

export interface ApplicationJson {
    schema: Schema
}

export interface Schema {
    $ref: string
}

export interface Responses {
    "200": N200
}

export interface N200 {
    description: string
    content: Content2
}

export interface Content2 {
    "application/octet-stream": ApplicationOctetStream
}

export interface ApplicationOctetStream {
    schema: Schema2
}

export interface Schema2 {
    type: string
    format: string
}

export interface Get {
    tags: string[]
    operationId: string
    responses: Responses2
}

export interface Responses2 {
    "200": N2002
}

export interface N2002 {
    description: string
    content: Content3
}

export interface Content3 {
    "application/json": ApplicationJson2
}

export interface ApplicationJson2 {
    schema: Schema3
}

export interface Schema3 {
    type: string
    items: Items
}

export interface Items {
    $ref: string
}

export interface ApiProductsId {
    get: Get2
    put: Put
    delete: Delete
}

export interface Get2 {
    tags: string[]
    operationId: string
    parameters: Parameter[]
    responses: Responses3
}

export interface Parameter {
    name: string
    in: string
    required: boolean
    schema: Schema4
    "x-position": number
}

export interface Schema4 {
    type: string
    format: string
}

export interface Responses3 {
    "200": N2003
}

export interface N2003 {
    description: string
    content: Content4
}

export interface Content4 {
    "application/json": ApplicationJson3
}

export interface ApplicationJson3 {
    schema: Schema5
}

export interface Schema5 {
    $ref: string
}

export interface Put {
    tags: string[]
    operationId: string
    parameters: Parameter2[]
    requestBody: RequestBody2
    responses: Responses4
}

export interface Parameter2 {
    name: string
    in: string
    required: boolean
    schema: Schema6
    "x-position": number
}

export interface Schema6 {
    type: string
    format: string
}

export interface RequestBody2 {
    "x-name": string
    content: Content5
    required: boolean
    "x-position": number
}

export interface Content5 {
    "application/json": ApplicationJson4
}

export interface ApplicationJson4 {
    schema: Schema7
}

export interface Schema7 {
    $ref: string
}

export interface Responses4 {
    "200": N2004
}

export interface N2004 {
    description: string
    content: Content6
}

export interface Content6 {
    "application/octet-stream": ApplicationOctetStream2
}

export interface ApplicationOctetStream2 {
    schema: Schema8
}

export interface Schema8 {
    type: string
    format: string
}

export interface Delete {
    tags: string[]
    operationId: string
    parameters: Parameter3[]
    responses: Responses5
}

export interface Parameter3 {
    name: string
    in: string
    required: boolean
    schema: Schema9
    "x-position": number
}

export interface Schema9 {
    type: string
    format: string
}

export interface Responses5 {
    "200": N2005
}

export interface N2005 {
    description: string
    content: Content7
}

export interface Content7 {
    "application/octet-stream": ApplicationOctetStream3
}

export interface ApplicationOctetStream3 {
    schema: Schema10
}

export interface Schema10 {
    type: string
    format: string
}

export interface Components {
    schemas: Schemas
}

export interface Schemas {
    Product: Product
    TypeCategory: TypeCategory2
    ProductType: ProductType
}

export interface Product {
    type: string
    additionalProperties: boolean
    required: string[]
    properties: Properties
}

export interface Properties {
    id: Id
    productName: ProductName
    description: Description
    typeId: TypeId
    typeCategory: TypeCategory
    price: Price
    stock: Stock
    productTypes: ProductTypes
}

export interface Id {
    type: string
    format: string
}

export interface ProductName {
    type: string
    minLength: number
}

export interface Description {
    type: string
    nullable: boolean
}

export interface TypeId {
    type: string
    format: string
}

export interface TypeCategory {
    nullable: boolean
    oneOf: OneOf[]
}

export interface OneOf {
    $ref: string
}

export interface Price {
    type: string
    format: string
}

export interface Stock {
    type: string
    format: string
}

export interface ProductTypes {
    type: string
    items: Items2
}

export interface Items2 {
    $ref: string
}

export interface TypeCategory2 {
    type: string
    additionalProperties: boolean
    required: string[]
    properties: Properties2
}

export interface Properties2 {
    typeId: TypeId2
    typeName: TypeName
    productTypes: ProductTypes2
}

export interface TypeId2 {
    type: string
    format: string
}

export interface TypeName {
    type: string
    maxLength: number
    minLength: number
}

export interface ProductTypes2 {
    type: string
    items: Items3
}

export interface Items3 {
    $ref: string
}

export interface ProductType {
    type: string
    additionalProperties: boolean
    properties: Properties3
}

export interface Properties3 {
    productTypeId: ProductTypeId
    productId: ProductId
    typeId: TypeId3
    product: Product2
    typeCategory: TypeCategory3
}

export interface ProductTypeId {
    type: string
    format: string
}

export interface ProductId {
    type: string
    format: string
}

export interface TypeId3 {
    type: string
    format: string
}

export interface Product2 {
    $ref: string
}

export interface TypeCategory3 {
    $ref: string
}
