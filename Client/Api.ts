/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Product {
  /** @format int32 */
  id?: number;
  /** @minLength 1 */
  productName: string;
  description?: string | null;
  /** @format int32 */
  typeId?: number;
  typeCategory?: TypeCategory | null;
  /** @format double */
  price?: number;
  /** @format int32 */
  stock?: number;
  productTypes?: ProductType[];
}

export interface TypeCategory {
  /** @format int32 */
  typeId?: number;
  /**
   * @minLength 1
   * @maxLength 100
   */
  typeName: string;
  productTypes?: ProductType[];
}

export interface ProductType {
  /** @format int32 */
  productTypeId?: number;
  /** @format int32 */
  productId?: number;
  /** @format int32 */
  typeId?: number;
  product?: Product;
  typeCategory?: TypeCategory;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:9000" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title My Title
 * @version 1.0.0
 * @baseUrl http://localhost:9000
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  products = {
    /**
     * No description
     *
     * @tags Products
     * @name ProductsCreateProduct
     * @request POST:/Products
     */
    productsCreateProduct: (data: Product, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/Products`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsGetAll
     * @request GET:/Products
     */
    productsGetAll: (params: RequestParams = {}) =>
      this.request<Product[], any>({
        path: `/Products`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsGetById
     * @request GET:/Products/{id}
     */
    productsGetById: (id: number, params: RequestParams = {}) =>
      this.request<Product, any>({
        path: `/Products/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsDelete
     * @request DELETE:/Products/{id}
     */
    productsDelete: (id: number, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/Products/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsUpdateProduct
     * @request PUT:/Products/{Id}
     */
    productsUpdateProduct: (id: number, data: Product, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/Products/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  typeCategory = {
    /**
     * No description
     *
     * @tags TypeCategory
     * @name TypeCategoryCreateType
     * @request POST:/TypeCategory
     */
    typeCategoryCreateType: (data: TypeCategory, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/TypeCategory`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeCategory
     * @name TypeCategoryGetAll
     * @request GET:/TypeCategory
     */
    typeCategoryGetAll: (params: RequestParams = {}) =>
      this.request<TypeCategory[], any>({
        path: `/TypeCategory`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeCategory
     * @name TypeCategoryGetById
     * @request GET:/TypeCategory/{id}
     */
    typeCategoryGetById: (id: number, params: RequestParams = {}) =>
      this.request<TypeCategory, any>({
        path: `/TypeCategory/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeCategory
     * @name TypeCategoryUpdateTypeCategory
     * @request PUT:/TypeCategory/{id}
     */
    typeCategoryUpdateTypeCategory: (id: number, data: TypeCategory, params: RequestParams = {}) =>
      this.request<TypeCategory, any>({
        path: `/TypeCategory/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeCategory
     * @name TypeCategoryDeleteTypeCategory
     * @request DELETE:/TypeCategory/{id}
     */
    typeCategoryDeleteTypeCategory: (id: number, params: RequestParams = {}) =>
      this.request<TypeCategory, any>({
        path: `/TypeCategory/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
}
