import { ID3PartitionProps } from "d3/partition-layout";

type Times10 = (n: number) => number

/**
 * (D) Multiplies a given number by 10 and returns the result.
 * @param n The number to be multiplied by 10
 */
export declare const times10: Times10

type Times100 = (n: number) => number

/**
 * (D) Multiplies a given number by 100 and returns the result.
 * @param n The number to be multiplied by 100
 */
export declare const times100: Times100

export interface IAggregation {
  aggregationType: string
  name: string
  children?: IAggregation[]
}


type RenderD3PartitionLayout = (props: ID3PartitionProps) => void

export declare const renderD3PartitionLayout: RenderD3PartitionLayout
