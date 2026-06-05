export type PropertyKey =
  | 'beadLength'
  | 'bodyVolume'
  | 'bucketСapacity'
  | 'boomLiftingCapacity'
  | 'carryingСapacity'
  | 'bodyCapacity'
  | 'diggingDepth'
  | 'diggingHeight'
  | 'enginePower'
  | 'frontBucketCapacity'
  | 'netEnginePower'
  | 'liftingHeight'
  | 'maximumReachArrow'
  | 'ogee'
  | 'rearBucketCapacity'
  | 'turningRadius'
  | 'turnRadius'
  | 'weight'
  | 'boomLength'
  | 'minimumReach'
  | 'maximumReach'

export interface EquipmentCategory {
  img: string[]
  title: string[]
  price: number[]
  properties: PropertyKey[]
  link: string[]
  [key: string]: string[] | number[] | PropertyKey[]
}

export type CatalogKey =
  | 'autokranM'
  | 'mineM'
  | 'samosvalM'
  | 'ekskGusenichM'
  | 'ekskKolesM'
  | 'ekskPogrM'
  | 'teleskPogrM'
  | 'minPogruzM'
  | 'frontPogruzM'
  | 'mnpltrM'
